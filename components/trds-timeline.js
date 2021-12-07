// usage: trds-timeline
// add trds-timeline__step element for a step which MUST HAVE A NUMBER attribute which displayed as count in timeline
// it automatically set timeline to row oriented if all elements can fit 

import '../base/theme.js';
import '../base/layout.js';
import '../elements/trds-icon.js';

customElements.define('trds-timeline', class TrdsTimeline extends HTMLElement{
    
    constructor(){ 
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: grid;
                    border-left: 3px solid var(--trds-theme--primary);
                    gap: var(--trds-space--xl);
                    padding-left: 2rem;
                    margin-left: 1rem;
                    box-sizing: border-box;
                    position: relative;
                }
                :host(.row-oriented){
                    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
                    border-left: none;
                    border-top: 3px solid var(--trds-theme--primary);
                    padding-left: 0;
                    margin-left: 0;
                    padding-top: 3rem;
                }
                ::slotted(trds-timeline__step){
                    display: block;
                    position: relative;
                }
                ::slotted(trds-timeline__step:last-child){
                    padding-bottom: 2.85rem;
                }
                :host(.row-oriented) ::slotted(trds-timeline__step:last-child){
                    padding-bottom: 0;
                }
                ::slotted(trds-timeline__step):before,
                trds-timeline__finish-flag{
                    content: attr(number);
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--trds-theme--primary);
                    border-radius: 50%;
                    position: absolute;
                    left: -3.05rem;
                    top: -.28rem;
                    font-size: var(--trds-size--m);
                    font-weight: bold;
                }
                ::slotted(trds-timeline__step[digit-number="3"]):before{
                    font-size: var(--trds-size--s);
                }
                ::slotted(trds-timeline__step[digit-number="4"]):before{
                    font-size: var(--trds-size--xs);
                }

                trds-timeline__finish-flag{
                    top: auto;
                    left: -1.05rem;
                    bottom: 0;
                    animation: TrdsIconRotater 1s infinite;
                }
                :host(.row-oriented) ::slotted(trds-timeline__step):before{
                    top: -4.1rem;
                    left: auto;
                }
                :host(.row-oriented) trds-timeline__finish-flag{
                    top: -1.1rem;
                    left: auto;
                }
                :host(.row-oriented) trds-timeline__finish-flag{
                    right: 0;
                    bottom: auto;
                }
                @keyframes TrdsIconRotater{
                    0%{
                        transform:rotate(30deg);
                    }
                    50%{
                        transform:rotate(-30deg);
                    }
                    100%{
                        transform:rotate(30deg);
                    }
                }
            </style>
            <slot></slot>
            <trds-timeline__finish-flag>
                <trds-icon icon="solid/flag-checkered"></trds-icon>
            </trds-timeline__finish-flag>
        `;

    }

    connectedCallback(){

        let resizeTimer;
        let timelineSteps = this.querySelectorAll('trds-timeline__step');

        timelineSteps.forEach(elem => {
            if(!elem.hasAttribute('number')) return console.error("Number attribute must be added to trds-timeline__step component.");
            if(elem.getAttribute('number').length > 4) return console.error("Number attribute should not exceed 4 digits.");
            elem.setAttribute( 'digit-number', elem.getAttribute('number').length);
        });

        const setTimeline = () => {
            (this.parentElement.getBoundingClientRect().width / 280) >= timelineSteps.length ? this.classList.add('row-oriented') : this.classList.remove('row-oriented');
        };

        setTimeline();

        window.addEventListener('resize', () => {

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => setTimeline(), 250);

        });

    }

});