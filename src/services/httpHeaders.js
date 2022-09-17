export let httpHeaders = (type) => {
  let token;
  if (type === "user") {
    token = localStorage.getItem("jwt_token");
  }
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
