const clickedElOne = document.getElementById("headerElOne");
const clickedElTwo = document.getElementById("headerElTwo");
const clickedElThree = document.getElementById("headerElThree");

const hiddenElOne = document.getElementById("liElOne");
const hiddenElTwo = document.getElementById("liElTwo");
const hiddenElThree = document.getElementById("LiElThree");


const toShowListOne = () => {
    hiddenElOne.classList.remove("hidden");
    hiddenElTwo.classList.add("hidden");
    hiddenElThree.classList.add("hidden");
};
const toShowListTwo = () => {
    hiddenElTwo.classList.remove("hidden");
    hiddenElOne.classList.add("hidden");
    hiddenElThree.classList.add("hidden");

};
const toShowListThree = () => {
    hiddenElThree.classList.remove("hidden");
    hiddenElOne.classList.add("hidden");
    hiddenElTwo.classList.add("hidden");
};

clickedElOne.addEventListener("click", toShowListOne);
clickedElTwo.addEventListener("click", toShowListTwo);
clickedElThree.addEventListener("click", toShowListThree);