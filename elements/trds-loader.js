/* usage: add trbs-loader--active class to the element which now will render the loading screen */
/* remove the class for disable it */
/* can be used on or used by body, trb-image, trb-button */
/* todo -> make it usable on main element too */

import './trds-icon.js';
import { findClosestBgColor } from '../libs/findClosestBgColor.js';

customElements.define('trds-loader', class trdsLoader extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    max-height: 100vh;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                }
                :host([active]){
                    visibility: visible;
                }
                :host trds-icon{
                    animation: TrdsSpin 2s linear infinite;
                    font-size: 3em;
                }
                @keyframes TrdsSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <trds-icon icon="solid/spinner"></trds-icon>
        `;

    }

    connectedCallback(){

        this.style.backgroundColor = findClosestBgColor(this);

    }

    enable = () => {
        this.setAttribute('active', '');
    }
    
    disable = () => {
        this.removeAttribute('active');
    } 

});