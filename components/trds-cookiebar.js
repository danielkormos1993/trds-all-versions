// usage: trds-cookiebar[cookieName(required), cookieValue(required)]
// use at body > level
// add class .trds-cookiebar__setCookieButton to the cookie setter button
// put elements inside as youd like

import '../base/theme.js';
import '../base/layout.js';
import { setCookie, getCookie } from '../libs/cookies.js';

customElements.define('trds-cookiebar', class TrdsCookiebar extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    box-sizing: border-box;
                    padding: var(--trds-space--xl) var(--trds-container--padding-x);
                    position: fixed;
                    width: 100%;
                    bottom: -100%;
                    left: 0;
                    background-color: var(--trds-theme--primary);
                    z-index: 100;
                }
                :host([show]){
                    animation: TrdsCookieBarAnimation 1s forwards ease-in-out;
                    animation-delay: 3s;
                }
                @keyframes TrdsCookieBarAnimation{
                    100%{bottom:0}
                }
            </style>
            <slot></slot>
        `;
    }

    connectedCallback(){

        if(!this.hasAttribute('cookieName') || !this.hasAttribute('cookieValue'))
            return console.error('trds-cookiebar need both attribute: cookieName cookieValue');

        if(getCookie(this.getAttribute('cookieName')) != this.getAttribute('cookieValue'))
            this.setAttribute('show', '');
        else return this.remove();

        this.querySelector('.trds-cookiebar__setCookieButton').addEventListener('click', () => {
            setCookie(this.getAttribute('cookieName'), this.getAttribute('cookieValue'));
            this.remove();
        });
   
    }

});