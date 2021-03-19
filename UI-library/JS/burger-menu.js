let fontawesome = document.createElement("script");

fontawesome.setAttribute("src", "https://kit.fontawesome.com/a92211bf3b.js");
document.head.appendChild(fontawesome);
     
let length = document.getElementsByTagName("i").length;
let icon;

for (let i = 0; i < length; i++) {
  icon = document.getElementsByTagName("i")[i]

  if (icon.hasAttribute("menu-toggle") == true) {
    icon.setAttribute("class", "fas fa-bars");
    icon.setAttribute("onclick", "funct(this)");
  }

}
     
function funct(icon) {

  let icon_attr = icon.getAttribute("menu-toggle");
  let submenu_id = document.getElementById(icon_attr);

  submenu_id.style.display = "block";

}