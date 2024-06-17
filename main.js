var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl)})
(function (document) {
    "use strict";
    const ready = (callback) => {
      if (document.readyState != "loading") callback();
      else document.addEventListener("DOMContentLoaded", callback);
    };
    ready(() => {
      const img = document.getElementById("image");
      const simpleModal = document.getElementById("simple-modal");
      simpleModal.addEventListener("show.bs.modal", (e) => {
          const bigImage = e.relatedTarget.getAttribute('data-bigimage')
          img.src = bigImage;
      });
    });
  })(document);