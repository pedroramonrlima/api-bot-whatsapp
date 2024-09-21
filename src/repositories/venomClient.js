const venom = require('venom-bot');

let client;

const initializeClient = async () => {
  if (!client) {
    client = await venom.create(
      'whatsapp-session',  // Nome da sessão
      (base64Qr, asciiQR, attempts) => {
        // Aqui você pode exibir o QR code no terminal
        console.log('QR Code para ser escaneado:');
        console.log(asciiQR);
      },
      undefined,
      { 
        folderNameToken: 'tokens',  // Diretório para armazenar tokens de sessão
        mkdirFolderToken: './whatsapp-sessions'  // Diretório onde a sessão será criada
      }
    );
  }
  return client;
};

const sendMessage = async (number, message) => {
  const client = await initializeClient();
  return client.sendText(number, message);
};

module.exports = {
  sendMessage,
};
