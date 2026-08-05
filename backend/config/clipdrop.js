const axios = require("axios");
const FormData = require("form-data");

const clipdrop = axios.create({
  baseURL: "https://clipdrop-api.co",
  headers: {
    "x-api-key": process.env.CLIPDROP_API_KEY,
  },
  responseType: "arraybuffer",
});

const generateImage = async (prompt) => {
  const form = new FormData();

  form.append("prompt", prompt);

  const response = await clipdrop.post(
    "/text-to-image/v1",
    form,
    {
      headers: {
        ...form.getHeaders(),
      },
    }
  );

  return response.data;
};

module.exports = {
  generateImage,
};