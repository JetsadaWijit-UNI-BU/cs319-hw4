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

  if (username_validation(uname, 5, 12) && allLetter(uname)) {
    if (pass_validation(upass, 6, 16)) {
      if (allLetter(ufname)) {
        /* Check first name */
        if (allLetter(ulname)) {
          /* Check last name */
          if (email_validation(uemail)) {
            if (address_validation(uadd)) {
              if (countryselect(ucountry)) {
                if (zip_validation(uzip)) {
                }
              }
            }
          }
        }
      }
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

function email_validation(uemail) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

/* เป็นแบบ optional */
/* ถ้าใส่ต้องไม่ต่ำกว่า 10 ตัวอักษร */
function address_validation(uadd) {
  let uadd_len = uadd.value.length;
  if (uadd_len === 0) {
    return true;
  } else if (uadd_len < 10) {
    alert(
      "Address is optional, but if provided, it should be at least 10 characters.",
    );
    uadd.focus();
    return false;
  }
}

/* function country_validation(ucountry) {
  if (ucountry.value == "") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
} */

function zip_validation(uzip) {
  let numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP Code must have numeric characters only");
    uzip.focus();
    return false;
  }
}
