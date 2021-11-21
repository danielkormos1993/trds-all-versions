/* usage: trds-icon */
/* fontawesome icon to be used -- look from the website or from directory*/
/* set icon with icon attribute in the format: icon="solid/cog" */
/* set icon size with font size and color with color */
// its lazy loading by default

import { getHostUrl } from '../libs/getHostUrl.js';

const TrdsIconIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadIcon();
            TrdsIconIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

customElements.define('trds-icon', class trdsIcon extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});

       this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: inline;
                    width: 1em;
                    height: 1em;
                    background: currentColor;
                    -webkit-mask-size: contain;
                    mask-size: contain;
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    -webkit-mask-position: center center;
                    mask-position: center center;
                }
                :host([onclick]){
                    cursor: pointer;
                }
            </style>
        `;

        this.iconStyle = document.createElement('style');
        this.shadowRoot.appendChild(this.iconStyle);

    }

    connectedCallback(){

        if(!this.hasAttribute('icon') || this.getAttribute('icon') === '') return console.error('Icon name must be declared.');

        TrdsIconIntersectionHandler.observe(this);

    }

    loadIcon = () => {

        const iconName = this.getAttribute('icon');

        this.iconStyle.textContent = `
            :host{
                -webkit-mask-image: url("${getHostUrl(import.meta.url)}/assets/icons/${iconName}.svg");
                mask-image: url("${getHostUrl(import.meta.url)}/assets/icons/${iconName}.svg");
            }
        `;

    }

});