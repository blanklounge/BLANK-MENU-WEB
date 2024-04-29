async function getData() {
  const response = await fetch('../data.json');
  const data = await response.json();
  console.log("got Data!");

  var typeName = 'Signature Coffee';

  var catItems = data[typeName];

    var typeList = document.getElementById('type1List');

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

//Create lightboxes for objects that has images

const itemsWithImage = catItems.filter(object => object.img);
console.log(itemsWithImage);

const container = document.querySelector('.lb-container')


itemsWithImage.forEach(item => {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  container.appendChild(lightbox);

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');
  lightbox.appendChild(textContent);

  const lbContent = document.createElement('div');
  lbContent.classList.add('lightbox-content');
  lightbox.appendChild(lbContent);
  lbContent.style.backgroundImage = `url("../${item.img}")`;


  const lightboxName = document.createElement('h3');
  lightboxName.classList.add('lightbox-name');
  lightboxName.textContent = item.name;
  textContent.appendChild(lightboxName);

  const lightboxPrice = document.createElement('h3');
  lightboxPrice.classList.add('lightbox-price');
  lightboxPrice.textContent = item.price;
  textContent.appendChild(lightboxPrice);

  const lightboxDescription = document.createElement('p');
  lightboxDescription.classList.add('lightbox-description');
  lightboxDescription.textContent = item.description;
  textContent.appendChild(lightboxDescription);

  lightbox.style.display = "block";
})

};

getData();
