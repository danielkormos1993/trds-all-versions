import TrdsIntersectionObserver from '../libs/IntersectionObserver.js';

customElements.define('trds-counter', class extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){

        this.startNumber = Number(this.textContent);
        this.endNumber = Number(this.getAttribute('to'));

        TrdsIntersectionObserver.observe(this);

    }

    disconnectedCallback(){

        this.textContent = this.startNumber;

    }

    load(){

        let startTimestamp = null;

        const step = timestamp => {

            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / 5000, 1); // 5000ms is the duration here

            this.textContent = Math.floor(progress * (this.endNumber - this.startNumber) + this.startNumber).toLocaleString('DE-de');

            if (progress < 1) window.requestAnimationFrame(step);

        };

        window.requestAnimationFrame(step);
        
    }

});