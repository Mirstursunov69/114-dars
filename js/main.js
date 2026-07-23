let matn = document.querySelector("p").innerText.split("")
let para = document.querySelector("p")
matn.forEach((letter, ind) => {
    setTimeout(() => {
        para.innerText += letter;
    }, 100 * ind);
});



