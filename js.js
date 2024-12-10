/* subscribe button rotates when hover and click */

let subscribe_icon = document.getElementById("subscribe-icon");
let subscribe_icon_vertical = document.getElementById("subscribe-icon-vertical");
let subscribe_icon_horizontal = document.getElementById("subscribe-icon-horizontal");
let subscribe_text = document.getElementById("subscribe-text");
let subscribe_button = document.getElementById("subscribe-button");
let subscribe_deg = 0;
let subscribe_state = 0;
let click = 0;

if(subscribe_button)
{
  subscribe_button.addEventListener("mouseenter", function()
  {
    subscribe_deg = subscribe_deg + 90;
    subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
    subscribe_icon.style.transition = "all 0.3s ease-in-out";
    subscribe_text.style.color = "let(--murmur-gray)";
    subscribe_icon_vertical.style.background = "let(--murmur-gray)";
    subscribe_icon_horizontal.style.background = "let(--murmur-gray)";
  });
}

if(subscribe_button)
{
  subscribe_button.addEventListener("click", function()
  {
    subscribe_deg = subscribe_deg + 135;
    subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
    subscribe_icon.style.transition = "all 0.45s ease-in-out";

    if(subscribe_state == 0)
    {
      subscribe_state = 1;
    }
    else
    {
      subscribe_state = 0; 
    }

    click = 1;
  });  
}

if(subscribe_button)
{
  subscribe_button.addEventListener("mouseleave", function()
  {
    if(click == 0)
    {
      subscribe_deg = subscribe_deg - 90;
      subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
      subscribe_icon.style.transition = "all 0.3s ease-in-out";
    }

    subscribe_text.style.color = "let(--murmur-black)";
    subscribe_icon_vertical.style.background = "let(--murmur-black)";
    subscribe_icon_horizontal.style.background = "let(--murmur-black)";
    click = 0;
  });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

let prevScrollpos = window.scrollY;
let navbar = document.getElementById("navbar")

window.onscroll = function()
{
  if(window.innerWidth > 992)
  {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos >= currentScrollPos)
    {
      navbar.style.top = "0";
    }
    else
    {
      navbar.style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
  }
}

document.addEventListener('touchstart', function(e) {
  if (window.scrollY === 0) {  // 當頁面已經在最上方
      e.preventDefault();  // 禁止默認的行為（即過度下拉）
  }
}, { passive: false });