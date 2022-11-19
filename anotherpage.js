const restaurants = document
  .querySelector(".restaurants")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const restaurantsList = [
      "Clearman's North Woods Inn of Covina",
      "Fonda Don Chon",
      "Avolio's Italian Restaurant",
      "Giovanni's Restaurant",
      "Restaurant Hayakawa",
      "Georgie's Mediterranean Cuisine",
      "Millie's Restaurant & Bakery",
      "Costa's Family Restaurant",
      "Media Noche Cuban Cuisine",
      "The Artist Pizzeria",
      "Pane e Vino",
    ];
    const num = Math.floor(Math.random() * 11);
    console.log(num);
    alert(`${restaurantsList[num]} is reccomended`);
  });
