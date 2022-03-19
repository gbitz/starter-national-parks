// console.log(document);

// const heading = document.querySelector("h1");
// console.log(heading);

// const value = document.querySelector(".value");
// console.log(value);

// const button = document.querySelector("button");
// console.log(button);

// const div = document.querySelector(".stat div")
// console.log(div);

// const hello = document.querySelector("hello");
// console.log(hello);

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const heading3List = document.querySelectorAll("h3");
// for (let element of heading3List.values()) {
//     console.log(element);
// }

// const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }
//   desc.innerHTML = content;
// }

// const ratings = document.querySelectorAll(".rating-display .value");
// // for (let rating of ratings) {
// //   let ratingValue = parseFloat(rating.innerText);
// //   if (ratingValue > 4.7) {
// //     rating.style.fontWeight = "bold";
// //     rating.style.color = "#3ba17c";
// //   }
// // }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement);

// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");


// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the name sorter");
});

nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";
  
  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {

    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
parksArray.forEach((park) => {
  main.appendChild(park);
});

});