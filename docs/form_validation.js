function handleFormSubmit() {
  if (formValidation()) {
    alert("ส่งแบบฟอร์มสำเร็จ");
    document.registration.reset();
  }
  return false;
}

function formValidation() {
  let uname = document.registration.uname;
  let upass = document.registration.upass;
  let ufname = document.registration.fname;
  let ulname = document.registration.uname;
  let uemail = document.registration.email;
  let uadd = document.registration.address; /* User address */
  let ucountry = document.registration.country;
  let uzip = document.registration.zip;

  if (username_validation(uname, 5, 12)) {
    if (pass_validation(upass, 6, 16)) {
    }
  }
  return false;
}

/* ก็อปมาจากไฟล์เรียน */

function username_validation(uname, min, max) {
  let uname_len = uname.value.length;
  if (uname_len == 0 || uname_len >= max || uname_len < min) {
    alert(
      "Username should not be empty / length be between " + min + "to " + max,
    );
    uname.focus();
    return false;
  }
  return true;
}

function allLetter(inputtxt) {
  let letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert(inputtxt.labels[0].innerHTML + " must have alphabet characters only");
    inputtxt.focus();
    return false;
  }
}

/*
    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;
    let letterNumber = /^[0-9a-zA-Z]+$/;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
*/

function countryselect(ucountry) {
  if (ucountry.value == "") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

/* สร้างเอง */

function pass_validation(upass, min, max) {
  let upass_len = upass.value.length;
  if (upass_len == 0 || upass_len > max || upass_len < min) {
    alert("Password must be of length 6-16");
    upass.focus();
    return false;
  }
  return true;
}
