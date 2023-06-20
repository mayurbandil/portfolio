// window.scrollTo(0,1000);
// this will scroll the window of the user till the 1000px in length

// window.pageYOffset;
// this will tell you where you are on the window

// window.scrollBy(0,100);
// this will tell you to where to go after each step

// goal : - scroll the window by 50px at every 50ms till we have reached the 1500px
// var targetHeight = 1500;
// var currectheight = 0;
// function smoothScroll(){

//     var i  = setInterval(() => {
//         if(currectheight===targetHeight){
//             clearInterval(i);
//             return;
//         }

//         currectheight += 10;
//         window.scrollBy(0,10);

//     }, 1);
// }

// var exp = document.getElementById('expBtn');
// exp.addEventListener('click', smoothScroll)

// how to get the height of the any section with its id
// var expBtn = document.getElementById('expBtn');
// var exp = document.getElementById('experience');
// var targetHeight = exp.getBoundingClientRect().y;
// var currectheight = 0;
// function smoothScroll(event){
//     event.preventDefault();
//     var i  = setInterval(() => {
//         if(targetHeight < 0){
//             clearInterval(i);
//             return;
//         }

//         targetHeight--;
//         window.scrollBy(0,1);

//     }, 1);
// }

// expBtn.addEventListener('click', smoothScroll);

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    var Interval = setInterval(() => {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(Interval);
        return;
      }

      window.scrollBy(0, 50);
    }, 50);
  });
}

// now we will see how to auto fill the skill bars

var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var isReached = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
  // progressBars.style.width = 0 + '%';
}

initialiseBars();

function fillbars() {
  for (let bar of progressBars) {
    let targetwidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval1 = setInterval(() => {
      if (currentWidth > targetwidth) {
        clearInterval(interval1);
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 5);
  }
}

function checkScroll() {
  // you have to check whether skill container is visible

  var coordinates = skillsContainer.getBoundingClientRect();
  if (!isReached && coordinates.top <= window.innerHeight) {
    console.log("reached");
    // yeh is reached isiliye liya hai taaki bar bar annimation trigger na ho pae
    isReached = true;
    fillbars();
  }
  // yeh uske liye kia gai kyunki jaise hii ham dubara home pe jaake skills section ko visit karenge toh dubara se annimation fire hona chahiye
  if (isReached && coordinates.top > window.innerHeight) {
    isReached = false;
    initialiseBars();
  }
}
