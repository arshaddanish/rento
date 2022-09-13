export let validateMaxFiles = async (e) => {
  if (e.files.length > 5) {
    alert("Only 5 files accepted.");
    return 0;
  }
  return 1;
};
