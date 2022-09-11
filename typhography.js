// elements to use: h1,h2...h6, p, span
// classes available: .variant--1, .size--{xs...xxl}

const TrdsTyphographyStyle = document.createElement('style');
TrdsTyphographyStyle.id = 'trds-typhography';
TrdsTyphographyStyle.textContent = `

    :root{

        font-size: clamp(16px, 15.065px + 0.259vw, 20px);
        line-height: 1.5;
        -webkit-text-size-adjust: none;

        --size--xs: .75rem;
        --size--xs--line-height: 1.55;

        --size--s: .9rem;
        --size--s--line-height: 1.52;

        --size--m: 1rem;
        --size--m--line-height: 1.5;

        --size--l: 1.2rem;
        --size--l--line-height: 1.42;

        --size--xl: 2rem;
        --size--xl--line-height: 1.3;

        --size--xxl: clamp(2rem, 1.7662rem + 1.0390vw, 3rem);
        --size--xxl--line-height: 1.25;

    }

    span{
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
        max-width: 40em;
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
document.head.appendChild(TrdsTyphographyStyle);