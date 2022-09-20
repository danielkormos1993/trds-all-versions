// elements to use: h1,h2...h6, p, span
// classes available: .variant--1, .size--{xs...xxl}

import '../layout/layout-vars.js';
import './typhography-vars.js';

const TyphographyStyle = document.createElement('style');
TyphographyStyle.id = 'typhography';
TyphographyStyle.textContent = `

    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
        max-width: var(--element--max-width);
    }

    .variant--1{
        text-transform: uppercase;
        letter-spacing: .2em;
        font-size: var(--size--m);
        line-height: var(--size--m--line-height);
    }

    h1, .size--xxl{
        font-size: var(--size--xxl);
        line-height: var(--size--xxl--line-height);
    }

    h2, .size--xl{
        font-size: var(--size--xl);
        line-height: var(--size--xl--line-height);
    }

    h3, .size--l{
        font-size: var(--size--l);
        line-height: var(--size--l--line-height);
    }

    h4, .size--m{
        font-size: var(--size--m);
        line-height: var(--size--m--line-height);
    }

    h5, .size--s{
        font-size: var(--size--s);
        line-height: var(--size--s--line-height);
    }

    h6, .size--xs{
        font-size: var(--size--xs);
        line-height: var(--size--xs--line-height);
    }

`;
document.head.appendChild(TyphographyStyle);