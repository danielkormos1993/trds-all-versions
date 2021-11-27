// add trds-loader to element which will have a loader property with enable and disable functions
// can be used on nearly anything(except in elements with other position property)

import '../base/theme.js';
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
                :host([active=true]){
                    visibility: visible;
                }
                :host([active=false]){
                    animation: trdsLoaderFadeOut 1s forwards;
                }
                @keyframes trdsLoaderFadeOut{
                    0% { 
                        visibility: visible; 
                        opacity: 1;
                    }
                    100% {
                        visibility: hidden;
                        opacity: 0;
                    }
                }
                :host trds-icon{
                    animation: TrdsSpin 1.5s linear infinite;
                    font-size: 1.5em;
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

        this.parentElement.style.position = 'relative';
        this.parentElement.loader = this;

    }

    enable = () => {

        this.style.backgroundColor = findClosestBgColor(this);

        this.setAttribute('active', true);
        this.dispatchEvent( new Event('enabled'));

    }
    
    disable = () => {
        this.setAttribute('active', false);
        this.dispatchEvent( new Event('disabled'));
    } 

});