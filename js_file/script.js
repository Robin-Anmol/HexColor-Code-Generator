////////// HEXCODE GENERATOR /////////////////

const hexCodeLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const heading = document.querySelector("#heading");
color.value = "  #f1f5f8";

////////////////////////////// function for generating hexcode   //////////////////////////////////
btn.addEventListener("click", function () {
  let HexColor = "#";
  for (let i = 0; i < 6; i++) {
    HexColor += hexCodeLetter[getRandomNumber()];
    /// by index the value of hexaCodeletter array get concat to the string hexcolor    ///
  }

  color.value = HexColor; /// for showing hexcode on screen  set the value of generated hexcolor to color
  document.body.style.backgroundColor = HexColor;
  heading.style.color = HexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexCodeLetter.length); // creating random no which will work as a index in hexCodeLetter array
}

/// function  for coping the hexacode
const copybtn = document.getElementById("copyHex");
copybtn.addEventListener("click", function () {
  color.select();
  color.setSelectionRange(0, 7);
  navigator.clipboard.writeText(color.value);
  alert(` HexCode ${color.value} Copied to Clipboard !!`);
});

document.addEventListener("contextmenu", (event) => event.preventDefault()); // stopping right click() event
