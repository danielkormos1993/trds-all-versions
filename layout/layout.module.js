﻿import './$layout.js';
import createStyle from "../libs/createStyle.js";

createStyle(`

    body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    trds-stack{
        display: grid;
        gap: var(--space--m);
        align-content: start;
    }

    trds-grid{
        display: flex;
        flex-wrap: wrap;
        gap: var(--space--xxl);
        row-gap: var(--space--xl);
    }

    trds-grid.boxes-layout{
        gap: var(--space--m);
        row-gap: var(--space--m);
    }

    trds-grid.auto-width-layout{
        gap: var(--space--s);
        row-gap: var(--space--s);
        align-items: center;
    }

    trds-grid > *{
        flex:1 1 400px;
    }

    trds-grid.auto-width-layout > *{
        flex: 0 1 auto;
    }

    trds-card{
        background-color: var(--color--secondary-bg);
        display: flex;
        flex-direction: column;
    }

    trds-card_media{
        display: block;
    }

    trds-card_body{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: var(--space--l);
    }

    trds-card_footer{
        display: block;
        padding: var(--space--l);
        padding-top: 0;
    }

`);