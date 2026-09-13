function handleFormSubmit() {
  if (formValidation()) {
    alert("ส่งแบบฟอร์มสำเร็จ");
    document.registration.reset();
  }
  return false;
}

function formValidation() {}
