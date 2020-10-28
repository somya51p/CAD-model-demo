const reviews = [
    {
      id: 1,
      name: "Servo motor",
      job: "RAJAT",
      img:
        "images/1.jpeg",
      text:
        "CAD model of MG995 servo.",
    },
    {
      id: 2,
      name: "Centaur-X",
      job: "Rajat",
      img:
        "images/2.jpeg",
      text:
        "CAD of the torso of the motion sync robot.",
    },
    {
      id: 3,
      name: "Control-Exo",
      job: "Rajat",
      img:
        "images/3.jpeg",
      text:
        "CAD of Control-Exo of motion sync robot.",
    },
    {
      id: 4,
      name: "Humanoid like torso",
      job: "Rajat",
      img:
        "images/4.jpeg",
      text:
        "CAD of torso design of a humanoid like bot.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });