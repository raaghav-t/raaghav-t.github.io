(function () {
  var dialog = document.getElementById("sketch-dialog");
  var dialogImage = document.getElementById("sketch-dialog-image");
  var closeButton = dialog && dialog.querySelector(".sketch-dialog-close");
  var triggers = document.querySelectorAll(".sketch-lightbox-trigger");

  if (!dialog || !dialogImage || !closeButton || !triggers.length) return;

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      dialogImage.src = trigger.dataset.full;
      dialogImage.alt = trigger.dataset.alt || "Full-screen concept sketch";
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.classList.contains("sketch-dialog-inner")) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", function () {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
  });
}());
