"use strict"

const submit_button = document.querySelector(".form__submit-btn");
submit_button.onclick = (e) => {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("repeatPass").value;

  localStorage.setItem('FirstName', fname);
  localStorage.setItem('LastName', lname);
  localStorage.setItem('Email', email);
  localStorage.setItem('Password', pass);
  localStorage.setItem('Cpassword', cpass);
  if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
    swal("Opps... !", "Please fill in the list completely !", "error");
  }
  else {
    if (pass.length >= 6 && pass.length <= 20) {
      if (pass !== cpass) {
        swal("Opps... !", "Password not matching !", "error");
      }
      else {
        swal("Exelent work!", "You have successfully registered!", "success");
        setTimeout(() => {
          alert("Siz muvafaqqiyatli ro'yxatdan o'tdingiz");
        }, 5000)
      }
    }
    else {
      swal("Please complete the list !");
    }
  }
}