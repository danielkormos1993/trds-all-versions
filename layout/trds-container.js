customElements.define('trds-container', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

            <style>

                :host{
                    display: block;
                    width: 100%;
                    max-width: 1700px;
                    padding: 20px 5%;
                    box-sizing: border-box;
                    margin-left: auto;
                    margin-right: auto;
                }

            </style>

            <slot></slot>
        
        `;

    }

});