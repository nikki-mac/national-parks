
//function that handles the form submission
const submitHandler = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const errors = validateForm(formData);
  
    // clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
      element.style.display = "none";
    }
  
    // display any new errors
    Object.keys(errors).forEach((key) => {
      // find the specific error element
      const errorElement = document.querySelector(`#${key}-form .error`);
      errorElement.innerHTML = errors[key];
      errorElement.style.display = "block";
    });
  
    // if there are no errors
    if (!Object.keys(errors).length) {
      //create a new element
      const parkSection = document.createElement("section");
  
      // add the park class
      parkSection.classList.add("park-display");
  
      // construct the HTML for this element
      const content = `
      <h2>${formData.get("name")}</h2>
      <div class="location-display">${formData.get("location")}</div>
      <div class="description-display">${formData.get("description")}</div>
      <button class="rate-button" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established-display stat">
          <h3>Established</h3>
          <div class="value">${moment(formData.get("established")).format(
            "MMMM D, YYYY"
          )}</div>
        </div>
        <div class="area-display stat">
          <h3>Area</h3>
          <div class="value">${formData.get("area")}</div>
        </div>
        <div class="rating-display stat">
          <h3>Rating</h3>
          <div class="value">${formData.get("rating")}</div>
        </div>
      </div>
      `;
  
      // set the innerHTML
      parkSection.innerHTML = content;
  
      //append to the main element
      document.querySelector("main").appendChild(parkSection);
    }
  };





// const submitHandler = (event) => {
//   event.preventDefault(); //prevents default behavior of forms in a browser (reloading)

//   const form = event.target;

//   const formData = new FormData(form);

//   const errors = validateForm(formData);

//   //clear all previous errors
//   const errorElements = document.querySelectorAll(".error");
//   for (let element of errorElements) {
//     element.style.display = "none";
//   }

//   //display new errors
//   Object.keys(errors).forEach((key) => {
//     //find the specific error element
//     const errorElement = document.querySelector(`#${key}-form .error`);
//     errorElement.innerHTML = errors[key];
//     errorElement.style.display = "block";
//   });

// // if there are no errors
// if (!Object.keys(errors).length) {
//     //create a new element
//     const parkSection = document.createElement("section");
  
//     // add the park class
//     parkSection.classList.add("park-display");
  
//     // construct the HTML for this element
//     const content = `
//       <h2>${formData.get("name")}</h2>
//       <div class="location-display">${formData.get("location")}</div>
//       <div class="description-display">${formData.get("description")}</div>
//       <button class="rate-button" title="Add to Favourites">&#9734;</button>
//       <div class="stats">
//         <div class="established-display stat">
//           <h3>Established</h3>
//           <div class="value">${moment(formData.get("established")).format(
//             "MMMM D, YYYY"
//           )}</div>
//         </div>
//         <div class="area-display stat">
//           <h3>Area</h3>
//           <div class="value">${formData.get("area")}</div>
//         </div>
//         <div class="rating-display stat">
//           <h3>Rating</h3>
//           <div class="value">${formData.get("rating")}</div>
//         </div>
//       </div>
//       `;
  
//     // set the innerHTML
//     parkSection.innerHTML = content;
  
//     //append to the main element
//     document.querySelector("main").appendChild(parkSection);
//   }
// };

//main function that creates the event listener for the form submission
const main = () => {
  //get the form element
  const form = document.querySelector("#park-form");

  //attach the submit handler
  form.addEventListener("submit", submitHandler);
};

//event listener for DOMContentLoaded that invokes the main() function
window.addEventListener("DOMContentLoaded", main);

///////////////////////////////////

// accepts a single string value and returns true
// if the value is not null and the string contains at
// least one non-space character
function validateExists(value) {
  return value && value.trim();
}

// this function accepts a FormData object containing the
// data from the form and checks each one to ensure tat some value
// was entered.
function validateForm(formData) {
  const errors = {};

  //check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name.";
  }

  //check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating.";
  } else {
      //check if the rating is a number
      if (!validateNumber(formData.get("rating"))) {
          errors.rating = "Rating must be a number."
      } else {
          //since it is a number, convert it
          const rating = Number.parseFloat(formData.get("rating"))
          //check that the rating is between 1 and 5 inclusive
          if (!validateRange(rating, 1, 5)) {
              errors.rating = "Rating must be between 1 and 5 inclusive"
          }
      }
  }

  //check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description.";
  }

  //check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date.";
  }

  //check if area was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park.";
  }

  return errors;
}

/////////////////////////////////////////

// rating validation functions to ensure a number is submitted, 
// and that the number is between the accepted range

function validateNumber(value) {
    return !isNaN(value)
}

function validateRange(value, min, max) {
    return value >= min && value <= max
}

