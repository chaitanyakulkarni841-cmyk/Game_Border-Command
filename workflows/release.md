# Release workflow

[Portfolio index](../README.md)

1. Record the source revision and the player problem being changed.
2. Check that requirements and implemented controls agree. Update scenario/platform configuration and documentation together.
3. Run the project's own type check, production build and deterministic tests. Keep exact results with the revision.
4. Check affected interactions manually. Include pause/save/resume, terrain constraints and a reachable end state when relevant.
5. Reconcile generated weapon/scenario catalogues and icon links with source.
6. Review the package: retain lockfiles, tests and executable modes; exclude secrets, dependencies and runtime output.
7. Publish a verified build and check its entry URL. Update the README play link only to the actual deployment.
8. Record known limitations, save compatibility and the previous stable revision.

## Current repository gate

Importing source is still pending. No GitHub build workflow is claimed to exist in this documentation-only state. The prepared release previously recorded 55 automated checks, but those must be reproducible from the eventual checkout.

## Rollback

Retain the previous stable source and deployment identifiers. Treat save migrations explicitly; a rollback should not silently corrupt a newer save. Do not label a release “bug-free.”
