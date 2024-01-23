async function fetchProduct() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  setImage(data[0].url);
}

function setImage(url) {
  let divImg = document.createElement("div");
  let btnLike = document.createElement("button");

  $(divImg).addClass("content");
  $(divImg).css("background", `url(${url}) no-repeat center center / cover`);
  $(btnLike).addClass("btn-like");
  $(btnLike).on("click", setLike);
  $(divImg).append(btnLike);
  $(".container").append(divImg);
}

function setLike() {
  $(this).toggleClass("liked");
}

function activeLike() {
  console.log("work");
}

function setMoreImg() {
  for (let i = 0; i < 3; i++) {
    fetchProduct();
  }
}

for (let i = 0; i < 9; i++) {
  fetchProduct();
}

function toggleMode() {
  if ($(".btn-switch").hasClass("is-active")) {
    $(".btn-switch").removeClass("is-active");
    $("body").removeClass("dark");
  } else {
    $(".btn-switch").addClass("is-active");
    $("body").addClass("dark");
  }
}

$(".btn-more").on("click", setMoreImg);
$(".btn-switch").on("click", toggleMode);
