async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log("got Data!");


  for(let i=0; i<Object.keys(data).length ; i++) {
    var typeList = document.getElementById('type'+ (i+1) + 'List');
 
    var typeName = Object.keys(data)[i];
    var typeHead  = document.querySelector('.type' + (i+1) + 'Head');
    typeHead.textContent = typeName;
    
    data[typeName].forEach(item => {
      const divName = document.createElement('div');
      divName.classList.add('type-item', 'name');
      divName.textContent = item.viname;

      const divPrice= document.createElement('div');
      divPrice.classList.add('type-item', 'price');
      divPrice.textContent = item.price;
      typeList.appendChild(divName);
      typeList.appendChild(divPrice);
  })
}

const gridItems = document.querySelectorAll('.type-item');
var allItems = []
for(let i=0; i<Object.keys(data).length ; i++) {
  const typeName = Object.keys(data)[i];
   allItems = allItems.concat(data[typeName]);
}
console.log(allItems);

// Function to populate the lightbox content based on the clicked item data
const lightbox = document.querySelector('.lightbox')

function populateLightboxContent(itemData) {
  const textContent = document.querySelector('.text-content');
  const lbContent = document.querySelector('.lightbox-content');

  textContent.innerHTML = `
    <h3 class="lightbox-name">${itemData.viname}</h3>
    <h3 class="lightbox-price">${itemData.price}</h3>
    <p class="lightbox-description">${itemData.videscription}</p>
  `;

  lbContent.style.backgroundImage = `url("${itemData.img}")`;

}

gridItems.forEach(gridItem => {
  gridItem.addEventListener('click', function() {
    const itemName = gridItem.textContent; // Get the ID of the clicked item

        const clickedItemData = allItems.find(item => item.name == itemName);
        populateLightboxContent(clickedItemData);
        lightbox.style.display = 'block';
      })
  });

lightbox.addEventListener('click', function(event) {
    if (event.target.classList.contains('lightbox-overlay') || event.target.classList.contains('close-btn')) {
      lightbox.style.display = 'none';
    }
  });

};

getData();


//LANGUAGE PREFERENCES


const enLang = document.getElementById('enLang');
enLang.addEventListener('click', () => {
  localStorage.setItem('languagePreference', 'en'); // Store language preference in localStorage
  console.log(getLanguagePreference());
})


function getLanguagePreference() {
  return localStorage.getItem('languagePreference') || 'vi'; // Default to English if no preference is stored
}


console.log(getLanguagePreference());