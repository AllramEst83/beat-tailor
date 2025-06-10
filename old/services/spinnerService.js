export function showSpinner(spinner) {
  spinner.classList.remove("hidden");
  document.body.classList.add("blurred");
}

export function hideSpinner(spinner) {
  spinner.classList.add("hidden");
  document.body.classList.remove("blurred");
}
