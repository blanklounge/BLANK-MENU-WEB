var typeName = document.querySelector('.menu-title').innerHTML;


var languagePreference = getLanguagePreference();
var namelanguage = 'viname';
var deslanguage = 'viname';

if (languagePreference == 'en') {
  namelanguage = 'enname'
  deslanguage = 'endescription';
} else {
  namelanguage = 'viname'
  deslanguage = 'videscription';
};



async function getData() {
  const response = await fetch('../data.json');
  const data = await response.json();
  
  var catItems = data[typeName];

    var typeList = document.getElementById('type1List');

    data[typeName].forEach(item => {
      const divName = document.createElement('div');
      divName.classList.add('type-item', 'name');
      divName.textContent = item[namelanguage];

      const divPrice= document.createElement('div');
      divPrice.classList.add('type-item', 'price');
      divPrice.textContent = item.price;
      typeList.appendChild(divName);
      typeList.appendChild(divPrice);
    })

//Create lightboxes for objects that has images
const itemsWithImage = catItems.filter(object => object.img);

const lightboxes = document.querySelectorAll('.lightbox');

for (var i=0; i < itemsWithImage.length; i++)  {
  const lightbox = lightboxes[i];
  const textContents = document.querySelectorAll('.textContent');
  const textContent = textContents[i];

  textContent.innerHTML = `
    <h3 class="lightbox-name">${itemsWithImage[i][namelanguage]}</h3>
    <h3 class="lightbox-price">${itemsWithImage[i].price}</h3>
    <p class="lightbox-description">${itemsWithImage[i][deslanguage]}</p>
  `;

  lightbox.style.backgroundImage = `url("../${itemsWithImage[i].img}")`;
  lightbox.style.display = "block";
}


  const enLang = document.getElementById('enLang');
  enLang.addEventListener('click', () => {
    localStorage.setItem('languagePreference', 'en'); // Store language preference in localStorage
    namelanguage = 'enname';
    deslanguage = 'endescription';
    languageSwitch(data);
  })


  const viLang = document.getElementById('viLang');
  viLang.addEventListener('click', () => {
    localStorage.setItem('languagePreference', 'vi'); // Store language preference in localStorage
    namelanguage = 'viname';
    deslanguage = 'videscription';
    languageSwitch(data);
  })



};
getData();


function getLanguagePreference() {
  return localStorage.getItem('languagePreference') || 'vi'; // Default to English if no preference is stored
}



function languageSwitch(data) {

  var catItems = data[typeName];
  const itemsWithImage = catItems.filter(object => object.img);

  const names = document.querySelectorAll('.name');
  const lightboxNames = document.querySelectorAll('.lightbox-name');
  const lightboxDes = document.querySelectorAll('.lightbox-description');


  for(var i=0; i < catItems.length; i++) {
    names[i].textContent = catItems[i][namelanguage];
}
  for(var i=0; i < itemsWithImage.length; i++) {
    lightboxNames[i].textContent = itemsWithImage[i][namelanguage];
    lightboxDes[i].textContent = itemsWithImage[i][deslanguage];

  }

}

