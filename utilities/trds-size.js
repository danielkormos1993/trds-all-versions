// just drop the appropiate class on the element for sizing(text, icon ...)

import '../base/sizes.js';

let styleTag = document.createElement('style');
styleTag.id = 'trds-size-style';
styleTag.textContent = `
    .trds-size--xs{
        font-size: var(--trds-size--xs);
        line-height: 1.5;
    }
    .trds-size--s{
        font-size: var(--trds-size--s);
        line-height: 1.5;
    }
    .trds-size--m{
        font-size: var(--trds-size--m);
        line-height: 1.5;
    }
    .trds-size--l{
        font-size: var(--trds-size--l);
        line-height: 1.42;
    }
    .trds-size--xl{
        font-size: var(--trds-size--xl);
        line-height: 1.3;
    }
    .trds-size--xxl{
        font-size: var(--trds-size--xxl);
        line-height: 1.25;
    }
`;
document.head.appendChild(styleTag);