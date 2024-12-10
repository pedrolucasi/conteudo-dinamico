import flags from './model/flags.js';

const main = document.querySelector('main.row')

for (const country of flags) {
    const view = `<div class="flag col-2  my-2 text-center">
        <img src="${country.image}" alt="${country.name}">
       
    <p>${country.name}</p>
    </div>`;

    main.insertAdjacentHTML('beforeend', view);
    
}


