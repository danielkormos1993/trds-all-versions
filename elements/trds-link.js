customElements.define('trds-link', class trdsLink extends HTMLElement{

    constructor(){
        super();

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    max-width: var(--trds-element--max-width);
                }
                :host > span{
                    -webkit-text-size-adjust: 100%;
                    color: inherit;
                    font-size: inherit;
                    line-height: inherit;
                }
            </style>
            <a href="${this.getAttribute('href')}">
                <slot></slot>
            </a>    
        `
    }

});