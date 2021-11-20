// USAGE: <trds-title level="required(1-4)">
// add .variant--1 class to the host for prestyled titles
// the element can inherit font size and line-height and color
// its not compatible with javascript creation as we cant pass the level attribute to the constructor(we wont need it anyway).

import '../base/layout.js';
import '../base/sizes.js';
import '../base/theme.js';

customElements.define('trds-title', class trdsTitle extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.level = this.getAttribute('level');
        if(!this.level) return console.error('trds-title must have a level attribute');

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    width: max-content;
                    max-width: var(--trds-element--max-width);
                    box-sizing: border-box;
                    
                }
                *{
                    -webkit-text-size-adjust: 100%;
                    margin: 0;
                    font-weight: bold;
                    color: inherit;
                    font-size: inherit;
                    line-height: inherit;
                }
                :host([level="1"]){
                    font-size: var(--trds-size--xxl);
                    line-height: 1.25;
                }
                :host([level="2"]){
                    font-size: var(--trds-size--xl);
                    line-height: 1.3;
                }
                :host([level="3"]){
                    font-size: var(--trds-size--l);
                    line-height: 1.42;
                }
                :host([level="4"]){
                    font-size: var(--trds-size--m);
                    line-height: 1.5;
                    text-decoration: underline;
                }

                :host(.variant--1){
                    font-size: var(--trds-size--m);
                    line-height: 1.5;
                    text-transform: uppercase;
                    letter-spacing: .2rem;
                    color: var(--trds-theme--secondary-text);
                }
            </style>
            <h${this.level}>
                <slot></slot>
            </h${this.level}>    
        `

    }

});