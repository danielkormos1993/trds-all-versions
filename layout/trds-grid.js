import TrdsElement from "../trds-element.js";

TrdsElement.addStyle(`

    trds-grid{
        display: flex;
        flex-wrap: wrap;
        gap: var(--space--xxl);
    }

    trds-grid.boxes-layout{
        gap: var(--space--m);
    }

    trds-grid.auto-width-layout{
        gap: var(--space--s);
        align-items: center;
    }

    trds-grid > *{
        flex:1 1 var(--element--base-width);
    }

    trds-grid.auto-width-layout > *{
        flex: 0 1 auto;
    }

`);