# Project Skills

Skills Claude Code can load for this repository. Each folder holds a `SKILL.md` and, where the source repo includes them, its reference files and licence.

| Skill | Source | Commit | Licence | Use it for |
|---|---|---|---|---|
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (`.claude/skills/impeccable`) | `e89e3ad` | Apache-2.0 (see `NOTICE.md`) | Critique, audit, polish, harden and layout review of UI |
| `animate` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | `a81dbca` | MIT | Designing a new animation: purpose, properties, curve, duration |
| `review-animations` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | `a81dbca` | MIT | Reviewing existing motion against a strict bar (`STANDARDS.md` included) |
| `animation-performance` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | `a81dbca` | MIT | Keeping animations on composited properties and inside the frame budget |

## What was left out

- **`impeccable` runtime scripts.** The source's `scripts/` folder downloads a native engine binary from GitHub Releases and runs a local live-browser server. It is not copied. Reference files that mention `scripts/impeccable` or `live` mode will describe steps that do not run here. The review and polish guidance still applies.
- **`taste-skill`** (MIT) and **`ui-ux-pro-max`** overlap with `impeccable` and are not added here. `ui-ux-pro-max` is already available in Claude Code sessions.
- Repos in the design-skill screenshot that are component libraries, specs or paid services (for example React Bits, Scroll World, which needs paid Higgsfield credits) are not Skills and are not installed.

## Adding a skill

Put the folder under `.claude/skills/<name>/` with a `SKILL.md` that starts with YAML frontmatter (`name`, `description`). Keep the source licence next to it and add a row to the table above.
