#!/usr/bin/env python3
"""Export staged/tracked source for GitHub without host identity or build products.
Run from the repository after staging new source files. No credentials are read.
"""
from pathlib import Path
import json
import subprocess
import zipfile
root = Path(__file__).resolve().parents[1]
target = root / 'public/downloads/border-command-source.zip'
target.parent.mkdir(parents=True, exist_ok=True)
files = subprocess.check_output(['git', 'ls-files', '-z'], cwd=root).decode().split('\0')
with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
    for name in sorted(filter(None, files)):
        if name.startswith(('public/downloads/', '.sites-runtime/', '.wrangler/', '.env', 'dist/', 'node_modules/')):
            continue
        path = root / name
        if not path.is_file():
            continue
        data = path.read_bytes()
        if name == '.openai/hosting.json':
            data = (json.dumps({'d1': None, 'r2': None}, indent=2) + '\n').encode()
        info = zipfile.ZipInfo('border-command/' + name, (2026, 9, 10, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        info.external_attr = (0o100755 if path.stat().st_mode & 0o111 else 0o100644) << 16
        archive.writestr(info, data)
with zipfile.ZipFile(target) as archive:
    assert archive.testzip() is None
    names = archive.namelist()
    for name in ['package.json', 'README.md', '.github/workflows/ci.yml', 'worker-configuration.d.ts', 'lib/game/world.ts']:
        assert 'border-command/' + name in names
    assert 'project_id' not in json.loads(archive.read('border-command/.openai/hosting.json'))
print(f'Exported {len(names)} source files, {target.stat().st_size:,} bytes: {target.name}')
