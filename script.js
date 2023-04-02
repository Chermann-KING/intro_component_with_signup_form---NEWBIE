document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const infosSubscription = document.querySelector(".infos-subscription");
  const inputList = document.querySelector(".inputs-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputs = [
      {
        id: "first-name",
        errorId: "error-firstname",
        errorMsg: "First Name cannot be empty",
        type: "text",
      },
      {
        id: "last-name",
        errorId: "error-lastname",
        errorMsg: "Last Name cannot be empty",
        type: "text",
      },
      {
        id: "email",
        errorId: "error-email",
        errorMsg: "Email cannot be empty",
        type: "email",
      },
      {
        id: "password",
        errorId: "error-password",
        errorMsg: "Password cannot be empty",
        type: "password",
      },
    ];

    inputs.forEach(function (input) {
      const element = document.getElementById(input.id);
      const errorElement = document.getElementById(input.errorId);
      const errorIcon = element.nextElementSibling;
      let isValid = true;
      let errorMessage = input.errorMsg;

      if (element.value.trim() === "") {
        isValid = false;
      } else if (input.type === "email") {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(element.value)) {
          isValid = false;
          errorMessage = "Looks like this is not an email";
        }
      } else if (input.type === "password") {
        if (
          element.value.length < 8 ||
          !/[A-Z]/.test(element.value) ||
          !/[a-z]/.test(element.value) ||
          !/\d/.test(element.value) ||
          !/[^A-Za-z\d]/.test(element.value)
        ) {
          isValid = false;
          errorMessage =
            "Password must be at least 8 characters long and include uppercase, lowercase, digit, and a special character";
        }
      }

      if (!isValid) {
        element.parentElement.classList.add("input-error");
        errorElement.textContent = errorMessage;
        errorElement.style.display = "block";
        errorIcon.style.display = "block";

        // Change the height of the form
        if (window.innerWidth < 776) {
          // ajuste la hauteur de la div pour les téléphones
          infosSubscription.style.height = "673px";
          form.style.height = "562px";
          inputList.style.height = "372px";
        } else {
          // ajuste la hauteur de la div pour les ordinateurs
          infosSubscription.style.height = "650px";
          form.style.height = "562px";
          inputList.style.height = "372px";
        }
      } else {
        element.parentElement.classList.remove("input-error");
        errorElement.style.display = "none";
        errorIcon.style.display = "none";

        // Change the height of the form
        if (window.innerWidth < 776) {
          // ajuste la hauteur de la div pour les téléphones
          infosSubscription.style.height = "556px";
          form.style.height = "442px";
          inputList.style.height = "274px";
        } else {
          // ajuste la hauteur de la div pour les ordinateurs
          infosSubscription.style.height = "562px";
          form.style.height = "474px";
          inputList.style.height = "285px";
        }
      }
    });
  });
});
