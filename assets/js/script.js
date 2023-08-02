const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
document.querySelector('.mobile').classList.toggle('show')
});

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
    document.querySelector('.mobile').classList.toggle('show');
});

const speakerGroup = document.querySelector('.speakers-list');
const seeMoreBtn = document.getElementById('see-more-btn');
const additionalContent = document.querySelectorAll('.show-mobile');
const seeLessBtn = document.createElement('button');
seeLessBtn.textContent = 'See Less';
seeLessBtn.style.display = 'none';
seeLessBtn.classList.add('see-less');
const img = document.createElement('img');
img.src ='assets/images/icons/arrow_up.png'
seeLessBtn.appendChild( img)

seeMoreBtn.addEventListener('click', () => {
    additionalContent.forEach((content) => {
    content.style.display = 'flex';
    })
    seeMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'block';
});

seeLessBtn.addEventListener('click', () => {
    additionalContent.forEach((content) => {
        content.style.display = 'none';
        });
    seeMoreBtn.style.display = 'block';
    seeLessBtn.style.display = 'none';
});

seeMoreBtn.insertAdjacentElement('afterend', seeLessBtn);

const featureDetails = [
{
  featureName: 'Apst. Cm. Frank',
  featurePosition: 'Global Overseer of Glorious Vineyard of Christ',
  featureBiography: `Aps. Cm. Frank Owusu oversees all the affairs of the ministry
  and acts as the sernior servant of the ministry.`,
  featureImage:'assets/images/speakers/Commaner.jpg'
},
{ 
  featureName: 'Ps. Robert Agyemang',
  featurePosition: 'Global Chairman of Glorious Vineyard of Christ',
  featureBiography: `Ps. Robert is the senior care taker of the ministry. He takes
  care of the sheep (member) in the ministry.`,
  featureImage:'assets/images/speakers/Pastor.jpg'
},
{
  featureName: 'Apst. Agartha. Owusu',
    featurePosition: 'Global Sheperd of Glorious Vineyard of Christ',
    featureBiography: `Aps. Agartha Owusu is the senior advisor of of the ministry. She
    is in charge of giving counselling to the members to the
    ministry.`,
    featureImage:'assets/images/speakers/Ohemaa.jpg',
},
{
  featureName: 'Min. Deborah Anaba',
  featurePosition: 'Resident Pastor of Glorious Vineyard of Christ',
  featureBiography: ` Min. Deborah is the Senior Watchman of the Sheep and Head
  Minister in the ministryand oversee the activities of all other
  Executives of the ministry.`,
  featureImage:'assets/images/speakers/dEBBY.jpg',
},
{
  featureName: 'Min. Harriet Opoku',
    featurePosition: 'Music Directress of Glorious Vineyard of Christ',
    featureBiography: ` Min. Harriet oversee all the activites of the Music Ministry
    including Choreography, Drama and Instrumentation and serves as the Third Head Executives.`,
    featureImage:'assets/images/speakers/Princess.jpg,'
},
{
  featureName: 'Min. Desmond Opoku',
    featurePosition: 'Assit. Evangelism Director of Glorious Vineyard of Christ',
    featureBiography: `Min. Desmond assist the Evangelism Director in the church and
    also serve as the Head of the Children's Ministery.`,
    featureImage:'assets/images/speakers/Desy.jpg,'
},
];

function LoadItems(index, range) {
    for (; index < range; index += 1) {
        const element = speakers[index];
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p1 = document.createElement('p');

        li.className = 'speakers-list-items';
        img.className = 'speaker';
        h4.className = 'position';
        p1.className = 'biography';

        img.src = element.featureImage;
        img.alt = `${element.name} image`;
        h4.innerText = element.featureName;
        p1.innerText = element.featurePosition;
        p2.innerText = element.featureBiography;

        divImg.appendChild(img);
        divDesc.appendChild(h4);
        divDesc.appendChild(p1);
        divDesc.appendChild(p2);
        div.appendChild(divImg);
        div.appendChild(divDesc);
        speakerGroup.appendChild(ul);
    }
}