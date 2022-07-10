let slider = document.getElementById("container");
let item = document.querySelectorAll(".container .slider-div");
let isDown = false;
let startX;
let scrollLeft;
let defulMarginLeft = 200;
let marginLeft;
let walk;

window.onresize = () => {
  let itemWidht = slider.clientWidth;
  console.log(itemWidht);
  for (i = 0; i < item.length; i++) {
    item[i].style.width = `${itemWidht}px`;
  }
};
window.onload = () => {
  let itemWidht = slider.clientWidth;
  slider.scrollLeft = 10 % console.log(itemWidht);
  for (i = 0; i < item.length; i++) {
    item[i].style.width = `${itemWidht}px`;
    item[i].style.marginLeft = `-${defulMarginLeft}%`;
  }
};
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  if (isDown) {
    slider.style.cursor = "pointer";
  }
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  if (!isDown) {
    slider.style.cursor = "auto";
  }
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  walk = x - startX;
  marginLeft = (scrollLeft - walk) / 10 + defulMarginLeft;
  for (i = 0; i < item.length; i++) {
    item[i].style.marginLeft = `-${marginLeft}%`;
  }
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  if (!isDown) {
    slider.style.cursor = "auto";
  }
  if (walk < 0) {
    if (marginLeft > 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-400%`;
      }
      defulMarginLeft = 400;
    }
    if (marginLeft < 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-400%`;
      }
      defulMarginLeft = 400;
    }
    if (marginLeft < 300) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-300%`;
      }
      defulMarginLeft = 300;
    }
    if (marginLeft < 200) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-200%`;
      }
      defulMarginLeft = 200;
    }
    if (marginLeft < 100) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `0%`;
      }
      defulMarginLeft = 100;
    }
  }
  // ====================
  if (walk > 0) {
    if (marginLeft < 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-300%`;
      }
      defulMarginLeft = 300;
    }
    if (marginLeft < 300) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-200%`;
      }
      defulMarginLeft = 200;
    }
    if (marginLeft < 200) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-100%`;
      }
      defulMarginLeft = 100;
    }
    if (marginLeft < 100) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `0%`;
      }
      defulMarginLeft = 0;
    }
  }
  console.log(marginLeft)
});

slider.addEventListener("ontouchstart", () => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  walk = x - startX;
  marginLeft = (scrollLeft - walk) / 10 + defulMarginLeft;
  for (i = 0; i < item.length; i++) {
    item[i].style.marginLeft = `-${marginLeft}%`;
  }
  console.log("good")
});
slider.addEventListener("ontouchend", () => {
  isDown = false;
  if (!isDown) {
    slider.style.cursor = "auto";
  }
  if (walk < 0) {
    if (marginLeft > 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-400%`;
      }
      defulMarginLeft = 400;
    }
    if (marginLeft < 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-400%`;
      }
      defulMarginLeft = 400;
    }
    if (marginLeft < 300) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-300%`;
      }
      defulMarginLeft = 300;
    }
    if (marginLeft < 200) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-200%`;
      }
      defulMarginLeft = 200;
    }
    if (marginLeft < 100) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `0%`;
      }
      defulMarginLeft = 100;
    }
  }
  // ====================
  if (walk > 0) {
    if (marginLeft < 400) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-300%`;
      }
      defulMarginLeft = 300;
    }
    if (marginLeft < 300) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-200%`;
      }
      defulMarginLeft = 200;
    }
    if (marginLeft < 200) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `-100%`;
      }
      defulMarginLeft = 100;
    }
    if (marginLeft < 100) {
      for (i = 0; i < item.length; i++) {
        item[i].style.marginLeft = `0%`;
      }
      defulMarginLeft = 0;
    }
  }
  console.log("good");
});

// ontouchmove
// ontouchend
ontouchstart