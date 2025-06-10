const MICROPHONE_KEY = "selectedMicrophoneDeviceId";
const SPEAKER_KEY = "selectedSpeakerDeviceId";

export function saveSelectedDevices(micId, speakerId) {
  localStorage.setItem(MICROPHONE_KEY, micId);
  localStorage.setItem(SPEAKER_KEY, speakerId);
}

export function loadSelectedDevices() {
  return {
    microphone: localStorage.getItem(MICROPHONE_KEY) || null,
    speaker: localStorage.getItem(SPEAKER_KEY) || null,
  };
}

export function clearSelectedDevices() {
  localStorage.removeItem(MICROPHONE_KEY);
  localStorage.removeItem(SPEAKER_KEY);
}
