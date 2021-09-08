let styleTag = document.createElement('style');
styleTag.id = 'trds-size-variables';
styleTag.textContent = `

    :root{
        font-size: clamp(16px, 15.065px + 0.259vw, 20px);
        --trds-size--xs: .75rem;
        --trds-size--s: .9rem;
        --trds-size--m: 1rem;
        --trds-size--l: 1.2rem;
        --trds-size--xl: 2rem;
        --trds-size--xxl: clamp(2rem, 1.7662rem + 1.0390vw, 3rem);
    }

`;
document.head.appendChild(styleTag);