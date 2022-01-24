const clickedElOne = document.getElementById("headerElOne");
const clickedElTwo = document.getElementById("headerElTwo");
const clickedElThree = document.getElementById("headerElThree");

const hiddenElOne = document.getElementById("liElOne");
const hiddenElTwo = document.getElementById("liElTwo");
const hiddenElThree = document.getElementById("LiElThree");

let isVisible1 = false
let isVisible2 = false
let isVisible3 = false

const remoteHidden = (isVisible) => {
    hiddenElOne.classList.add("hidden");
    hiddenElTwo.classList.add("hidden");
    hiddenElThree.classList.add("hidden");
    isVisible = false
}

const toShowListOne = () => {
    if (isVisible1 === false) {
        hiddenElOne.classList.remove("hidden");
        hiddenElTwo.classList.add("hidden");
        hiddenElThree.classList.add("hidden");
        isVisible1 = true
    } else {
        remoteHidden(isVisible1)
    }

};
const toShowListTwo = () => {
    if (isVisible2 === false) {
        hiddenElTwo.classList.remove("hidden");
        hiddenElOne.classList.add("hidden");
        hiddenElThree.classList.add("hidden");
        isVisible2 = true
    } else {
        remoteHidden(isVisible2)
    }


};
const toShowListThree = () => {
    if (isVisible3 === false) {
        hiddenElThree.classList.remove("hidden");
        hiddenElOne.classList.add("hidden");
        hiddenElTwo.classList.add("hidden");
        isVisible3 = true
    } else {
        remoteHidden(isVisible3)
    }

};

clickedElOne.addEventListener("click", toShowListOne);
clickedElTwo.addEventListener("click", toShowListTwo);
clickedElThree.addEventListener("click", toShowListThree);