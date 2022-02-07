// // markup: <trds-workmedia category={} before-media-type={image|video} after-media-type={image|video} before-media-src={} after-media-src={} tags={array} created-at={2022-01-17}></trds-workmedia>

// let TrdsWorkmediaStyle = document.createElement('style');
// TrdsWorkmediaStyle.textContent = `
//     trds-workmedia{
//         display: block;
//         background-color: var(--color--secondary-bg);
//         max-width: var(--element--max-width);
//     }
//     trds-workmedia_media{
//         display: block;
//         overflow: hidden;
//         position: relative;
//         background-color: black;
//         padding-bottom: 56.25%;
//     }
//     trds-workmedia_media_before,
//     trds-workmedia_media_after{
//         display: block;
//         transition: opacity .5s;
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 2;
//     }
//     trds-workmedia_media_after{
//         z-index: 1;
//         opacity: 0;
//     }
//     trds-workmedia_media video{
//         height: 100% !important;
//     }
//     trds-workmedia[after-media-active] trds-workmedia_media_after{
//         opacity: 1;
//         z-index: 3;
//     }
//     trds-workmedia[after-media-active] trds-workmedia_media_before{
//         opacity: 0;
//     }
//     trds-workmedia_body{
//         display: block;
//         box-sizing: border-box;
//         padding: var(--space--l);
//     }
//     trds-workmedia_toggler{
//         display: flex;
//         gap: var(--space--s);
//         margin-bottom: var(--space--l);
//     }
//     trds-workmedia_details{
//         display: flex;
//         flex-direction: column;
//         gap: var(--space--m);
//     }

// }
// `;
// document.head.appendChild(TrdsWorkmediaStyle);

// class TrdsWorkmedia extends HTMLElement{

//     constructor(){
//         super();
//     }

//     connectedCallback(){

//         const beforeMediaType = this.getAttribute('before-media-type');
//         const beforeMediaSrc = this.getAttribute('before-media-src');
//         const afterMediaType = this.getAttribute('after-media-type');
//         const afterMediaSrc = this.getAttribute('after-media-src');
//         const category = this.getAttribute('category');
//         const tags = this.hasAttribute('tags') && this.getAttribute('tags').split(',');
//         const createdAt = this.getAttribute('created-at');

//         this.innerHTML = `
//             <trds-workmedia_media>
//                 <trds-workmedia_media_before>
//                     ${ beforeMediaType === 'image' ?
//                     `<trds-image src="${beforeMediaSrc}" alt="javítás előtt" lazy></trds-image>`
//                     :
//                     `<video is="trds-video" src="${beforeMediaSrc}" controls muted></video>` }
//                 </trds-workmedia_media_before>
//                 <trds-workmedia_media_after>
//                     ${ afterMediaType === 'image' ?
//                     `<trds-image src="${afterMediaSrc}" alt="javítás után" lazy></trds-image>`
//                     :
//                     `<video is="trds-video" src="${afterMediaSrc}" controls muted></video>` }
//                 </trds-workmedia_media_after>
//             </trds-workmedia_media>
//             <trds-workmedia_body>
//                 <trds-workmedia_toggler>
//                     <button is="trds-button" text="Előtte"></button>
//                     <button is="trds-button" class="outline" text="Utána"></button>
//                 </trds-workmedia_toggler>
//                 <trds-workmedia_details>
//                     <div>
//                         <h2 class="variant--1">Kategória</h2>
//                         <span class="size--xl" style="font-weight: bold">${category}</span>
//                     </div>
//                     ${tags && tags.length > 0 ? `
//                         <div>
//                         <h2 class="variant--1" style="margin-bottom: var(--space--xs)">Tagek</h2>
//                         <trds-grid class="auto-width-layout" style="gap: var(--space--xs)">
//                         ${tags.map(tag => {
//                             console.log(tag);
//                             return `<trds-tag>${tag}</trds-tag>`;
//                         }).join("")}
//                         </trds-grid>
//                         </div>
//                         ` : ``}
//                     <div>
//                         <h2 class="variant--1">Hozzáadva</h2>
//                         <span style="font-style: italic">${createdAt}</span>
//                     </div>
//                 </trds-workmedia_details>
//             </trds-workmedia_body>
//         `;

//         const toggleBeforeButton = this.querySelector('button[text="Előtte"]');
//         const toggleAfterButton = this.querySelector('button[text="Utána"]');

//         toggleAfterButton.addEventListener('click', () => {
//             if(beforeMediaType != 'image'){
//                 this.querySelector('trds-workmedia_media_before video').pause();
//                 this.querySelector('trds-workmedia_media_before video').currentTime = 0;
//             }
//             toggleAfterButton.classList.remove('outline');
//             toggleBeforeButton.classList.add('outline');
//             this.setAttribute('after-media-active', '');
//             if(afterMediaType != 'image'){
//                 this.querySelector('trds-workmedia_media_after video').play();
//             }
//         });

//         toggleBeforeButton.addEventListener('click', () => {
//             if(afterMediaType != 'image'){
//                 this.querySelector('trds-workmedia_media_after video').pause();
//                 this.querySelector('trds-workmedia_media_after video').currentTime = 0;
//             }
//             toggleAfterButton.classList.add('outline');
//             toggleBeforeButton.classList.remove('outline');
//             this.removeAttribute('after-media-active');
//             if(beforeMediaType != 'image'){
//                 this.querySelector('trds-workmedia_media_before video').play();
//             }
//         });

//     }

//     disconnectedCallback(){

//         this.innerHTML = '';

//     }

// }

// window.customElements.define('trds-workmedia', TrdsWorkmedia);
// export default TrdsWorkmedia;