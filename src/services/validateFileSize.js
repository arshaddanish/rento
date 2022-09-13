export let validateFileSize = (file) => {
  const fileSize = file.size / 1024 / 1024; // in MiB
  if (fileSize > 1) {
    alert("File size exceeds 1MB");
    // $(file).val(''); //for clearing with Jquery
  } else {
    // Proceed further
  }
};
