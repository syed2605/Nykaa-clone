// product-Bag
// [
//     {
//         "name": "Maybelline New York Fit Me 12hr Oil Control Compact",
//         "price": "₹209",
//         "image": "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/1/71bb2388901526584109_1.jpg",
//         "discount_price": "₹249",
//         "discount_percentage": "16% Off",
//         "reviews": "43291",
//         "shades": "6 Shades",
//         "id": 10,
//         "qty": 2
//     },
// ]

var data = JSON.parse(localStorage.getItem("orderItemsData")) || [];
displayProduct(data);
function displayProduct(doc) {
  document.querySelector(".orderdiv").innerHTML = " ";
  doc.map(function (x, ind) {
    let cart = document.querySelector(".orderdiv");
    let item = document.createElement("div");
    item.setAttribute("class", "order");
    let content = ` 
      <div class="items">
      <div class="imgdiv">
          <img src="${x.image}" alt="">
      </div>
      <div class="namediv">
          <p class="titlename">${x.name}</p>
          <p class="featuredtxt">${x.Keywords || ""}</p>
          <p class="titlename">${x.price}</p>
      </div>
      <div class="status">
          <p class="font-product-item-MRP">Status</p>
          <h3 class="transist">In - Transit</h3>
      </div>
      <div class="deliverydiv">
          <p class="featuredtxt">Delivery Expected by</p>
          <h3 class="datee">XXXX</h3>
      </div> 
  </div>`;
    item.innerHTML += content;
    cart.appendChild(item);
    var d = item.querySelector(".datee");
    let today = new Date();
    let dd = String(today.getDate() + 3).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    console.log(today);
    d.innerHTML = today;
  });
}

document.querySelector("#cancelAll").addEventListener("click", change);
function change() {
  let a = document.querySelector("#cancelAll").textContent;
  console.log(a);
  if (a == "Cancel Order") {
    document.querySelector("#tracking").innerText = "Order Cancelled";
    document.querySelector("#tracking").style.background = "red";
    document.querySelector("#cancelAll").textContent = "Order Again";
  } else {
    document.querySelector("#tracking").innerText = "Track Status";
    document.querySelector("#tracking").style.background = "rgb(241,165,24";
    document.querySelector("#cancelAll").textContent = "Cancel Order";
  }
}

// print pdf
function printPdf() {
  const pdfFrame = document.querySelector("#pdf-frame");
  const pdfUrl = pdfFrame.src;
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = "../Asset/invoice.pdf";
  a.download = "invoice.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("worked");
}
