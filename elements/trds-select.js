//usage: select class="trds-select"
import '../base/layout.js';
import '../base/theme.js';

let styleTag = document.createElement('style');
styleTag.id = 'trds-select-style';
styleTag.textContent = `
    select.trds-select{
        display: block;
        max-width: var(--trds-element--max-width);
        background-color: var(--trds-theme--secondary-bg);
        color: inherit;
        font-weight: bold;
        width: 100%;
        padding: var(--trds-space--s);
        border: none;
        border-bottom: 2px solid var(--trds-theme--primary);
        font-family: inherit;
        margin: 0;
    }
`;

document.head.appendChild(styleTag);