document.getElementById("temp-form").addEventListener("submit", function (e) {
  document.querySelector(".result").style.display = "none";
  document.querySelector(".loader").style.display = "block";

  setTimeout(calculateTemperature, 1000);
  e.preventDefault();
});

function calculateTemperature() {
  const temp = document.querySelector(".input-temp").value;

  if (isFinite(temp) && !temp === '') {
    const fahrenheit = temp * (9 / 5) + 32;

    document.getElementById("result").value = `${fahrenheit.toFixed(2)} °F`;
    //Display Results
    document.querySelector(".result").style.display = "block";
    document.querySelector(".loader").style.display = "none";
  } else {
    //Display Error
    displayError("Please Enter a number");
  }
}

function displayError(errorMessage) {

  //Set style to none
  document.querySelector(".result").style.display = "none";
  document.querySelector(".loader").style.display = "none";

  //Create error message div
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.appendChild(document.createTextNode(errorMessage));

  //Select card and heading to insertBefore
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  card.insertBefore(errorDiv, heading);
  //Clear error message after 3sec
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".error-message").remove();
  document.querySelector(".input-temp").value = '';
}