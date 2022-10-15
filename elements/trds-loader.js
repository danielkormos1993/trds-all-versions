import createStyle from "../libs/createStyle.js";

createStyle(`

    *:has(> trds-loader[active]){
        position: relative;
        max-height: 100vh;
        overflow: hidden;
    }

    *:has(> trds-loader[active]) *{
        visibility: hidden;
    }

    *:has(>  trds-loader[active]) > trds-loader{
        visibility: visible;
    }

    trds-loader{
        width: 100%;
        height: 100%;
        min-height: 1em;
        max-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    trds-loader:before{
        content: "";
        display: block;
        border-radius: 50%;
        width: 1em;
        height: 1em;
        border: .25em solid rgba(128, 128, 128, .5);
        border-top-color: currentColor;
        animation: spin 1s infinite linear;
    }

`);