// usage: trds-timeline
// add trds-timeline__step element for a step which MUST HAVE A NUMBER attribute which displayed as count in timeline
// it automatically set timeline to row oriented if all elements can fit 

import '../base/colors.js';
import '../base/layout.js';
import '../elements/trbs-icon.js';

let TrbsTimelineStyle = document.createElement('style');
TrbsTimelineStyle.id = 'trbs-timeline-style';
TrbsTimelineStyle.textContent = `
    trbs-timeline{
        display: grid;
        border-left: 3px solid var(--trbs-color--red);
        gap: var(--trbs-space--xl);
        padding-left: 2rem;
        margin-left: 1rem;
    }
    .trbs-timeline--row{
        grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
        border-left: none;
        border-top: 3px solid var(--trbs-color--red);
        padding-left: 0;
        margin-left: 0;
        padding-top: 3rem;
    }
    trbs-timeline__step{
        display: block;
        position: relative;
    }
    trbs-timeline__step:last-child{
        padding-bottom: 2.85rem;
    }
    .trbs-timeline--row trbs-timeline__step:last-child{
        padding-bottom: 0;
    }
    trbs-timeline__step:before,
    trbs-timeline__finish-flag{
        content: attr(number);
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--trbs-color--red);
        border-radius: 50%;
        position: absolute;
        left: -3.05rem;
        top: -.28rem;
        font-size: var(--trbs-size--m);
        font-weight: bold;
    }
    trbs-timeline__step[digit-number="3"]:before{
        font-size: var(--trbs-size--s);
    }
    trbs-timeline__step[digit-number="4"]:before{
        font-size: var(--trbs-size--xs);
    }
    trbs-timeline__finish-flag{
        top: auto;
        bottom: 0;
        animation: TrbsIconRotater 1s infinite;
    }
    .trbs-timeline--row trbs-timeline__step:before,
    .trbs-timeline--row trbs-timeline__finish-flag{
        top: -4.1rem;
        left: auto;
    }
    
    .trbs-timeline--row trbs-timeline__finish-flag{
        right: 0;
        bottom: auto;
    }
    @keyframes TrbsIconRotater{
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
`;
document.head.appendChild(TrbsTimelineStyle);

customElements.define('trbs-timeline', class TrbsTimeline extends HTMLElement{
    
    constructor(){ 
        super();

        this.$finishFlagWrapper = document.createElement('trbs-timeline__finish-flag');
        this.$finishFlagWrapper.innerHTML = `
            <trbs-icon icon="solid/flag-checkered"></trbs-icon>
        `;

    }

    connectedCallback(){

        let resizeTimer;
        let timelineSteps = this.querySelectorAll('trbs-timeline__step');

        timelineSteps.forEach(elem => {
            if(!elem.hasAttribute('number')) return console.error("Number attribute must be added to trbs-timeline__step component.");
            if(elem.getAttribute('number').length > 4) return console.error("Number attribute should not exceed 4 digits.");
            elem.setAttribute( 'digit-number', elem.getAttribute('number').length);
        });

        this.querySelector('trbs-timeline__step:last-child').appendChild(this.$finishFlagWrapper);

        const setTimeline = () => {
            (this.parentElement.getBoundingClientRect().width / 280) >= timelineSteps.length ? this.classList.add('trbs-timeline--row') : this.classList.remove('trbs-timeline--row');
        };

        setTimeline();

        window.addEventListener('resize', () => {

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => setTimeline(), 250);

        });

    }

});