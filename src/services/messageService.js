const venomClient = require('../repositories/venomClient');

const sendMessage = async (number, message) => {
  if (!number || !message) {
    throw new Error('Número e mensagem são obrigatórios.');
  }

  // Adiciona o prefixo internacional se necessário
  if (!number.startsWith('55')) {
    number = `55${number}`;
  }
  if (!number.endsWith('@c.us')) {
    number += '@c.us';
  }

  return await venomClient.sendMessage(number, message);
};

module.exports = {
  sendMessage,
};
