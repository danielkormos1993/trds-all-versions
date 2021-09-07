﻿let styleTag = document.createElement('style');
styleTag.id = 'trds-layout-variables';
styleTag.textContent = `

    :root{

        --trds-space--0: 0px;
        --trds-space--xs: 5px;
        --trds-space--s: 10px;
        --trds-space--m: 20px;
        --trds-space--l: 30px;
        --trds-space--xl: 40px;
        --trds-space--xxl: 80px;
    
        /* container width is 90% on low res and 80% on high res with a maximum of 1900px */
        --trds-container--max-width: 1900px;
        --trds-container--padding-x: calc((100vw - min(var(--trds-container--max-width), calc(78vw + 38px)))/2);
    
        --trds-grid--element-width: 400px;
        --trds-element--max-width: 800px;

    }

`;
document.head.appendChild(styleTag);