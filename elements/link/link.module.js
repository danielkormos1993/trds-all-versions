const TrdsLinkStyle = new CSSStyleSheet();
TrdsLinkStyle.replaceSync(`

    a{
        transition: filter 0.25s ease-in-out;
        color: inherit;
        text-decoration: none;
        display: block;
    }

    a.text{
        display: inline;
        text-decoration: underline;
        text-decoration-color: var(--color--primary);
    }

    a:hover,
    a:active,
    a:focus{
        filter: brightness(125%);
    }

`);

export default TrdsLinkStyle;