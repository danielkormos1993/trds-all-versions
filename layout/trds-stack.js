// USAGE: trds-stack
// its a basic element which will put space beetween elements inside
// modify the spacing with the gap style property(eg. <trds-stack style="gap: var(--trds-space--s,m,l etc.")
// TODO: consider the align content property later

import '../base/layout.js';

customElements.define('trds-stack', class trdsStack extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: grid;
                    gap: var(--trds-space--m);
                    /* align-content: start; */
                }
            </style>
            <slot></slot>
        `

    }

});