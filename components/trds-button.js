import '../layout/$layout.js';
import '../typhography/$typhography.js';
import '../elements/trds-icon.js';
import '../elements/trds-loader.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    .trds-button{
        all: unset;
        display: flex;
        box-sizing: border-box;
        padding: .75em 1.5em;
        border-radius: 5px;
        overflow: hidden;
        width: max-content;
        max-width: var(--element--max-width);
        --base-bg-color: var(--color--primary);
        background-color: var(--color--primary);
        font-weight: bold;
        text-transform: uppercase;
        font-size: var(--size--xs);
        transition: filter 0.25s ease-in-out, transform 0.25s ease-in-out;
        align-items: center;
        justify-content: center;
        gap: var(--space--s);
        cursor: pointer;
        position: relative;
        color: inherit;
        text-decoration: none;
    }

    .trds-button:hover,
    .trds-button:focus{
        filter: brightness(125%);
    }

    .trds-button:active{
        transform: scale(0.95);
    }

    .trds-button.disabled{
        filter: brightness(0.75);
        pointer-events: none;
    }

    .trds-button.plain{
        padding: 0;
        border-radius: 0;
        background-color: transparent;
        font-size: var(--size--s);
        color: var(--color--secondary-text);
    }

    .trds-button.plain:focus-visible{
        border-bottom: 2px solid var(--color--primary);
    }

    .trds-button.rounded{
        border-radius: 50px;
    }

    .trds-button.block{
        width: 100%;
    }

    .trds-button.icon-on-right trds-icon{
        order: 2;
    }

    .trds-button.outline{
        box-shadow: inset 0 0 0 2px currentColor;
        background-color: transparent;
    }

    .trds-button.outline:hover,
    .trds-button.outline:focus{
        box-shadow: none;
        background-color: var(--base-bg-color);
    }

    .trds-button trds-icon{
        flex-shrink: 0;
    }

`);

const renderButton = button => {

    button.innerHTML = `

        ${button.hasAttribute('icon') ?
            `<trds-icon style="--icon-src: url('${button.getAttribute('icon')}')"></trds-icon>`
            :
            ''
        }

        ${button.hasAttribute('text') ?
            `<span>${button.getAttribute('text')}</span>`
            :
            ''
        }

    `;

}

customElements.define('trds-button', class extends HTMLButtonElement{

    connectedCallback(){
        this.classList.add('trds-button');
        renderButton(this);
        this.loader = this.appendChild(document.createElement('trds-loader'));
    }

    static get observedAttributes(){ 
        return ['loading']; 
    }

    attributeChangedCallback(){
        if(this.hasAttribute('loading')){
            this.loader.setAttribute('active', '');
            this.classList.add('disabled');
        } else {
            this.loader.removeAttribute('active');
            this.classList.remove('disabled');
        }
    }

}, {extends: 'button'});

customElements.define('trds-button-link', class extends HTMLAnchorElement{

    connectedCallback(){
        this.classList.add('trds-button');
        renderButton(this);
    }
    
}, {extends: 'a'});