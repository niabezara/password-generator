const passinput = document.querySelector(".passinput");
const tooltip = document.querySelector(".tooltip");
const mytooltip = document.querySelector(".tooltiptext");
const copyimg = document.querySelector(".copyimg");
const range = document.querySelector(".range");
const num = document.querySelector(".num");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const Numbers = document.querySelector("#Numbers");
const sympols = document.querySelector("#sympols");
const changing = document.querySelector(".changing");
const divs1 = document.querySelector(".changingdivs1");
const divs2 = document.querySelector(".changingdivs2");
const divs3 = document.querySelector(".changingdivs3");
const divs4 = document.querySelector(".changingdivs4");

// copy section
function copy() {
  passinput.select();
  passinput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passinput.value);
  mytooltip.innerHTML = "Copied";
  copyimg.style.stroke = "#FFFFFF";
}

function out() {
  mytooltip.innerHTML = "Copy";
  copyimg.style.stroke = "#A4FFAF";
}

// characters length section

let slider_value = 15;

range.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  let views_value = Math.round((this.value / this.max) * 100);
  this.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    value +
    "%, #18171F " +
    value +
    "%, rgba(24, 23, 31, 1))";
  num.innerHTML = this.value;
  passinput.maxLength = this.value;
  slider_value = this.value;
};

// checking the characters of the password
function strength() {
  let uppercasecharacter = "ABCDEFGHIKLMNOPQRSTVXYZ";
  let lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
  let numberscharacters = "0123456789";
  let symbolcharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let char = "";
  if (lowercase.checked) {
    char += lowercasecharacters;
  }
  if (uppercase.checked) {
    char += uppercasecharacter;
  }
  if (Numbers.checked) {
    char += numberscharacters;
  }
  if (sympols.checked) {
    char += symbolcharacters;
  }
  char = char
    .split("")
    .sort((a, b) => {
      return 0.5 - Math.random();
    })
    .join("");
  let str = "";
  for (let i = 0; i < range.value; i++) {
    str += char[i];
  }
  passinput.value = str;
}

// checking the strength of the password

function foo() {
  if (
    range.value > 10 &&
    lowercase.checked &&
    uppercase.checked &&
    Numbers.checked &&
    sympols.checked
  ) {
    changing.innerHTML = "STRONG";
    divs1.style.backgroundColor = "#a4ffaf";
    divs2.style.backgroundColor = "#a4ffaf";
    divs3.style.backgroundColor = "#a4ffaf";
    divs4.style.backgroundColor = "#a4ffaf";
  } else if (
    (lowercase.checked && uppercase.checked && Numbers.checked) ||
    sympols.checked
  ) {
    changing.innerHTML = "MEDIUM";
    divs1.style.backgroundColor = "#F8CD65";
    divs2.style.backgroundColor = "#F8CD65";
    divs3.style.backgroundColor = "#F8CD65";
    divs4.style.backgroundColor = "#18171F";
  } else if (
    range.value < 7 &&
    (lowercase.checked ||
      uppercase.checked ||
      Numbers.checked ||
      sympols.checked)
  ) {
    changing.innerHTML = "TOO WEAK!";
    divs1.style.backgroundColor = "#F64A4A";
    divs2.style.backgroundColor = "#18171F";
    divs3.style.backgroundColor = "#18171F";
    divs4.style.backgroundColor = "#18171F";
  } else if (
    lowercase.checked ||
    uppercase.checked ||
    Numbers.checked ||
    sympols.checked
  ) {
    changing.innerHTML = "WEAK";
    divs1.style.backgroundColor = "#FB7C58";
    divs2.style.backgroundColor = "#FB7C58";
    divs3.style.backgroundColor = "#18171F";
    divs4.style.backgroundColor = "#18171F";
  } else if (
    !lowercase.checked &&
    !uppercase.checked &&
    !Numbers.checked &&
    !sympols.checked
  ) {
    changing.innerHTML = "";
    passinput.value = "";
    divs1.style.backgroundColor = "#18171F";
    divs2.style.backgroundColor = "#18171F";
    divs3.style.backgroundColor = "#18171F";
    divs4.style.backgroundColor = "#18171F";
  }
}
