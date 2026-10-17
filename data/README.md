# Data files

| File | Who writes it | What it holds |
|---|---|---|
| `competitors/watchlist.csv` | competitor-intel (proposed rows); Yaqoob approves | Competitors we watch. `status`: approved, proposed or rejected. `page_id` is the ID the Ad Library returns. `facebook_username` and `facebook_profile_id` come from the page's share link; those IDs may differ from `page_id` |
| `competitors/ad-log.csv` | competitor-intel | Every Meta Ad Library ad seen, with first/last seen. `on_watchlist`: yes, no or own (our own ads). `status`: active, not_seen, or beyond_sample (older than the oldest ad a capped call returned, so unknown) |
| `dialect-corrections.csv` | the session that processes Yaqoob's review | Yaqoob's dialect corrections only. `kind`: word (enforced by the checker), phrase or style |
| `bookings-log.csv` | Yaqoob or whoever answers WhatsApp | One row per booking, including the answer to «منين سمعت بينا؟» |
| `consents.csv` | Yaqoob | One row per person filmed. `role`: staff, family or patient; `initials` only, never full names or phone numbers; `scope`: organic, paid or both; `stored_offline_at` says where the signed form is kept, e.g. "office binder". **Signed forms never go in this repo** |
