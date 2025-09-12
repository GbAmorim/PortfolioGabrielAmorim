let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const mainLogo = document.getElementById("main-logo");
const arrowLogo = document.querySelector(".arrowdown");
const menuLogo = document.getElementById("menu-icon");
const closeLogo = document.getElementById("botaofechar");
const setaDireita = document.getElementsByClassName("seta-direita");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    mainLogo.src = "/images/logowhite.svg";
    arrowLogo.src = "/icons/arrowwhite.svg";
    menuLogo.src = "/icons/menuiconwhite.svg";
    closeLogo.src = "/icons/closewhite.svg";
    setaDireita.src = "/icons/arrowrightwhite.svg";
    for (let arrow of setaDireita) {
        arrow.src = "/icons/arrowrightwhite.svg";
    }
    localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    mainLogo.src = "/images/logoblack.svg";
    arrowLogo.src = "/icons/arrowdown.svg";
    menuLogo.src = "/icons/menuicon.svg";
    closeLogo.src = "/icons/closeblack.svg";
    setaDireita.src = "/icons/arrowright.svg";
    for (let arrow of setaDireita) {
        arrow.src = "/icons/arrowright.svg";
    }
    localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();
else disableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
