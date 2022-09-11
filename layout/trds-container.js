export default class Container extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `

            <style>

                :host{
                    display: block;
                    width: 100%;
                    max-width: 1700px;
                    padding: 0 5%;
                    box-sizing: border-box;
                    margin-left: auto;
                    margin-right: auto;
                }

            </style>

            <slot></slot>
        
        `;

    }

}

customElements.define('trds-container', Container);