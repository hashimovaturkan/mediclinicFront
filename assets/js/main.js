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
    case "FAQ":
        HoverSign.style.left = "345px";
        HoverSign.style.width = "35px";
      break;
    // case "My Account":
    //     HoverSign.style.left = "410px";
    //     HoverSign.style.width = "84px";
    //   break;
    case "About us":
        HoverSign.style.left = "410px";
        HoverSign.style.width = "63px";
      break;
    case "Contact us":
        HoverSign.style.left = "500px";
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
timetableDatas?.forEach(function(item){
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

timetableTarget?.addEventListener("click",function(e){
  timetableDropdown.classList.toggle("d-none");
  e.preventDefault();
  e.stopPropagation();
})

// document.addEventListener("click",function(e){
//   e.preventDefault();
//   e.stopPropagation();
//   timetableDropdown?.classList.add("d-none");
// })

timetableLink?.forEach(function(item){
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


//appointment-modal
const appointmentModal = document.querySelector(".appointment-modal__wrapper");
const appointmentModalCloseBtn = document.querySelector(".appointment-modal__form-close");
const appointmentModalOpenBtn = document.querySelector(".makeAppointmentModal");

appointmentModalCloseBtn?.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  appointmentModal.style.opacity="0";
  appointmentModal.style.visibility="hidden";
})
appointmentModalOpenBtn?.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  appointmentModal.style.opacity="1";
  appointmentModal.style.visibility="visible";
})


//lang
const lang = document.querySelector(".header__lang");
const langDropdown =document.querySelector(".header__lang__list");
lang.addEventListener("click",(e)=>{
    e.stopPropagation();
    langDropdown.classList.toggle("d-none");
    if(langDropdown.getAttribute("class").includes("d-none")){
        lang.style.backgroundColor="transparent"
    }
    else{
        lang.style.backgroundColor="#fff";
    }
});
langDropdown.addEventListener("click",(e)=>{
    e.stopPropagation();
});


//search-modal
const searchModal = document.querySelector(".search__wrapper");
const searchCloseBtn = document.querySelector(".search__form-close");
const searchModalOpenBtn = document.querySelectorAll(".header__search-1");


searchCloseBtn?.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  searchModal.style.opacity="0";
  searchModal.style.visibility="hidden";
})

searchModalOpenBtn.forEach(function(item){
  item?.addEventListener("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    searchModal.style.opacity="1";
    searchModal.style.visibility="visible";
  })
})



//blog-filter
const blogCategories = document.querySelectorAll(".blog__categories a");
blogCategories?.forEach(function(item){
  item.addEventListener("click",function(e){
    blogCategories?.forEach(function(blog){
      blog.style.color = "#22252C";
      blog.style.borderBottom = "none";
    });
    item.style.color = "#1370b5";
    item.style.borderBottom = "2px solid #1370b5";
  })
})


//blog category filter

  var $filters = $('[data-filter]'),
    $boxes = $('[data-target]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterBoxes = $this.attr('data-filter');

    if ($filterBoxes == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-target = "' + $filterBoxes + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });


  //loading

  function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

//profile-dropdown
const profileDropdownTitle = document.querySelector(".header__user-side-profile");
const infoDropdown = document.querySelector(".header__user-side-info");
const profileDropdown = document.querySelector(".header__user-side-dropdown");

profileDropdownTitle?.addEventListener("mouseover",function(e){
  infoDropdown.style.opacity ="1";
  infoDropdown.style.width ="150px";
  infoDropdown.style.paddingRight ="55px";
})
profileDropdownTitle?.addEventListener("mouseout",function(e){
  infoDropdown.style.opacity ="0";
  infoDropdown.style.width ="0";
  infoDropdown.style.paddingRight ="0%";
  profileDropdown.classList.add("visibility");
})
profileDropdownTitle?.addEventListener("click",function(e){
  profileDropdown.classList.toggle("visibility");
})
profileDropdown?.addEventListener("mouseover",function(e){
  infoDropdown.style.opacity ="1";
  infoDropdown.style.width ="150px";
  infoDropdown.style.paddingRight ="55px";
  profileDropdown.classList.remove("visibility");
})
profileDropdown?.addEventListener("mouseout",function(e){
  infoDropdown.style.opacity ="0";
  infoDropdown.style.width ="0";
  infoDropdown.style.paddingRight ="0%";
  profileDropdown.classList.add("visibility");
})


//form
const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input)=>{
    const label = input.nextElementSibling;
    const warning = label.nextElementSibling;
    const formIcon = input.previousElementSibling;
    
        formIcon?.addEventListener("click",()=>{
            if(input.getAttribute("type")==="text"){
                input.setAttribute("type","password");
            }
            else{
                input.setAttribute("type","text");
            }
        })
        input.addEventListener("focusin",(e)=>{
            input.style.paddingBottom = "0";
            label.style.left="17px";
            label.style.top="4px";
            label.style.fontSize="14px";
            label.style.color="rgba(white, .2)";
        })
        input.addEventListener("focusout",(e)=>{
            input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="16px";
                label.style.fontSize="16px";
                label.style.color="rgba(white, .3)";
        })

    input.addEventListener("input",(event)=>{
        input.addEventListener("focusout",(e)=>{
            if(event.target.value){
                input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="4px";
                label.style.fontSize="14px";
                label.style.color="rgba(white, .2)";
                console.log(warning)
                warning?.classList.add("d-none");
                
                
            }
            else{
                input.style.paddingBottom = "0";
                label.style.left="17px";
                label.style.top="16px";
                label.style.fontSize="16px";
                label.style.color="rgba(white, .3)";
                warning?.classList.remove("d-none");
            }
            
        });

        
    })
});

const profileBtn = document.querySelectorAll(".profile-btn");

profileBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const target = document.querySelector(`[data-target=${btn.getAttribute("data-value")}]`);
        profileBtn.forEach((active)=>{
          const target = document.querySelector(`[data-target=${active.getAttribute("data-value")}]`);
          target.style.display = "none";
          active.style.backgroundColor = "transparent";
          active.style.color = "#3e454f";
          active.querySelector("i").style.color ="#3e454f";
        })
        console.log(target);
        target.style.display = "block";
        btn.style.backgroundColor = "#3e454f";
        btn.style.color = "#fff";
        btn.querySelector("i").style.color ="#fff";
    })
})


//hamburger-menu
const menuBtn = document.querySelector(".header__user-side-icon--mobile");
const menu = document.querySelector(".menu-side");
const menuClose = document.querySelector(".menu-side__close-icon");
const mediaQueryXs = window.matchMedia('(max-width: 576px)')
const mediaQueryMd = window.matchMedia('(min-width: 992px)')

menuBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    menu.style.left="0%";
})
menuClose.addEventListener("click",()=>{
    menu.style.left="-100%";
})
menu.addEventListener("click",(e)=>{
    e.stopPropagation();
})
document.body.addEventListener("click",()=>{
    menu.style.left="-100%";
})

mediaQueryXs.addEventListener( "change", (e) => {
    if (e.matches) {
        menu.style.width="100vw";
  } else {
        menu.style.width="70%"
  }
})

mediaQueryMd.addEventListener( "change", (e) => {
    if (e.matches) {
        menuClose.click();
    } 
})