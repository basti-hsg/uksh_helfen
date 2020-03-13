import "./styles/style.scss";
// js libs
// import "alpinejs";

// add eventlistener to autofocus form input after cta click
const subscribe_cta_elements = document.querySelectorAll(".subscribe-cta");
const input_name_element = document.getElementById("name-input");

subscribe_cta_elements.forEach(function(element) {
  element.addEventListener("click", function() {
    window.setTimeout(function() {
      input_name_element.focus();
    }, 0);
  });
});
