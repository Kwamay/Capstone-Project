const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.mobile').classList.toggle('show');
});

const navButton = document.getElementById('nav-button');
navButton.addEventListener('click', () => {
  document.querySelector('.mobile').classList.toggle('show');
});

let showAll = false;
const seeMoreBtn = document.getElementById('see-more-btn');
const seeLessBtn = document.createElement('button');
seeLessBtn.textContent = 'See Less';
seeLessBtn.style.display = 'none';
seeLessBtn.classList.add('see-less');
const img = document.createElement('img');
img.src = 'assets/images/icons/arrow_up.png';
seeLessBtn.appendChild(img);

const featureDetails = [
  {
    featureName: 'Apst. Cm. Frank',
    featurePosition: 'Global Overseer of Glorious Vineyard of Christ',
    featureBiography: `Aps. Cm. Frank Owusu oversees all the affairs of the ministry
  and acts as the sernior servant of the ministry.`,
    featureImage: 'assets/images/speakers/commander.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
  {
    featureName: 'Ps. Robert Agyemang',
    featurePosition: 'Global Chairman of Glorious Vineyard of Christ',
    featureBiography: 'Ps. Robert is the senior care taker of the ministry.',
    featureImage: 'assets/images/speakers/Pastor.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
  {
    featureName: 'Apst. Agartha. Owusu',
    featurePosition: 'Global Sheperd of Glorious Vineyard of Christ',
    featureBiography: 'Aps. Agartha Owusu is the senior advisor of of the ministry..',
    featureImage: 'assets/images/speakers/Ohemaa.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
  {
    featureName: 'Min. Deborah Anaba',
    featurePosition: 'Resident Pastor of Glorious Vineyard of Christ',
    featureBiography: ` Min. Deborah is the Senior Watchman of the Sheep 
  Executives of the ministry.`,
    featureImage: 'assets/images/speakers/dEBBY.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
  {
    featureName: 'Min. Harriet Opoku',
    featurePosition: 'Music Directress of Glorious Vineyard of Christ',
    featureBiography: ' Min. Harriet oversee all the activites of the Music Ministry',
    featureImage: 'assets/images/speakers/Princess.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
  {
    featureName: 'Min. Desmond Opoku',
    featurePosition:
      'Assit. Evangelism Director of Glorious Vineyard of Christ',
    featureBiography: 'Min. Desmond assist the Evangelism Director in the church',
    featureImage: 'assets/images/speakers/Desy.jpg',
    checkImage: 'assets/images/speakers/black&white_check.png',
  },
];

function populate() {
  const ul = document.getElementById('speakers-list-populate');
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  const x = window.matchMedia('(max-width: 768px)');
  const isMobileView = x.matches;
  featureDetails
    .filter((eachElement, index) => (showAll || !isMobileView ? true : index < 2))
    .forEach((eachElement) => {
      const li = document.createElement('li');
      const checkImage = document.createElement('img');
      const img = document.createElement('img');
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h4');
      const p1 = document.createElement('p');

      li.classList.add('speakers-list-items');
      img.classList.add('speaker');
      h4.classList.add('position');
      h3.classList.add('name');
      div.classList.add('speaker-details');
      p1.className = 'biography';
      checkImage.classList.add('check-image');

      img.src = eachElement.featureImage;
      img.alt = `${eachElement.featureName} image`;
      checkImage.src = eachElement.checkImage;
      checkImage.alt = `${eachElement.featureName} image`;
      h3.innerText = eachElement.featureName;
      h4.innerText = eachElement.featurePosition;
      p1.innerText = eachElement.featureBiography;

      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(p1);

      li.appendChild(checkImage);
      li.appendChild(img);
      li.appendChild(div);

      ul.appendChild(li);
    });
}

populate();

seeMoreBtn.addEventListener('click', () => {
  showAll = true;
  seeMoreBtn.style.display = 'none';
  seeLessBtn.style.display = 'block';
  populate();
});

seeLessBtn.addEventListener('click', () => {
  showAll = false;
  seeMoreBtn.style.display = 'block';
  seeLessBtn.style.display = 'none';
  populate();
});

seeMoreBtn.insertAdjacentElement('afterend', seeLessBtn);
