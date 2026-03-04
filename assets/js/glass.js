(function () {
  var cards = document.querySelectorAll('.card, .hero');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(900px) rotateX(' + (-y * 3.5) + 'deg) rotateY(' + (x * 4.5) + 'deg)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });

  var blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', function (e) {
    var x = e.clientX / window.innerWidth;
    var y = e.clientY / window.innerHeight;
    blobs.forEach(function (blob, i) {
      var dx = (x - 0.5) * (10 + i * 8);
      var dy = (y - 0.5) * (10 + i * 8);
      blob.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
    });
  }, { passive: true });
}());
