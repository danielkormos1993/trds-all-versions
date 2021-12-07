// todo: fix styling

import '../base/layout.js';
import '../base/theme.js';
import '../base/sizes.js';
import '../elements/trds-hamburger.js';
import '../elements/trds-image.js';
import '../elements/trds-link-block.js';

import { getHostUrl } from '../libs/getHostUrl.js';

customElements.define('trds-header', class TrdsHeader extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :root{
                    --trds-header-height: 5rem;
                }
                :host{
                    background-color: var(--trds-theme--secondary-bg);
                    height: var(--trds-header-height);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    z-index: 100;
                    color: var(--trds-theme--secondary-text);
                    padding: 0 var(--trds-container--padding-x);
                }
                :host([mobile]){
                    overflow: hidden;
                    flex-direction: column;
                }
                :host([opened]){
                    overflow: visible;
                    height: auto;
                }
                trds-header__top-bar{
                    height: var(--trds-header-height);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-shrink: 0;
                }
                #trds-header__logo-anchor{
                    padding-right: var(--trds-space--xl);
                }
                #trds-header__logo{
                    width: 7rem;
                }
                trds-hamburger{
                    display: none;
                }
                nav{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: var(--trds-space--l) 0;
                    gap: var(--trds-space--l);
                }
                ::slotted(*){
                    flex-shrink: 0;
                    font-size: var(--trds-size--xs);
                    text-transform: uppercase;
                    font-weight: bold;
                }
                :host([mobile]) trds-hamburger{
                    display: flex;
                }
                :host([mobile]) nav{
                    flex-direction: column;
                    align-items: flex-start;
                }
                :host([mobile]) nav{
                    gap: var(--trds-space--s);
                }
            </style>
            <trds-header__top-bar>
                <trds-link-block href="/" id="trds-header__logo-anchor">
                    <trds-image id="trds-header__logo" alt="logo" src="${getHostUrl(import.meta.url)}/assets/images/logo.png"></trds-image>
                </trds-link-block>
                <trds-hamburger onclick="this.getRootNode().host.toggleMenu()"></trds-hamburger>
            </trds-header__top-bar>
            <nav>
                <slot></slot>
            </nav>
        `;

        this.nav = this.shadowRoot.querySelector('nav');
        this.logoWrapper = this.shadowRoot.getElementById('trds-header__logo-anchor');
        this.hamburger = this.shadowRoot.querySelector('trds-hamburger');

    }

    connectedCallback(){

        window.addEventListener("click", e => {
            this.contains(e.target) || this.removeAttribute('opened');
        });

        [...this.querySelectorAll(':scope > *')].forEach( e => {
            e.addEventListener("focus", () => { this.setAttribute('opened', '') });
        });

        let lastHeaderNavWidth = false;
        let resizeTimer;

        const setHeaderNav = () => {

            let headerNavWidth = 0;
            [...this.querySelectorAll(':scope > *')].forEach(elem => headerNavWidth+= elem.clientWidth);

            if(this.clientWidth - this.logoWrapper.clientWidth < (lastHeaderNavWidth || headerNavWidth)){
                if(!lastHeaderNavWidth) lastHeaderNavWidth = headerNavWidth;
                this.setAttribute('mobile', '');
            } else {
                lastHeaderNavWidth = false;
                this.removeAttribute('mobile');
            }  
        };

        setHeaderNav();
     
        window.addEventListener('resize', () => {

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => setHeaderNav(), 250);

        });

    }

    static get observedAttributes() {
        return ['opened', 'mobile'];
    }

    attributeChangedCallback() {

        if(this.hasAttribute('mobile')){
            this.hasAttribute('opened') ? this.hamburger.setActive() : this.hamburger.removeActive();
        }
        else this.removeAttribute('opened');

    }

    toggleMenu = () => {
        this.hasAttribute('opened') ? this.removeAttribute('opened') : this.setAttribute('opened', '');
    }

});