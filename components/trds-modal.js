// usage: trds-modal[showonfirsthit(optional - acts like a popup), title(recomennded)]
// every elements inside will go to the modal body

import '../base/layout.js';
import '../base/theme.js';
// import '../utilities/trbs-size.js'; set the title with utility for correct line hiehgt
import '../elements/trds-icon.js';
import '../typhography/trds-title.js';

customElements.define('trds-modal', class TrdsModal extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    width: 100vw;
                    height: 100vh;
                    padding: var(--trds-space--m) 0;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    opacity: 0;
                    visibility: hidden;
                    transform: scale(1.1);
                    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
                    align-items: center;
                    justify-content: center;
                }
                :host([show]){
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1.0);
                    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
                }
                trds-modal__overlay{
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: var(--trds-theme--secondary-bg);
                    mix-blend-mode: overlay;
                    z-index: 100;
                }
                trds-modal__container{
                    display: block;
                    width: 90%;
                    max-width: var(--trds-element-max-width);
                    max-height: 100%;
                    overflow: auto;
                    position: relative;
                    z-index: 101;
                }
                trds-modal__header{
                    display: flex;
                    align-items: center;
                    padding: var(--trds-space--m);
                    background-color: var(--trds-theme--primary);
                    justify-content: space-between;
                }
                trds-modal__body{
                    display: block;
                    padding: var(--trds-space--l);
                    background-color: var(--trds-theme--secondary-bg);
                    overflow: auto;
                    max-height: 90vh;
                }
                trds-modal__header trds-title{
                    text-transform: uppercase;
                    margin-right: var(--trds-space--m);
                    letter-spacing: 2px;
                }
                trds-modal__header trds-icon{
                    cursor: pointer;
                    flex-shrink: 0;
                }
            </style>
            <trds-modal__overlay></trds-modal__overlay>
            <trds-modal__container>
                <trds-modal__header>
                    <trds-title level="3" style="font-size: --trds-size--s"></trds-title>
                    <trds-icon icon="solid/times" onclick="this.getRootNode().host.close()"></trds-icon>
                </trds-modal__header>
                <trds-modal__body>
                    <slot></slot>
                </trds-modal__body>
            </trds-modal__container>
        `;

    }

    connectedCallback(){

        this.setTitle(this.getAttribute('title') || 'Modal');

        if(this.hasAttribute('showonfirsthit') && sessionStorage.getItem('popup') != 'true'){
            this.show();
            sessionStorage.setItem('popup', 'true');
        }
        
    }

    setTitle = title => {
        this.shadowRoot.querySelector('trds-modal__header trds-title').textContent = title;
    }

    set body(val){
        this.shadowRoot.querySelector('trds-modal__body').innerHTML = val;
    }

    show = () => {

        let currentModal = document.querySelector('trds-modal[show]');
        if(currentModal) currentModal.close();
        
        this.setAttribute('show', '');
    }

    close = () => {
        this.removeAttribute('show');
    } 

});