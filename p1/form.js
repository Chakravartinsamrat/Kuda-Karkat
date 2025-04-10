document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const Fname = document.getElementById("firstName").value.trim();
    const Lname = document.getElementById("lastName").value.trim();
    const Password = document.getElementById("password").value.trim();
    const Email = document.getElementById("email").value.trim();
    const Pno = document.getElementById("mobilenumber").value.trim();
    const Address = document.getElementById("address").value.trim();

    let isValid = true;
    let err = "";
    if (!/^[a-zA-Z]{6,}$/.test(Fname)) {
      isValid = false;
      err += "Need only Alpha Males and 6 Inches long\n";
    }

    if (Password.length < 6) {
      isValid = false;
      err += "Atleast 6 char long chahiye";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      isValid = false;
      err += "Enter a email in valid format";
    }
    if (!/^\d{10}$/.test(Pno)) {
      isValid = false;
      err += "Mobile Number must contain exactly 10 digits.\n";
    }
    if (Lname === "") {
      isValid = false;
      err += "Last Name must not be empty.\n";
    }
    if (Address === "") {
      isValid = false;
      err += "Address must not be empty.\n";
    }
    if (isValid) {
      alert("Registration successful!");
    } else {
      alert("Validation Error:\n" + err);
    }
  });
