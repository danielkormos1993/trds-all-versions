// usage: trds-select [possile select attributes]

import { copyAttributes } from '../libs/copyAttributes.js';
import '../base/layout.js';
import '../base/theme.js';

customElements.define('trds-select', class trdsSelect extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({
            mode: 'open',
            delegatesFocus: true
        })

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: var(--trds-element--max-width);
                }
                select{
                    display: block;
                    background-color: var(--trds-theme--secondary-bg);
                    color: inherit;
                    font-weight: bold;
                    width: 100%;
                    padding: var(--trds-space--s);
                    border: none;
                    border-bottom: 2px solid var(--trds-theme--primary);
                    font-family: inherit;
                    margin: 0;
                }
            </style>
            <select>
                <slot></slot>
            </select>
        `;

        this.selectTag = this.shadowRoot.querySelector('select');

    }

    connectedCallback(){

        copyAttributes(this, [
            'autocomplete',
            'autofocus',
            'disabled',
            'form',
            'multiple',
            'name',
            'required',
            'size'
        ], this.selectTag);

    }

});