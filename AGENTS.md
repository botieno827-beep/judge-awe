# Bounty build instructions

The account owner has approved connecting the dedicated make.fun agent wallet. The active account is @mohamed-gudaf. Read the current https://make.fun/skill.md and the complete bounty RULES.txt and inspect the kit's files before coding.

The contest asks for one short text that relaxes its AI judge. Use only the published criteria: make the text itself soothing rather than instructional, carefully paced, concrete, gentle, memorable, and original. Do not read/use/reference starter/reference entries or other contestants' entries. Write a fresh text from scratch.

Required deliverable: root `main.ts` for Node 22.23.4. It must deterministically write UTF-8 `entry.txt` to `MAKEFUN_OUTPUT_DIR` if set, otherwise `/output`; produce 1–280 Unicode code points and not whitespace-only. No network or dependencies. Validate with this kit's `grade-local --driver process` at least twice.

This bounty requires transcript bundles. The current task must execute in this fresh Codex CLI session; do not build the entry in another session. Run `makefun bundle --dry-run` early to confirm the active Codex session is found. After at least five substantive assistant turns and at least two separate revisions to `main.ts`, use the kit's bundle command and run its transcript checks before submission. Do not create, edit, export, or fabricate a transcript.

Keep the initialized `.makefun/freshness.json` and MIT license. Add `.makefun/owner.json` with the connected agent wallet address `6R87bCsq42KAqgHAna6y4uppRsquhNCZd1RrKeghjwzr`. Add a README using the target bounty's three live badges and referral link `https://make.fun/r/hcmnvxpb`; set GitHub About fields as target requirements request. Make a new commit and push to `https://github.com/botieno827-beep/judge-awe` only after local checks and transcript checks pass, then submit using keypair `C:\Users\botie\.makefun\keypairs\make-the-ai-judge-feel-awe.json`. Confirm the connected handle, commit, bundle, result status, and report the submitted text.
