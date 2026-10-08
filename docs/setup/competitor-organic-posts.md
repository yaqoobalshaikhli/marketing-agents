# Setup: competitor organic posts (Coupler.io vs Metricool, free tiers)

Decision 2026-10-08: test both free tiers for one week each, then keep the better one. Both need **your** logins, so the mods can't do this for you. Screen labels below come from vendor docs and research, not from clicking through the apps. If a label differs, follow the app.

## Before either: the handle list

Coupler and Metricool track competitors by **Instagram handle**. The watch list (`data/competitors/watchlist.csv`) has Facebook Page IDs but no handles yet.

- Fill the `instagram_handle` column for the 5 approved labs.
- Only **Business or Creator** accounts can be read. A lab that runs a personal profile will fail; note it in `notes`.

## Week A: Coupler.io (already connected to Claude)

1. In Coupler.io, create a data flow. Source: **Instagram Public Data**.
2. Connect **TabeebX's Instagram Business account** as the credential. It is used to query public data; nothing is posted.
3. Add two reports: profile info and profile posts. Enter the competitor handles.
4. Data behaviour: **track changes over time**, so follower and post history builds up.
5. Destination: Claude (or Google Sheets). Schedule: weekly, Monday night, so data is fresh for Tuesday's run.
6. Check the free plan's limits in your Coupler account. They were not verifiable during research.

**Result to note in `docs/decisions.md`:** did all 5 handles return data? How many posts? Did history start building?

## Week B: Metricool Free

1. Create a Metricool account and connect TabeebX's Instagram and Facebook.
2. Add **5 competitors**. On Free, the 5 slots are reported to be fixed once chosen, so choose carefully: Majestic Lab first.
3. Connect Metricool to Claude. Metricool documents an MCP connector at `https://ai.metricool.com/mcp` ([help article](https://help.metricool.com/how-to-connect-metricools-mcp-with-claude-0l84v)). Add it as a custom connector in your claude.ai connector settings, or in Claude Code with:
   ```
   claude mcp add --transport http metricool https://ai.metricool.com/mcp
   ```
   About 75% confident in this URL; it comes from Metricool's help article and wasn't tested by us.

**Same result to note.** Metricool doesn't cover TikTok competitors.

## Then

Keep the one that returned more of the 5 labs with less setup. The `competitor-intel` agent reads whichever is connected; the playbook already allows both.
