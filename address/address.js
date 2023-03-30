var demoData = [
  {
    name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
    price: "₹419",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/5/35f92daNYKAC00000174_1.jpg",
    discount_price: "₹599",
    discount_percentage: "30% Off",
    reviews: "3305",
    shades: "15 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Super Stay Full Coverage Foundation",
    price: "₹639",
    Keywords: "FEATURED\nBESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875be506902395685715.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "29761",
    shades: "9 Shades",
  },
  {
    name: "Kay Beauty Hydrating Foundation",
    price: "₹900",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/b/2bc84e88904330902640_1.jpg",
    discount_price: "₹1200",
    discount_percentage: "25% Off",
    reviews: "5884",
    shades: "20 Shades",
  },
];
var coll = document.getElementsByClassName("collapsible");
var i;
let bagitems = document.getElementsByClassName("bagitems")[0];
let pricesection = document.getElementsByClassName("pricesection")[0];
let bagItemsData = JSON.parse(localStorage.getItem("product-Bag")) || [];
addSideBarCartData(bagItemsData);
addPriceDetails();
for (i = 0; i < coll.length; i++) {
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
  let price_details = JSON.parse(localStorage.getItem("price-details"));
  priceDetailsDiv.setAttribute("class", "sidebar-price-details");
  let title = document.createElement("p");
  title.textContent = "Price Details";
  title.setAttribute("class", "font-sidebar-price-details");
  let bagMrpDiv = document.createElement("div");
  let bagMrp = document.createElement("p");
  bagMrp.textContent = "Bag MRP ";
  bagMrpDiv.setAttribute("class", "font-sidebar-item-small");
  let bagItemCount = document.createElement("span");
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



var pinInput = document.querySelector(".add-pincode");
pinInput.addEventListener("keyup", function (){
  let pin = pinInput.value;
  let pinwarn = document.querySelector(".ad-pinwarn");

  if (!pin || pin.length != 6){
    pinwarn.classList.remove("hide");
  }
  
  if (pin && pin.length == 6){
    pinwarn.classList.add("hide");
  }
});
var flatInput = document.querySelector(".add-flat");
flatInput.addEventListener("keyup", function (){
  let flat = flatInput.value;
  let flatwarn = document.querySelector(".address-flatwarning");

  if (flat.length <= 4){
    flatwarn.classList.remove("hide1");
  }
  
  if (!flat || flat.length >= 4){
    flatwarn.classList.add("hide1");
  }
});
var areaInput = document.querySelector(".add-area");
areaInput.addEventListener("keyup", function (){
  let area = areaInput.value;
  let areawarn = document.querySelector(".address-areawarning");

  if (area.length <= 4){
    areawarn.classList.remove("hide2");
  }
  
  if (area.length >= 4){
    areawarn.classList.add("hide2");
  }
});

var nameInput = document.querySelector(".add-name");
nameInput.addEventListener("keyup", function (){
  let name = nameInput.value;
  let namewarn = document.querySelector(".address-namewarning");

  if (name.length <= 4){
    namewarn.classList.remove("hide4");
  }
  
  if (!name || name.length >= 4){
    namewarn.classList.add("hide4");
  }
});

var phoneInput = document.querySelector(".add-phone");
phoneInput.addEventListener("keyup", function (){
  let phone = phoneInput.value;
  let phonewarn = document.querySelector(".address-phonewarning");

  if (!phone || phone.length != 10){
    phonewarn.classList.remove("hide5");
  }
  
  if (!phone || phone.length == 10){
    phonewarn.classList.add("hide5");
  }
});



function changesymbol() {
  let symbolchanged = document.querySelectorAll(".toggleInsert");
  console.log("syed dgsdg");
  console.log(symbolchanged[1]);

  symbolchanged[1].setAttribute("class", "");
  if (num == 1) {
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-on");
  } else {
    symbolchanged[1].setAttribute("class", "fa-solid fa-toggle-off");
  }
}

var list = JSON.parse(localStorage.getItem("address-list")) || [];
addingaddress(list);
function called() {
  var x = {
    name: document.querySelector(".add-name").value,
    flat: document.querySelector(".add-flat").value,
    area: document.querySelector(".add-area").value,
    pincode: document.querySelector(".add-pincode").value,
    phone: document.querySelector(".add-phone").value,
    email: document.querySelector(".add-mail").value,
  };
  list.push(x);
  console.log(x);
  localStorage.setItem("address-list", JSON.stringify(list));
  var y = JSON.parse(localStorage.getItem("address-list")) || [];
  let oneItem = [];
  oneItem.push(x);
  addingaddress(oneItem);
}

function addingaddress(x) {
  // document.querySelector(".Adding-new-add").textContent="";

  for (var i = 0; i < x.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("id", "addnewaddress");
    var div1 = document.createElement("div");
    var title = document.createElement("p");
    title.textContent = x[i].name;
    div1.append(title);
    var div2 = document.createElement("div");
    var road = document.createElement("p");
    road.textContent = x[i].flat;
    road.setAttribute("class", "font-address-description");
    div2.append(road);
    var div3 = document.createElement("div");
    var local = document.createElement("p");
    local.textContent = x[i].area;
    local.setAttribute("class", "font-address-description");
    var pin = document.createElement("p");
    pin.textContent = x[i].pincode;
    div3.append(local, pin);
    pin.setAttribute("class", "font-address-description");
    var div4 = document.createElement("div");
    var phn = document.createElement("p");
    phn.setAttribute("class", "font-address-description");
    phn.textContent = x[i].phone;
    div4.append(phn);
    var div7 = document.createElement("div");
    var div5 = document.createElement("button");
    div5.textContent = "Edit";
    div5.setAttribute("class", "ad-button1");
    var div6 = document.createElement("button");
    div6.innerHTML =
      'Deliver Here &nbsp;<span><i class="fa-solid fa-arrow-right"></i></span>';
    div6.setAttribute("class", "ad-edit");
    div6.addEventListener("click", function () {
      window.location.href = "/Payment/payment.html";
    });
    div7.append(div5, div6);
    div7.setAttribute("class", "buttonfunction");
    div.append(div1, div2, div3, div4, div7);
    document.querySelector(".Adding-new-add").append(div);
  }
}
document
  .getElementsByClassName("sign-up-module")[0]
  .addEventListener("click", function () {
    window.location.href = "/Signup/signup.html";
  });
document
  .getElementsByClassName("payment-module")[0]
  .addEventListener("click", function () {
    window.location.href = "/Payment/payment.html";
  });
