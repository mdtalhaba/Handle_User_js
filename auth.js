const handleRegistration = (event) => {
  event.preventDefault();
  const email = getValue("email");
  const username = getValue("username");
  const firstname = getValue("first_name");
  const lastname = getValue("last_name");
  const password = getValue("password");
  const confirm_password = getValue("confirm_password");
  const city = getValue("city");
  const street = getValue("street");
  const number = getValue("number");
  const zipcode = getValue("zipcode");
  const lat = getValue("lat");
  const long = getValue("long");
  const phone = getValue("phone");
  const info = {
    email,
    username,
    password,
    name :{
      firstname,
      lastname,
    },
    address :{
      city,
      street,
      number,
      zipcode,
      geolocation :{
        lat,
        long,
      }
    },
    phone,
  };

  if (password === confirm_password) {
    document.getElementById("error").innerText = "";
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      console.log(info);

      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      document.getElementById("error").innerText =
        "Password must contain at least eight characters, at least one letter, one number and one special character";
    }
  } else {
    document.getElementById("error").innerText =
      "Password and Confirm Password do not match";
  }
};

const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

const handleLogin = (event) => {
  event.preventDefault();
  const username = getValue("login-user");
  const password = getValue("login-pass");
  if (username, password) {
    fetch("https://fakestoreapi.com/auth/login", 
    {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          window.location.href = "index.html";
        }
      });
  }
};
