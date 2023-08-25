let birthday = document.getElementsByClassName('aboutMe__list-item');

const currentDate = new Date();

const birthDateStr = "21.12.05";
const birthYear = 2000 + parseInt(birthDateStr.split('.')[2]);
const birthMonth = parseInt(birthDateStr.split('.')[1]) - 1; 
const birthDay = parseInt(birthDateStr.split('.')[0]);
const birthDate = new Date(birthYear, birthMonth, birthDay);

let age = currentDate.getFullYear() - birthDate.getFullYear();

if (
  currentDate.getMonth() < birthDate.getMonth() ||
  (currentDate.getMonth() === birthDate.getMonth() &&
    currentDate.getDate() < birthDate.getDate())
) {
  age--;
}

birthday[1].innerText += ` (${age} years)`;