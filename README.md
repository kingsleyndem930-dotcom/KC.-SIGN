# KC Sign

KC Sign is an early, mobile-friendly web prototype for exploring English speech/text input with Nigerian Sign Language (NSL) sign clips.

> **Important:** This prototype is not a validated English-to-NSL translator. Sign languages have their own grammar and regional variation. Only present translations and clips as NSL content after review by fluent NSL signers and Deaf community collaborators.

## Run locally

The app is a static website. Because it loads the clip library with `fetch()`, serve the files over HTTP rather than opening `index.html` directly.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Add sign clips

1. Put each video file in the lowercase `clips/` directory.
2. Add a mapping from the phrase to the video filename in `clips/clips.json`:

```json
{
  "thank you": "thank_you.mp4"
}
```

For this example, the video should be at `clips/thank_you.mp4`. Use JSON strings for both keys and filenames. The web app expects this lowercase path, which also works on case-sensitive hosting.

The in-app “Attach a clip” control is temporary: it only keeps the selected video in the current browser session. Add approved clips to the repository to make them available persistently.

## Speech input

The app uses the browser's Web Speech API when available and requests the `en-NG` recognition language. Support and recognition quality vary by browser, device, and speaker. Users can type instead when voice input is unavailable or inaccurate.

## Content and accessibility

- Collaborate with fluent NSL signers and Deaf community reviewers on phrase selection, recordings, meanings, and regional variants.
- Obtain informed consent and agree how recordings may be stored and shared.
- Clearly label unreviewed or missing content; do not imply that fingerspelling or word-by-word playback is a full sentence translation.
- Keep text input and visible playback controls available as alternatives to speech input.

## Project files

- `index.html` — app interface and prototype logic
- `manifest.json` and `sw.js` — installability and service-worker support
- `clips/clips.json` — phrase-to-video mapping
- `clips/` — approved sign video files
