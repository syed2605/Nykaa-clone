window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  var nav2 = document.querySelector("#nav2");
  if (nav2) nav2.classList.toggle("sticky", window.scrollY > 0);
});
const right = document.querySelector("#nav1 div");
const left = document.querySelector("#nav1 ul");
document.querySelector(".cartIcon-click").addEventListener("click", openNav);
function openNav() {
  console.log("test");
}
setUser();
function setUser() {
  let userPlaceholder = document.querySelector(".dropbtn>span");
  let userDetails = JSON.parse(this.localStorage.getItem("loggedInUser")) || {};
  console.log(userDetails);
  let loggedin = this.localStorage.getItem("loggedin") || "false";
  if (loggedin == "true" && userDetails) {
    userPlaceholder.textContent = userDetails.userName;
    document.querySelector("#forPopup").textContent = " Log out";
  } else {
    userPlaceholder.textContent = "User";
    document.querySelector("#forPopup").textContent = " Log in";
  }
}
window.addEventListener("storage", function () {
  setUser();
});
// function reportWindowSize() {
//   console.log("in", window.innerWidth);
//   console.log("out", screen.width);
//   if (right && left)
//     if (window.innerWidth < 1300) {
//       left.style.marginLeft = "0";
//       right.style.marginRigh = "0";
//     } else {
//       left.style.marginLeft = "60px";
//       right.style.marginRigh = "180px";
//     }
// }

// window.onresize = reportWindowSize;
// toDo implement icons goTo
// let smallIcont = document.getElementsByClassName("font-nav1-items");
// smallIcont[0].addEventListener("click", gotohome);
// for (let i = 0; i < smallIcont.length; i++) {
//   const element = smallIcont[i];
//   ;
// }
// function gotohome(e) {
//   console.log(e);
// }
