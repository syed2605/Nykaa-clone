// document.getElementById('firsttab').();
var coll = document.getElementsByClassName("collapsible");


let bagitems = document.getElementsByClassName("bagitems")[0];
let pricesection = document.getElementsByClassName("pricesection")[0];
let bagItemsData = JSON.parse(localStorage.getItem("product-Bag")) || [];

addSideBarCartData(bagItemsData);
addPriceDetails();
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.querySelector("img").src.includes("down"))
      this.querySelector("img").src =
        "https://adn-static1.nykaa.com/media/wysiwyg/Payments/Up.svg";
    else
      this.querySelector("img").src =
        "https://adn-static1.nykaa.com/media/wysiwyg/Payments/down.svg";
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function addSideBarCartData(data) {
  data.forEach((item, index) => {
    addSideBarCartDataItem(item, index);
  });
}
function addSideBarCartDataItem(item, index) {
  let parentDiv = document.getElementsByClassName("bagitems")[0];
  if (!parentDiv) return;
  const itemDiv = `
  <div class="cart-item-parent" >
  <div class="sidebar-item">
  <div class="sidebar-item-top">
    <div class="sidebar-item-img-sec">
      <img
        src="${item.image}"
        alt=""
      />
    </div>
    <div class="sidebar-item-text-sec">
      <p class="font-sidebar-item-regular">
        ${item.name}
      </p>
      <p class="font-sidebar-item-small_pink">${item.bonus || " "}</p>
    </div> 
  </div>
  <div class="sidebar-item-bottom">
    <div class="sidebar-item-quantity-sec">
      <p class="font-sidebar-item-regular">
        Quantity : <span class="sidebar-item-quantity font-sidebar-item-regular"
          > 1</span
        >
        <img
          src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/down.svg"
          alt="down-arrow"
        />
      </p>
    </div>
    <div class="sidebar-item-price-sec">
      <p class="font-sidebar-item-discount">${item.discount_price || " "}</p>
      <p class="font-sidebar-item-price">${item.price}</p>
    </div>
  </div>
</div>
</div>`;
  parentDiv.innerHTML += itemDiv;
}

function addPriceDetails() {
  let priceDetailsDiv = document.getElementsByClassName("pricesection")[0];
  let price_details = JSON.parse(localStorage.getItem("price-details")) || {
    itemCount: 0,
    bagMrp: 0,
    bagDiscount:  0,
    youPay: 0,
  };;


  priceDetailsDiv.setAttribute("class", "sidebar-price-details");

  let title = document.createElement("p");
  title.textContent = "Price Details";
  title.setAttribute("class", "font-sidebar-price-details");
  let bagMrpDiv = document.createElement("div");
  let bagMrp = document.createElement("p");
  bagMrp.textContent = "Bag MRP ";
  bagMrpDiv.setAttribute("class", "font-sidebar-item-small");
  let bagItemCount = document.createElement("span");

  // var checkPriceDetails = price_details.itemCount == "" ? 0: price_details.itemc;

  bagItemCount.textContent = `(${price_details.itemCount} items)`;
  bagItemCount.setAttribute("class", "sidebar-bag-item-count");
  bagMrp.appendChild(bagItemCount);
  let bagMrpPrice = document.createElement("p");
  bagMrpPrice.textContent = `₹${price_details.bagMrp}`;
  bagMrpDiv.append(bagMrp, bagMrpPrice);
  let bagDiscountDiv = document.createElement("div");
  let bagDiscount = document.createElement("p");
  bagDiscount.textContent = "Bag Discount";
  let bagDiscountPrice = document.createElement("p");
  bagDiscountPrice.textContent = `₹${price_details.bagDiscount}`;
  bagDiscountDiv.append(bagDiscount, bagDiscountPrice);
  bagDiscountDiv.setAttribute("class", "font-sidebar-item-small");
  let shippingDiv = document.createElement("div");
  let shipping = document.createElement("p");
  shipping.textContent = "Shipping";
  let shippingTooltip = document.createElement("span");
  shippingTooltip.innerHTML =
    "<img src = 'https://adn-static1.nykaa.com/media/wysiwyg/Payments/5TootltipInfo.svg' ></img>";
  shipping.appendChild(shippingTooltip);
  let shippingPrice = document.createElement("p");
  let shippingPriceText = document.createElement("span");
  shippingPriceText.textContent = "₹70";
  shippingPriceText.style.textDecoration = "line-through";
  let shippingFree = document.createElement("span");
  shippingFree.style.color = "green";
  shippingFree.textContent = "Free";
  shippingPrice.append(shippingPriceText, shippingFree);
  shippingDiv.append(shipping, shippingPrice);
  shippingDiv.setAttribute("class", "font-sidebar-item-small");
  let youPayDiv = document.createElement("div");
  let youPay = document.createElement("p");
  youPay.textContent = "You Pay";
  let youPayPrice = document.createElement("p");
  youPayPrice.textContent = `₹${price_details.youPay}`;
  youPayDiv.append(youPay, youPayPrice);
  youPayDiv.setAttribute("class", "font-sidebar-price-details");
  priceDetailsDiv.append(
    title,
    bagMrpDiv,
    bagDiscountDiv,
    shippingDiv,
    youPayDiv
  );
  document.querySelector(
    "#numberofitems"
  ).textContent = `${price_details.itemCount} Items`;
  document.querySelector("#cartvalue").textContent = `₹${price_details.bagMrp}`;
  // parentDiv.appendChild(priceDetailsDiv);
}
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // Show the current tab, and add an "active" class to the link that opened the tab

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("firsttab").click();




// payment page form validation 
var cardnumberInput = document.querySelector("#cardnumber");
var cvvInput = document.querySelector(".cvv-input");
var monthInput = document.querySelector(".month-input");

// var monthCvv = document.querySelector("#expdate").value;
// var cvv = document.querySelector("#input-cvv").value;

cardnumberInput.addEventListener("keyup", function (){
  let cardnumber = cardnumberInput.value;
  let cardWarning = document.querySelector(".cardnumber-warning");
  
  
  if (!cardnumber || cardnumber.length != 12){
    cardWarning.classList.remove("hide");
  }
  
  if (cardnumber && cardnumber.length == 12){
    cardWarning.classList.add("hide");
  }
})
  


monthInput.addEventListener("keyup", function (){
  let month = monthInput.value;
  let monthWarning = document.querySelector("#month-warning");
  console.log(month);
  console.log(monthWarning);
  if (!month || month.length != 5){
    monthWarning.classList.remove("hide1");
    // console.log(month);
  }else{
    monthWarning.classList.add("hide1");
  }


})

cvvInput.addEventListener("keyup", function (){
  let cvv = cvvInput.value;
  let cvvWarn = document.querySelector("#cvv-warning");
  console.log(cvv);
  if (!cvv || cvv.length != 3){
    cvvWarn.classList.remove("hide2");
    // console.log(month);
  }else{
    cvvWarn.classList.add("hide2");
  }


})
// 

function redirect() {
  let orderItemsData = bagItemsData;
  localStorage.setItem("product-Bag", JSON.stringify([]));
  localStorage.setItem("orderItemsData", JSON.stringify(orderItemsData));
  window.location.assign("../UserProfile/myorder/myorder.html");
}



