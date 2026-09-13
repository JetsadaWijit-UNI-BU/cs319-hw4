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
}
