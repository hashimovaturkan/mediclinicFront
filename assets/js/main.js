//Menu Hover
const HoverSign = document.querySelector(".menu__list-elem");
const HoverLinks = document.querySelectorAll(".menu__list-link");

const HoverDropDowns = document.querySelectorAll(".menu__dropdown");

HoverDropDowns.forEach(function(item){
  item.addEventListener("mouseover", function(e){
    const link = item.parentElement.querySelector(".menu__list-link");
    hoverSign(link);
  })

  item.addEventListener("mouseout", function(e){
    e.preventDefault();
    HoverSign.style.left = "-4.5px";
    HoverSign.style.width = "41.75px";
  });
})

HoverLinks.forEach(function(item){
    item.addEventListener("mouseover", function(e){
        e.preventDefault();
        hoverSign(item);
    });

    item.addEventListener("mouseout", function(e){
        e.preventDefault();
        HoverSign.style.left = "-4.5px";
        HoverSign.style.width = "41.75px";
    });

})

const hoverSign = function (item){
  switch (item.textContent) {
    case "Home":
      HoverSign.style.left = "-4.5px";
      HoverSign.style.width = "41.75px";
      break;
    case "Doctors":
        HoverSign.style.left = "70px";
        HoverSign.style.width = "53px";
      break;
    case "Departments":
        HoverSign.style.left = "155px";
        HoverSign.style.width = "93px";
      break;
    case "Blogs":
        HoverSign.style.left = "280px";
        HoverSign.style.width = "37px";
      break;
    case "Shop":
        HoverSign.style.left = "350px";
        HoverSign.style.width = "35px";
      break;
    case "My Account":
        HoverSign.style.left = "415px";
        HoverSign.style.width = "84px";
      break;
    case "About us":
        HoverSign.style.left = "530px";
        HoverSign.style.width = "63px";
      break;
    case "Contact us":
        HoverSign.style.left = "625px";
        HoverSign.style.width = "77px";
        break;  
    default:
      HoverSign.style.left = "-4.5px";
      HoverSign.style.width = "41.75px";
        break;
  }
}

//menu scrool fixed
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header__bottom");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}


//timetable
const timetableDatas =  document.querySelectorAll(".timetable__data");
timetableDatas.forEach(function(item){
  item.addEventListener("mouseover",function(e){
    const next = item.querySelector(".timetable__dropdown");
    next.classList.remove("d-none");
  })
  item.addEventListener("mouseout",function(e){
    const next = item.querySelector(".timetable__dropdown");
    next.classList.add("d-none");
  })
})


const timetableLink = document.querySelectorAll(".selector__link");
const timetableTarget = document.querySelector(".selector__target span");
const timetableDropdown = document.querySelector(".selector__dropdown");

timetableTarget.addEventListener("click",function(e){
  timetableDropdown.classList.toggle("d-none");
  e.preventDefault();
  e.stopPropagation();
})

document.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  timetableDropdown.classList.add("d-none");
})

timetableLink.forEach(function(item){
  item.addEventListener("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    timetableTarget.textContent = item.textContent;
    timetableDropdown.classList.add("d-none");
  })
  item.addEventListener("mouseout",function(e){
    e.preventDefault();
    e.stopPropagation();
    const next = item.querySelector(".timetable__dropdown");
    next.classList.add("d-none");
  })
})