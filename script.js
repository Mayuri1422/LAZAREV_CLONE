function navAnimation() {
  var nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(".nav-bottom", {
      height: "22vh",
      duration: 0.3,
    });

    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });

    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.2,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

navAnimation();

function pageAnimation() {
  let elem = document.querySelectorAll(".right-elem");
  elem.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      // console.log(e.childNodes[3].style.opacity=1);
      // e.childNodes[3].style.opacity=1
      gsap.to(e.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    e.addEventListener("mouseleave", function () {
      // e.childNodes[3].style.opacity=0
      gsap.to(e.childNodes[3], {
        opacity: 1,
        scale: 0,
      });
    });
    e.addEventListener("mousemove", function (dates) {
      gsap.to(e.childNodes[3], {
        x: dates.x - e.getBoundingClientRect().x,
        y: dates.y - e.getBoundingClientRect().y - 150,
      });
    });
  });
}

pageAnimation();

function videoAnimation() {
  let page3Center = document.querySelector(".page3-center");
  var video = document.querySelector(".page3 video");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "36px",
    });
  });
}

videoAnimation();

function movingDiv() {
  let sections = document.querySelectorAll(".page4-right");
  sections.forEach(function (section) {
    // console.log(section.childNodes[3])
    section.addEventListener("mouseenter", function () {
      section.childNodes[3].play(), (section.childNodes[3].style.opacity = 1);
      // gsap.to(section.childNodes[3],{
      //   opacity:1

      // })
    }),
      section.addEventListener("mouseleave", function () {
        section.childNodes[3].load(), //To Restart Video
          // section.childNodes[3].style.opacity=0

          gsap.to(section.childNodes[3], {
            opacity: 0,
          });
      });
  });
}

movingDiv()

function page4() {
  let elem = document.querySelectorAll(".page4-right");
  elem.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      console.log(e.childNodes[5]);
      // e.childNodes[3].style.opacity=1
      gsap.to(e.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });
    e.addEventListener("mouseleave", function () {
      // e.childNodes[3].style.opacity=0
      gsap.to(e.childNodes[5], {
        opacity: 1,
        scale: 0,
      });
    });
    e.addEventListener("mousemove", function (dates) {
      gsap.to(e.childNodes[5], {
        x: dates.x - e.getBoundingClientRect().x - 50,
        y: dates.y - e.getBoundingClientRect().y - 450,
      });
    });
  });
}
page4()

function arrowAnimation() {
  let arrows = document.querySelectorAll("summary");
  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
      if (arrow.childNodes[1].lastElementChild.style.opacity == 1)
        arrow.childNodes[1].lastElementChild.style.opacity = 0;
    });
  });
}
// arrowAnimation();