// TODO: icon[onclick] focus

import TrdsIntersectionObserver from "../IntersectionObserver.js";

export default class Icon extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `

            <style>

                :host{
                    display: block;
                    width: 1em;
                    height: 1em;
                    background: currentColor;
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-position: center center;
                    mask-position: center center;
                    -webkit-mask-image: var(--icon-src);
                    mask-image: var(--icon-src);
                }

                :host(.lazy){
                    -webkit-mask-image: unset;
                    mask-image: unset;
                }
            
                :host([onclick]){
                    cursor:pointer;
                }

                :host(:focus){
                    outline: 5px auto -webkit-focus-ring-color;
                }

            </style>

        `;

    }

    connectedCallback(){

        if(this.hasAttribute('onclick') && !this.hasAttribute('tabindex')) 
            this.setAttribute('tabindex', 0);

        if(this.classList.contains('lazy'))
            TrdsIntersectionObserver.observe(this);

    }

    load = () => this.classList.remove('lazy');

}

customElements.define('trds-icon', Icon);