export let httpHeaders = (type) => {
  let token;
  if (type === "user") {
    token = localStorage.getItem("jwt_token");
  } else if (type === "admin") {
    token = localStorage.getItem("jwt_admin");
  }
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
