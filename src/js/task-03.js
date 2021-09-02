const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUlRef = document.querySelector('#gallery')

const liRef = images.map(img => {
  return `<li class='item'>
    <img src="${img.url}" alt="${img.alt}" width="640">
  </li>`
  
  
 // const imagesLiRef = document.createElement('li');
  //imagesLiRef.classList.add ('item')
  //const imagesImgRef = document.createElement('img');
  //imagesImgRef.src = img.url;
  //imagesImgRef.alt = img.alt;
  //imagesImgRef.width = 640;
  //imagesLiRef.append(imagesImgRef);

 //return imagesLiRef
})
//galleryUlRef.append(...liRef)

galleryUlRef.insertAdjacentHTML('afterbegin', liRef)

