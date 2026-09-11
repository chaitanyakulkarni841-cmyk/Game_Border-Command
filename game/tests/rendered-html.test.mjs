import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders the playable Border Command shell", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /BORDER/);
  assert.match(html, /Western Command/);
  assert.match(html, /Play now/);
  assert.match(html, /S-400/);
  assert.match(html, /THEATRE COMMAND/);
  assert.match(html, /GROUND COMMAND/);
  assert.match(html, /terrain.webp/);
  assert.match(html, /unit-atlas.png/);
  assert.match(html, /Forces &amp; build/);
  assert.match(html, /3D terrain/);
  assert.match(html, /River crossings/);
  assert.match(html, /Follow camera/);
  assert.match(html, /new-units.png/);
  assert.match(html, /Diplomacy/);
  assert.match(html, /FORCES &amp; BUILD/);
  assert.match(html, /Quick deploy/);
  assert.match(html, /Cmd or Ctrl-drag/);
  assert.match(html, /forces-pinned/);
  assert.match(html, /Jammu and Kashmir/);
  assert.doesNotMatch(html, /Confirm engagement|Launch cruise strike/);
  assert.doesNotMatch(html, developmentPreviewMeta);
});
