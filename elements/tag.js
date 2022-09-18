import '../typhography.js';
import '../layout.js';

const TrdsTagStyle = document.createElement('style');
TrdsTagStyle.id = 'tag';
TrdsTagStyle.textContent = `

    tag{
        background-color: var(--color--accent);
        border-radius: 50px;
        box-sizing: border-box;
        padding: var(--space--xs) var(--space--s);
        font-size: var(--size--xs);
        width: max-content;
        display: inline-flex;
        gap: var(--space--xs);
        align-items: center;
        font-weight: bold;
    }

    tag.outline{
        box-shadow: inset 0 0 0 2px currentColor;
        background-color: transparent;
    }

`;
document.head.appendChild(TrdsTagStyle);