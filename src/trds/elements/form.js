﻿import '../layout/$layout.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

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

textarea{
    min-height: 150px;
}

input[type=checkbox]{
    width: var(--space--m);
    height: var(--space--m);
}

`)