function submitForm() {
    // Validate the form
    if (validateForm()) {
      // Collect form data
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;
      const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(checkbox => checkbox.value);
      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;

      // Display the collected data in a popup
      const popupData = document.getElementById("popupData");
      popupData.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(", ")}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;

      // Display the popup
      document.getElementById("popup").style.display = "block";
    }
  }

  function validateForm() {
    const emailField = document.getElementById("email");
    const mobileField = document.getElementById("mobile");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobilePattern = /^\d{10}$/;

    const errors = [];

    if (!emailPattern.test(emailField.value)) {
      errors.push("Invalid Email");
    }

    if (!mobilePattern.test(mobileField.value)) {
      errors.push("Invalid Mobile Number (10 digits only)");
    }

    if (errors.length > 0) {
      alert("Validation Errors:\n" + errors.join("\n"));
      return false;
    }

    return true;
  }

  function closePopup() {
    // Hide the popup
    document.getElementById("popup").style.display = "none";

    // Reset the form
    document.getElementById("surveyForm").reset();
  }

  function resetForm() {
    // Reset the form
    document.getElementById("surveyForm").reset();
  }