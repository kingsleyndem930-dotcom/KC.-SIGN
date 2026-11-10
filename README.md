# KC Sign

KC Sign is a static prototype for capturing English speech, displaying the recognized transcript, and looking up an exact phrase in a Nigerian Sign Language (NSL) video library.

> **Important:** Speech recognition is not sign-language translation. The app can transcribe speech into English text, but it only displays NSL content when an exact phrase has been reviewed and an approved video is available. Sign languages have their own grammar and regional variation; this project is not a general-purpose English-to-NSL translator.

## Run locally

Serve the files over HTTP so the browser can load the JSON library and request microphone access:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Microphone access generally requires a secure context: HTTPS in deployment or localhost during development.

## Spoken input

The app uses the browser's built-in Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) when available. Choose a recognition locale (English Nigeria is selected by default), tap **Speak**, and review the transcript before checking it. Browser, device, locale support, network requirements, and transcription accuracy vary. If speech recognition is unavailable or inaccurate, type or edit the transcript.

The app does not upload audio itself, but browser speech recognition may be processed by the browser vendor's service. Check the browser's privacy information before using sensitive speech.

## Add reviewed sign videos

1. Record and review content with fluent NSL signers and Deaf community collaborators, with informed consent.
2. Put the approved video in the lowercase `clips/` directory.
3. In `clips/approved-library.json`, set the entry's `status` to `approved` and `video` to its relative filename, for example `thank_you.mp4`.
4. The app only activates entries marked `approved` that also have a video filename. Keep all other phrase ideas marked `needs_nsl_review`.

Example entry:

```json
{
  "id": "thank_you",
  "english": "Thank you",
  "category": "polite",
  "status": "approved",
  "video": "thank_you.mp4",
  "reviewed_by": "Reviewer name or agreed attribution",
  "notes": "Any context or regional variant notes"
}
```

The sample entries in the starter library are planning placeholders and are not active translations until reviewed and recorded.

## Project files

- `index.html` — app interface, browser speech recognition, and exact phrase lookup
- `phrasebook.html` — searchable planning catalog (unreviewed phrase ideas)
- `clips/approved-library.json` — phrase ideas and approved phrase/video records
- `clips/phrase-catalog.json` — unreviewed phrase ideas for discussion
- `clips/` — approved sign video files
- `manifest.json` and `sw.js` — installability and service-worker support
