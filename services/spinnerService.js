/**
 * Shows the loading spinner and blurs the background.
 */
export function showSpinner(spinner) {
  spinner.classList.remove("hidden");
  document.body.classList.add("blurred");
}

/**
 * Hides the loading spinner and removes blur.
 */
export function hideSpinner(spinner) {
  spinner.classList.add("hidden");
  document.body.classList.remove("blurred");
}
