// usage: trds-work[format=video or image(required)]
// if image declare src attribute like src="before.jpg after.jpg"
// if video declare src and poster will be src.jpg

import '../elements/trds-video.js';
import './trds-showcase.js';

customElements.define('trds-work', class TrdsWork extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){

        if(!this.hasAttribute('format')) return console.error('format on trds-work needs to be defined');

        const format = this.getAttribute('format');

        if(format === 'video')

            this.innerHTML = `
                <trds-video src="${this.getAttribute('src')}" lazy-poster="${this.getAttribute('src')}.jpg" controls></trds-video>
            `;

        else if(format === 'image'){

            this.innerHTML = `
                <trds-showcase>
                    <trds-image slot="before" alt="Előtte kép" src="${this.getAttribute('src').split(' ')[0]}"></trds-image>
                    <trds-image slot="after" alt="Utána kép" src="${this.getAttribute('src').split(' ')[1]}"></trds-image>
                </trds-showcase>
            `;

        }

    }

});