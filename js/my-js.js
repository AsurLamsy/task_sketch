const addDetail = document.querySelector("#btn-add");
addDetail.onclick = function () {
 document.createElement("li");
};

my_li = document.getElementById("org_div1");
document.body.insertBefore(addDetail, my_li);
