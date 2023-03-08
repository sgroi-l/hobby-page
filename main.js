const date = new Date();
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const caption = document.querySelector('.caption');
const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');

function scaleArticles(scaleUp, scaleDown) {
  scaleUp.addEventListener('mouseover', () => {
    scaleDown.classList.add('scale-down');
  });

  scaleUp.addEventListener('mouseout', () => {
    scaleDown.classList.remove('scale-down');
  });
}

scaleArticles(article1, article2);
scaleArticles(article2, article1);

/* Generate todays date */

document.querySelector("#date").innerHTML = `Todays date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


/* Declaring the array of image filenames */

const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg' ];


/* Declaring the alternative text for each image file */

const altText = {
    pic1: "Nadia looking over the new plot",
    pic2: "The new plot in all its weedy glory",
    pic3: "Brambles running wild in a cage",
    pic4: "Laurie weeding inside a cage",
    pic5: "Nadia sitting on an oak sleeper after a hard day's work",
    pic6: "Spring 2022: Bed building completed. Time to get the seedlings in",
    pic7: "Summer 2022: Flowers and herbs growing happily in a planter"
  };

/* Looping through images */
for (i = 0; i < pics.length; i++) {
  const filename = pics[i];
  const path = 'images/' + filename;
  const alt = altText[filename.slice(0, -4)];
  const newImage = document.createElement('img');
  newImage.setAttribute('src', path);
  newImage.setAttribute('alt', alt);
  thumbBar.appendChild(newImage);
  
  newImage.addEventListener('click', () => {
      displayedImage.setAttribute('src', path);
      displayedImage.setAttribute('alt', alt);
      caption.textContent = alt;
  })
 }

