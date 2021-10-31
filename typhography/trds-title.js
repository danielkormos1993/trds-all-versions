import '../base/layout.js';
import '../base/sizes.js';
import '../base/theme.js';

customElements.define('trds-title', class trdsTitle extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    width: max-content;
                    max-width: var(--trds-element--max-width);
                    box-sizing: border-box;
                    
                }
                ::slotted(*){
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
            <slot></slot>
        `

    }

    connectedCallback(){

        const level = this.getAttribute('level');
        if(!level){
            console.error(`trds-title must have a level attribute: ${this}`);
            return console.log(this);
        } 

        const content = this.getAttribute('content');
        if(!content){
            console.error('trds-title must have a content attribute.');
            return console.log(this);
        } 

        this.innerHTML = `<h${level}>${content}</h${level}>`;

    }


});