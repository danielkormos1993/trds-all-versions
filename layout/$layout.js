const $layout = new CSSStyleSheet();

$layout.replaceSync(`

    :root{

        --space--xs: 5px;
        --space--s: 10px;
        --space--m: 20px;
        --space--l: 30px;
        --space--xl: 40px;
        --space--xxl: 80px;

        --element--max-width: 800px;

    }

`);

document.adoptedStyleSheets = [...document.adoptedStyleSheets, $layout];