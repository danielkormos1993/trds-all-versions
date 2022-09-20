﻿import '../layout/layout-vars.js';

const FormStyle = document.createElement('style');
FormStyle.id = 'form';
FormStyle.textContent = `

    input,
    select,
    textarea{
        display: block;
        max-width: var(--element--max-width);
        width: 100%;
        background-color: var(--color--secondary-bg);
        color: inherit;
        font-size: inherit;
        padding: var(--space--s);
        border: none;
        box-sizing: border-box;
        font-family: inherit;
        margin: 0;
    }

    select{
        font-weight: bold;
        border-bottom: 2px solid var(--color--primary);
    }
    
    input[type=checkbox]{
        width: var(--space--m);
        height: var(--space--m);
    }

`;
document.head.appendChild(FormStyle);