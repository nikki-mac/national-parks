
//Solution Code:

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", function (event) {
//   console.log(event.target.parentNode);
// });

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  };
  
  // function for sorting by name
  const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };

  //my function for sorting by rating
  const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(parkA.querySelector(".rating-display .value").innerText)
    console.log(parkARating)
    const parkBRating = parseFloat(parkB.querySelector(".rating-display .value").innerText)
    console.log(parkBRating)
    if (parkARating < parkBRating) {
        return -1
    } else if (parkARating > parkBRating) {
        return 1
    } else {
        return 0
    }
}
  
//   // Solution function for sorting by rating
//   const sortByRating = (parkA, parkB) => {
//     const parkARating = parseFloat(
//       parkA.querySelector(".rating-display > .value").innerText
//     );
//     const parkBRating = parseFloat(
//       parkB.querySelector(".rating-display > .value").innerText
//     );
//     return parkBRating - parkARating;
//   };
  

  // function for handling the nameSorter click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // function to handle the ratingSorter click
  const ratingSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // the point where all the code starts
  const main = () => {
    // select the nameSorter link
    const nameSorter = document.querySelector("#name-sorter");
  
    // add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    // select the ratingSorter link
    const ratingSorter = document.querySelector("#rating-sorter");
  
    // add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
  
    // select all the buttons for all the parks
    const allBtns = document.querySelectorAll(".rate-button");
  
    // iterate the list of buttons and add an event handler to each
    allBtns.forEach((btn) => {
      btn.addEventListener("click", favoriteButtonClickHandler);
    });
  };
  
  // Add event listener for DOMContentLoaded
  window.addEventListener("DOMContentLoaded", main);



  /////////////////////////////////////////

  // ASSIGNMENT PRACTICE //

  // //console.log(document)

// const heading = document.querySelectorAll("button")
// console.log(heading)

// // find all h3
// const heading3List = document.querySelectorAll("h3");

// // iterate over entire list
// for (let element of heading3List.values()) {
//   console.log(element);
// }

// // another way to iterate
// for (let i = 0; i < heading3List.length; i++) {
//   const element = heading3List[i];
//   console.log(element);
// }

// // find all divs containing ratings
// const ratings = document.querySelectorAll(".rating-display .value");

// // iterate over entire list
// for (let element of ratings.values()) {
//   console.log(element);
// }

// // find all divs containing areas
// const areas = document.querySelectorAll(".area-display .value");

// for (let i = 0; i < areas.length; i++) {
//   const element = areas[i];
//   console.log(element);

// const descriptions = document.querySelectorAll(".description-display")
// // console.log(descriptions)

// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     if (content.length > 250) {
//         content = content.slice(0, 250)
//         content = content + '<a href="#">...<a>'
//     }
//     desc.innerHTML = content
//   }

// //selecting all the rating values:
// const ratings = document.querySelectorAll(".rating-display .value")

// //iterate through the list and get each actual rating value using innerText property
// //use parseFloat() method to convert string to a floating point number:

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText)
//     if (ratingValue > 4.7) {
//         rating.classList.add("high-rating")
//         rating.classList.remove("value")
//     }
// }

// const parks = document.querySelectorAll(".park-display")
// const numberParks = parks.length
// const newElement = document.createElement("div")

// newElement.innerText = `${numberParks} exciting parks to visit`

// newElement.classList.add("header-statement")

// const header = document.querySelector("header")
// header.appendChild(newElement)

// const main = document.querySelector("main")
// const park = main.querySelector(".park-display")
// main.removeChild(park)

// const firstBtn = document.querySelector("button")

// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button!", event)
// })

// //logs the specific element that fired the event using the `target` property
// firstBtn.addEventListener("click", (event) => {
//     console.log(event.target)
// })

//select all the buttons for all the parks
// const allBtns = document.querySelectorAll(".rate-button")

//iterate through the list of buttons and add an event handler to each

// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         console.log(event.target)
//     })
// })

// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         console.log(event.target.parentNode)
//     })
// })

