async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log(data);


  for(let i=0; i<Object.keys(data).length ; i++) {
    var typeList = document.getElementById('type'+ (i+1) + 'List');
 
    var typeName = Object.keys(data)[i];
    var typeHead  = document.querySelector('.type' + (i+1) + 'Head');
    typeHead.textContent = typeName;
    
    data[typeName].forEach(item => {
      const divName = document.createElement('div');
      divName.classList.add('type-item', 'name');
      divName.textContent = item.name;

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
function populateLightboxContent(itemData) {
  const lbContent = document.querySelector('.content-container');


  lbContent.innerHTML = `
    <h3 class="lightbox-name">${itemData.name}</h3>
    <h3 class="lightbox-price">${itemData.price}</h3>
    <p class="lightbox-description">${itemData.description}</p>
  `;
}

gridItems.forEach(gridItem => {
  gridItem.addEventListener('click', function() {
    const itemName = gridItem.textContent; // Get the ID of the clicked item

        const clickedItemData = allItems.find(item => item.name == itemName);
        // // Populate the lightbox content with the clicked item data
        populateLightboxContent(clickedItemData);
        // // Show the lightbox
        lightbox.style.display = 'block';
      })
  });

const lightbox = document.querySelector('.lightbox')
lightbox.addEventListener('click', function(event) {
    if (event.target.classList.contains('lightbox-overlay') || event.target.classList.contains('close-btn')) {
      lightbox.style.display = 'none';
    }
  });

};

getData();
