customElements.define('trds-link', class trdsLink extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                }
                ::slotted(a){
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    transition: filter 0.25s ease-in-out;
                }
                ::slotted(a:hover),
                ::slotted(a:active),
                ::slotted(a:focus){
                    filter: brightness(125%);
                }
            </style>
            <slot></slot>
        `;

    }

});