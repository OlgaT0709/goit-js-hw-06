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

// const ulRef = document.querySelector('.gallery');
// const liesRef = images.map(({ url, alt }) => {
//   const liRef = document.createElement('li');
//   const imgRef = document.createElement('img');
//   imgRef.src = url;
//   imgRef.alt = alt;
//   imgRef.style.display = 'block';
//   imgRef.style.width = '100%';
//   imgRef.style.marginBottom = '10px'

//   liRef.append(imgRef);
//   return liRef;
// });

// ulRef.append(...liesRef );
// console.log(ulRef);

const ulRef = document.querySelector('.gallery');

const liRef = images.map(({ url, alt }) => 
  `<li><img src=${url} alt=${alt} style="display: block; width: 100%; margin-bottom: 10px;"></li>`
);

ulRef.insertAdjacentHTML('afterbegin', liRef.join(''));
console.log(ulRef);