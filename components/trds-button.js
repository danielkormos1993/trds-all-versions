import '../layout/$layout.js';
import '../typhography/$typhography.js';
import '../elements/trds-icon.js';
import '../elements/trds-loader.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    trds-button{
        display: block;
        width: max-content;
    }

    .trds-button{
        all: unset;
        box-sizing: border-box;
        --base-bg-color: var(--color--primary);
        background-color: var(--color--primary);
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        padding: .75em 1.5em;
        transition: filter 0.25s ease-in-out, transform 0.25s ease-in-out;
        align-items: center;
        justify-content: center;
        gap: var(--space--s);
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        font-size: var(--size--xs);
    }

    .trds-button:hover,
    .trds-button:focus{
        filter: brightness(125%);
    }

    .trds-button:active{
        transform: scale(0.95);
    }

    trds-button.disabled{
        filter: brightness(0.75);
        pointer-events: none;
    }

    trds-button.plain .trds-button{
        padding: 0;
        border-radius: 0;
        background-color: transparent;
        font-size: var(--size--s);
        color: var(--color--secondary-text);
    }

    trds-button.plain .trds-button:focus-visible{
        border-bottom: 2px solid var(--color--primary);
    }

    trds-button.rounded .trds-button{
        border-radius: 50px;
    }

    trds-button.block{
        width: 100%;
    }

    trds-button.icon-on-right trds-icon{
        order: 2;
    }

    trds-button.outline .trds-button{
        box-shadow: inset 0 0 0 2px currentColor;
        background-color: transparent;
    }

    trds-button.outline .trds-button:hover,
    trds-button.outline .trds-button:focus{
        box-shadow: none;
        background-color: var(--base-bg-color);
    }

    trds-button trds-icon{
        flex-shrink: 0;
    }

`);

customElements.define('trds-button', class extends HTMLElement{

    connectedCallback(){
        
        const element = this.hasAttribute('href') ? 'a' : 'button';

        this.innerHTML = `
        
            <${element}

                ${[...this.attributes].map(attr =>{

                    if([
                        "download",
                        "href",
                        "rel",
                        "target",
                        "referrerpolicy",
                        "autofocus",
                        "type",
                        "name"
                    ].includes(attr.nodeName)){
                        return `${attr.nodeName}="${attr.nodeValue}"`
                    }
                    
                }).join(" ")}

                class="trds-button"

            >

                ${this.hasAttribute('icon') ?
                    `<trds-icon icon="${this.getAttribute('icon')}"></trds-icon>`
                    :
                    ''
                }

                ${this.hasAttribute('text') ?
                    `<span>${this.getAttribute('text')}</span>`
                    :
                    ''
                }

                <trds-loader></trds-loader>

            </${element}>
        
        `;

        this.Loader = this.querySelector('trds-loader');

    }

    static get observedAttributes(){ 
        return ['loading']; 
    }

    attributeChangedCallback(){

        if(this.hasAttribute('loading')){

            this.Loader.setAttribute('active', '');
            this.classList.add('disabled');

        } else {

            this.Loader.removeAttribute('active');
            this.classList.remove('disabled');

        }

    }

});