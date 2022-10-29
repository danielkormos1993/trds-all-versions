import '../layout/$layout.js';
import createStyle from '../libs/createStyle.js';
import '../typhography/$typhography.js';

createStyle(`

trds-tag{
    background-color: var(--color--accent);
    border-radius: 50px;
    box-sizing: border-box;
    padding: var(--space--xs) var(--space--s);
    font-size: var(--size--xs);
    font-weight: bold;
}

trds-tag.outline{
    box-shadow: inset 0 0 0 2px currentColor;
    background-color: transparent;
}

`)