// colors map with rgb declarations
const colors = {
    white: '237, 242, 244',
    lightgrey: '204, 204, 204',
    grey: '133, 133, 133',
    darkgrey: '28, 28, 28',
    darkergrey: '18, 18, 18',
    lightred: '218, 73, 68',
    red: '204, 46, 40',
    darkred: '170, 38, 34',
    green: '69, 133, 53',
    yellow: '231, 113, 27'
};
// overlay alpha declaration
const overlayAlpha = .72;

let styleTag = document.createElement('style');
styleTag.id = 'trds-colors';
styleTag.textContent = `

    :root{

        --trds-colors-overlay-alpha: ${overlayAlpha};

        ${Object.keys(colors).map(color => {

            return `
                --trds-colors--${color}: rgb(${colors[color]});
                --trds-colors--${color}-overlay: rgba(${colors[color]}, var(--trds-colors-overlay-alpha));
            `;

        }).join('')}

    }

`;