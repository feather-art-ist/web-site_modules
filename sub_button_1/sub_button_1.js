const SUB_BUTTON = document.getElementsByClassName("subButton")[0];
const TEXT_ON_SUB_BUTTON = document.getElementsByClassName("areYouSub")[0];
let sub = false;

function subClik() {
    SUB_BUTTON.style.backgroundColor = sub ? "rgb(100, 15, 15)" : "rgb(117, 117, 117)";
    TEXT_ON_SUB_BUTTON.textContent = sub ? "subscribe" : "unsubscribe";
    TEXT_ON_SUB_BUTTON.style.letterSpacing = sub ? ".5em" : ".3em";

    sub = !sub;
}