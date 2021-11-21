// add trds-loader to element which will have a loader property with enable and disable functions
// can be used on nearly anything(except in elements with other than position:relative)

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
                    animation: TrdsSpin 2s linear infinite;
                    font-size: 2em;
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

        this.parentElement.style.position = 'relative';
        this.parentElement.loader = this;

    }

    enable = () => {
        this.setAttribute('active', true);
    }
    
    disable = () => {
        this.setAttribute('active', false);
    } 

});