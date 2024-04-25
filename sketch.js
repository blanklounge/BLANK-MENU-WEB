async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log(data);

  console.log(Object.keys(data).length);

  for(let i=0; i<Object.keys(data).length ; i++) {
    var typeList = document.getElementById('type'+ (i+1) + 'List');
 
    var typeName = Object.keys(data)[i];
    var typeHead = document.getElementById('type'+ (i+1) + 'Head');
    typeHead.textContent = typeName;
    
    data[typeName].forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      typeList.appendChild(li);
  })
}
}

getData();
