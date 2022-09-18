// elements to use: main, trds-section, stack, grid, card, container

import './layout/trds-section.js';

const TrdsLayoutStyle = document.createElement('style');
TrdsLayoutStyle.id = 'trds-layout';
TrdsLayoutStyle.textContent = `

    :root{

        --space--xs: 5px;
        --space--s: 10px;
        --space--m: 20px;
        --space--l: 30px;
        --space--xl: 40px;
        --space--xxl: 80px;

        --element--max-width: 800px;

    }

    body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    stack{
        display: grid;
        gap: var(--space--m);
        align-content: start;
    }

    grid{
        display: flex;
        flex-wrap: wrap;
        gap: var(--space--xxl);
    }

    grid.boxes-layout{
        gap: var(--space--m);
    }

    grid.auto-width-layout{
        gap: var(--space--s);
        align-items: center;
    }

    grid > *{
        flex:1 1 400px;
    }

    grid.auto-width-layout > *{
        flex: 0 1 auto;
    }

    card{
        background-color: var(--color--secondary-bg);
        display: flex;
        flex-direction: column;
    }

    card_media{
        display: block;
    }

    card_body{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: var(--space--l);
    }

    card_footer{
        display: block;
        padding: var(--space--l);
        padding-top: 0;
    }

`;
document.head.appendChild(TrdsLayoutStyle);