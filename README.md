# BeatTailor

A web-based audio recording and playback tool built with Tone.js. Features include:

- Microphone and speaker device selection
- Live waveform visualization
- Audio recording, playback, and trimming
- Upload and playback of audio files
- Responsive, mobile-friendly UI

## Getting Started

1. **Install dependencies** (if any):

   - This project is pure HTML/JS and does not require a build step.
   - If you use localstorageService.js, ensure it is present in the `services/` folder.

2. **Run locally:**

   - Open `index.html` in your browser.
   - Allow microphone access when prompted.

3. **Features:**
   - Select input/output devices from dropdowns.
   - Record audio, trim, play, and reset.
   - Upload audio files for playback and trimming.
   - Visualize live and recorded waveforms.

## Notes

- Uses [Tone.js](https://tonejs.github.io/) for audio processing.
- Device selection uses the Web Audio API and may require HTTPS and user permissions.
- Some features (like output device selection) may not be supported in all browsers.

## License

MIT
