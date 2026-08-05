const {
  generateImage: generateImageFromClipdrop,
} = require("../config/clipdrop");

const generate = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const image = await generateImageFromClipdrop(prompt);

    res.set("Content-Type", "image/png");
    res.send(image);

  } catch (error) {

    console.error(error.response?.data?.toString() || error.message);

    res.status(error.response?.status || 500).json({
      success: false,
      message: error.response?.data?.toString() || error.message,
    });

  }
};

module.exports = {
  generate,
};