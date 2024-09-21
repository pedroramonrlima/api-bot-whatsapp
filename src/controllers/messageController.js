const messageService = require('../services/messageService');

const sendMessage = async (req, res) => {
  try {
    const { number, message } = req.body;
    const response = await messageService.sendMessage(number, message);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  sendMessage,
};
