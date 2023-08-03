const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  document.querySelector(".mobile").classList.toggle("show");
});

const navButton = document.querySelector("#nav-button");
navButton.addEventListener("click", () => {
  document.querySelector(".mobile").classList.toggle("show");
});

let showAll = false;
const seeMoreBtn = document.getElementById("see-more-btn");
const additionalContent = document.querySelectorAll(".show-mobile");
const seeLessBtn = document.createElement("button");
seeLessBtn.textContent = "See Less";
seeLessBtn.style.display = "none";
seeLessBtn.classList.add("see-less");
const img = document.createElement("img");
img.src = "assets/images/icons/arrow_up.png";
seeLessBtn.appendChild(img);

seeMoreBtn.addEventListener("click", () => {
  showAll = true;
  seeMoreBtn.style.display = "none";
  seeLessBtn.style.display = "block";
  populate();
});

seeLessBtn.addEventListener("click", () => {
  showAll = false;
  seeMoreBtn.style.display = "block";
  seeLessBtn.style.display = "none";
  populate()
});

seeMoreBtn.insertAdjacentElement("afterend", seeLessBtn);

const featureDetails = [
  {
    featureName: "Apst. Cm. Frank",
    featurePosition: "Global Overseer of Glorious Vineyard of Christ",
    featureBiography: `Aps. Cm. Frank Owusu oversees all the affairs of the ministry
  and acts as the sernior servant of the ministry.`,
    featureImage: "assets/images/speakers/Commaner.jpg",
  },
  {
    featureName: "Ps. Robert Agyemang",
    featurePosition: "Global Chairman of Glorious Vineyard of Christ",
    featureBiography: `Ps. Robert is the senior care taker of the ministry. He takes
  care of the sheep (member) in the ministry.`,
    featureImage: "assets/images/speakers/Pastor.jpg",
  },
  {
    featureName: "Apst. Agartha. Owusu",
    featurePosition: "Global Sheperd of Glorious Vineyard of Christ",
    featureBiography: `Aps. Agartha Owusu is the senior advisor of of the ministry. She
    is in charge of giving counselling to the members to the
    ministry.`,
    featureImage: "assets/images/speakers/Ohemaa.jpg",
  },
  {
    featureName: "Min. Deborah Anaba",
    featurePosition: "Resident Pastor of Glorious Vineyard of Christ",
    featureBiography: ` Min. Deborah is the Senior Watchman of the Sheep and Head
  Minister in the ministryand oversee the activities of all other
  Executives of the ministry.`,
    featureImage: "assets/images/speakers/dEBBY.jpg",
  },
  {
    featureName: "Min. Harriet Opoku",
    featurePosition: "Music Directress of Glorious Vineyard of Christ",
    featureBiography: ` Min. Harriet oversee all the activites of the Music Ministry
    including Choreography, Drama and Instrumentation and serves as the Third Head Executives.`,
    featureImage: "assets/images/speakers/Princess.jpg",
  },
  {
    featureName: "Min. Desmond Opoku",
    featurePosition:
      "Assit. Evangelism Director of Glorious Vineyard of Christ",
    featureBiography: `Min. Desmond assist the Evangelism Director in the church and
    also serve as the Head of the Children's Ministery.`,
    featureImage: "assets/images/speakers/Desy.jpg",
  },
];

function populate() {
const ul = document.getElementById("speakers-list-populate");
while(ul.hasChildNodes()) {
  ul.removeChild(ul.firstChild)
}
featureDetails
  .filter((eachElement, index) => {
    return showAll ? true : index < 2;
  })
  .forEach((eachElement) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");

    li.classList.add("speakers-list-items");
    img.classList.add("speaker");
    h4.classList.add("position");
    h3.classList.add("name");
    div.classList.add("speaker-details");
    p1.className = "biography";

    img.src = eachElement.featureImage;
    img.alt = `${eachElement.featureName} image`;
    h3.innerText = eachElement.featureName;
    h4.innerText = eachElement.featurePosition;
    p1.innerText = eachElement.featureBiography;

    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p1);

    li.appendChild(img);
    li.appendChild(div);

    ul.appendChild(li);
  });
}

populate();