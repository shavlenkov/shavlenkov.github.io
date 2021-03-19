let trigger;
let length = document.getElementsByClassName("modal-trigger").length;
let fontawesome = document.createElement("script");

fontawesome.setAttribute("src", "https://kit.fontawesome.com/a92211bf3b.js");
document.head.appendChild(fontawesome);

for (let i = 0; i < length; i++) {
  trigger = document.getElementsByClassName("modal-trigger")[i];
  trigger.setAttribute("onclick", "showModal(this)");
}
 
function showModal(button) {

  let button_attr = button.getAttribute("modal-toggle");
  let modal_id = document.getElementById(button_attr);
  let close;
  let close_length = document.querySelectorAll("i[close]").length;

  modal_id.style.display = "block";

  
  for (let j = 0; j < close_length; j++) {
    close = document.querySelectorAll("i[close]")[j];
    close.setAttribute("class", "fas fa-times");

    close.onclick = function() {
      modal_id.style.display = "none";
    }

  }
 
}