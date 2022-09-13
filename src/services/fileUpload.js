import apis from "../apis";

export let fileUpload = async (file) => {
  let formData = new FormData();
  formData.append("img", file);
  let { data } = await apis.post("upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
