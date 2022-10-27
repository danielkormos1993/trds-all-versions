import '../layout/$layout.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    video{
        display: block;
        max-width: var(--element--max-width);
        width: 100%;
        height: auto;
        object-fit: contain;           
    }

`);