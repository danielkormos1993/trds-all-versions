﻿import TrdsIntersectionObserver from "../libs/IntersectionObserver.js";

customElements.define('trds-icon', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

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

            </style>

        `;

    }

    connectedCallback(){

        if(this.classList.contains('lazy'))
            TrdsIntersectionObserver.observe(this);

    }

    isIntersecting = () => this.classList.remove('lazy');

});