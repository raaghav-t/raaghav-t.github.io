(function () {
  var dialog = document.getElementById("sketch-dialog");
  var dialogImage = document.getElementById("sketch-dialog-image");
  var closeButton = dialog && dialog.querySelector(".sketch-dialog-close");
  var triggers = document.querySelectorAll(".sketch-lightbox-trigger");
  var lastTrigger = null;

  if (!dialog || !dialogImage || !closeButton || !triggers.length) return;

  function closeDialog() {
    dialog.hidden = true;
    document.body.classList.remove("sketch-lightbox-open");
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
    if (lastTrigger) lastTrigger.focus();
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      lastTrigger = trigger;
      dialogImage.src = trigger.dataset.full;
      dialogImage.alt = trigger.dataset.alt || "Full-screen concept sketch";
      dialog.hidden = false;
      document.body.classList.add("sketch-lightbox-open");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeDialog);

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.classList.contains("sketch-dialog-inner")) {
      closeDialog();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !dialog.hidden) closeDialog();
  });
}());
