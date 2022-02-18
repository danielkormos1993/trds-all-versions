import TrdsElement from "../trds-element.js";
import './trds-section.js';

TrdsElement.addStyle(`

    body{
        display: grid;
        grid-template-rows: 1fr auto;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    main{
        display: flex;
        flex-direction: column;
    }

`);