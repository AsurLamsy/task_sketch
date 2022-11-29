// var link = document.querySelector("#btn-add");
// link.addEventListener("click", function (evt) {
//  var newLi = document.createElement("li");
//  newLi.className = "expDetail";
//  newLi.innerHTML = "Новое";
//  newLi.style.cssText = "width: 100px; height: 12px";
//  document.body.append(newLi);
// });

let newPoint =
 '<li class="choice-detail"><input type="text" name="input" placeholder="Деталь такая-то"><input type="checkbox" name="detail"> </li>';
let number =
 '<li class="choice-detail" style="padding-top: 40px;"><img class="justify-content-center" src="/static/img/4.PNG" alt="4"></li>';

let numbers = document.querySelector("#numbers");

var btn = document.querySelector("#btn-add");
let list = document.querySelector("#listNew");
btn.addEventListener("click", function (evt) {
 list.insertAdjacentHTML("beforeEnd", newPoint);
 numbers.insertAdjacentHTML("beforeEnd", number);
});

// var newInpit = document.createElement("div");
// newInpit.className = "changeChoice";
// newInpit.innerHTML = "Ghbdtn";
// document.body.append(newInpit);

// var newLi = document.createElement("li");
// newLi.className = "expDetail";
// newLi.innerHTML = "kierhiu";
// docement.body.append(newLi);
