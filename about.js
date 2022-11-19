console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Your form was submited");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let mouseOverImage = document.querySelector(".catimage");

mouseOverImage.addEventListener("mouseover", function () {
  alert("give user a compliment");
});
