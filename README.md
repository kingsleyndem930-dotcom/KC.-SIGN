# KC Sign

KC Sign is a static prototype for a Nigerian Sign Language (NSL) communication app that matches spoken or typed English to a limited sign phrase library.

> Important: This project is not a general-purpose English-to-NSL translator. It is a phrase-based app that relies on reviewed NSL recordings. Before making it public, every sign or phrase must be reviewed by fluent NSL signers and Deaf community collaborators.

## Run locally

Because the app loads JSON and video files with HTTP fetch requests, it should be served over a local web server.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project structure

- `index.html` — main app and speech/text translation prototype
- `phrasebook.html` — searchable phrase planning page
- `clips/approved-library.json` — starter approved phrase library (placeholder entries)
- `clips/phrase-catalog.json` — unreviewed phrase ideas for discussion
- `clips/clips.json` — runtime phrase-to-video mapping for actual sign videos
- `clips/` — approved sign video files

## Starter approved phrase library

`clips/approved-library.json` contains a small starter list of everyday phrases. The entries are placeholders for approved content, not live sign videos. Each item should be replaced with an actual reviewed sign clip and reviewer metadata before deployment.

## Phrase review workflow

1. Collect candidate phrases from real communication situations.
2. Review them with NSL experts and Deaf community members.
3. Record approved sign videos with consent.
4. Add video filenames to `clips/clips.json`.
5. Validate meaning, clarity, and regional appropriateness.
6. Only then promote a phrase to active use in the app.

## Important design notes

- Keep approved and unapproved phrases separate.
- Never display unreviewed phrase ideas as verified sign translations.
- Show a clear “not in approved library” message when unsupported content is spoken.
- Keep text input and playback controls available as fallback options.

## File naming guidance

Use lowercase file names in `clips/` and reference them consistently from `clips/clips.json`:

```json
{
  "thank you": "thank_you.mp4"
}
```

This helps keep paths reliable on case-sensitive systems.
