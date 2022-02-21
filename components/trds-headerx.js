import '../layout/container.js';
import '../elements/trds-image.js';
import '../elements/trds-link.js';
import './trds-carousel.js';
import TrdsElement from '../trds-element.js';

const TrdsHeaderTemplate = document.createElement('template');
TrdsHeaderTemplate.innerHTML = `
    <trds-container>
        <a is="trds-link" class="block logo-link" href="/">
            <trds-image alt="Logo"></trds-image>
        </a>
        <trds-carousel>
        </trds-carousel>
    </trds-container>
`;

class TrdsHeader extends TrdsElement{

    constructor(){
        super()

        this.template = TrdsHeaderTemplate.content.cloneNode(true);

    }

    connectedCallback(){

        if(!this.rendered) this.render();

        document.body.style.paddingTop = 'var(--header-height)';

    }

    disconnectedCallback(){

        document.body.style.paddingTop = 0;

    }

    render = () => {

        this.template.querySelector('.logo-link trds-image').setAttribute('src', this.getAttribute('logo-src'));

        this.template.querySelector('trds-carousel').append(...this.children);

        this.append(this.template);

        this.rendered = true;

    }

}

customElements.define('trds-header', TrdsHeader);

TrdsElement.addStyle(`

    :root{
        --header-height: 5rem;
    }

    trds-header{
        background-color: var(--color--secondary-bg);
        height: var(--header-height);
        display: flex;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;
        overflow: hidden;
    }

    trds-header trds-container{
        display: flex;
        justify-content: space-between;
        padding-right: 0;
    }

    trds-header .logo-link{
        margin-right: var(--space--l);
        flex-shrink: 1;
        flex-basis: 6.5rem;
        min-width: 3.5rem;
        display: flex !important;
        align-items: center;
        max-width: none !important;
        align-self: center;
    }

    trds-header .slot{
        display: flex;
        height: 100%;
        gap: var(--space--m);
        align-items: center;
        padding-right: var(--space--m);
        box-sizing: border-box;
    }

    @media all and (min-width:1360px){

        trds-header .slot{
            gap:var(--space--l);
        }

    }

`);