// //changes the background color:

// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         const park = event.target.parentNode
//         park.style.backgroundColor = "#c8e6c9"
//     })
// })

/////////////////////////////////////////////////////////

//select the `nameSorter` link:
// const nameSorter = document.querySelector("#name-sorter");

//add an event listener:
// nameSorter.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log("You clicked the name sorter!")
// })

// Logic in this event handler:
// 1. get the <main> element that contains all the parks
// 2. get a nodeList of all the parks
// 3. empty the <main> element
// 4. convert the nodeList to an array for convenience of sorting
// 5. sort the array using techniques that you learned previously
// 6. iterate through the sorted array and append each park to <main>


//LONG VERSION
//add event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   //get the main element:
//   const main = document.querySelector("main");

//   //get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   //empty the main element
//   main.innerHTML = "";

//   //create an array
//   const parksArray = Array.from(parksList);

//   //sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   //insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
// //   });
// // });

// //REFACTORED VERSION - equivalent to above code

// //function for sorting by name
// const sortByName = (parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText
//     console.log('park a name', parkAName)
//     const parkBName = parkB.querySelector("h2").innerText
//     if (parkAName < parkBName) {
//         return -1
//     } else if (parkAName > parkBName) {
//         return 1
//     } else {
//         return 0
//     }
// }

// //function for handling the `nameSorter` click
// const nameSorterClickHandler = (event) => {
//     event.preventDefault();

//     //get the main element
//     const main = document.querySelector("main");

//     // 2. Get the list of parks
//     const parksList = main.querySelectorAll(".park-display");
  
//     // 3. Empty the main
//     main.innerHTML = "";
  
//     // 4. Create an array
//     const parksArray = Array.from(parksList);
  
//     // 5. Sort the array
//     parksArray.sort(sortByName);
  
//     // 6. Insert each park into the DOM
//     parksArray.forEach((park) => {
//       main.appendChild(park);
//     });
//   };
  
//   // Select the `nameSorter` link
//   const nameSorter = document.querySelector("#name-sorter");
  
//   // Add an event listener
//   nameSorter.addEventListener("click", nameSorterClickHandler);







// ///////////////////////////
// // function for sorting by rating

//  // Select the `nameSorter` link
//  const ratingSorter = document.querySelector("#rating-sorter");


// //also didn't work????
// const sortByRating = (parkA, parkB) => {
//     const parkARating = parseFloat(parkA.querySelector(".rating-display .value").innerText)
//     console.log(parkARating)
//     const parkBRating = parseFloat(parkB.querySelector(".rating-display .value").innerText)
//     console.log(parkBRating)
//     if (parkARating < parkBRating) {
//         return -1
//     } else if (parkARating > parkBRating) {
//         return 1
//     } else {
//         return 0
//     }
// }

// // didn't work?????
// // const sortByRating = (parkA, parkB) => {
// //     const parkARating = parseFloat(
// //       parkA.querySelector(".rating-display > .value").innerText
// //     );
// //     const parkBRating = parseFloat(
// //       parkB.querySelector(".rating-display > .value").innerText
// //     );
// //     return parkBRating - parkARating;
// //   };

//   // function to handle the ratingSorter click
// const ratingSorterClickHandler = (event) => {
//     event.preventDefault();
  
//     // 1.  get the main element
//     const main = document.querySelector("main");
  
//     // 2. get the list of parks
//     const parksList = main.querySelectorAll(".park-display");
  
//     // 3. empty the main
//     main.innerHTML = "";
  
//     // 4. create an array
//     const parksArray = Array.from(parksList);
  
//     // 5. sort the array
//     parksArray.sort(sortByRating);
  
//     // 6. Insert each park into the DOM
//     parksArray.forEach((park) => {
//       main.appendChild(park);
//     });
//   };

//     // Add an event listener
//     ratingSorter.addEventListener("click", ratingSorterClickHandler);


    ///////////////////////////////////

//     console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

//////////////////////////////////////////////////