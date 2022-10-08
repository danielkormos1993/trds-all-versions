import '../../layout/$layout.js';

const TrdsTagStyle = new CSSStyleSheet();
TrdsTagStyle.replaceSync(`

tag{
    background-color: var(--color--accent);
    border-radius: 50px;
    box-sizing: border-box;
    padding: var(--space--xs) var(--space--s);
    font-size: var(--size--xs);
    font-weight: bold;
}

tag.outline{
    box-shadow: inset 0 0 0 2px currentColor;
    background-color: transparent;
}

`);

export default TrdsTagStyle;