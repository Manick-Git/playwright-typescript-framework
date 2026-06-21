import CryptoJS from 'crypto-js';

const [, , action, text, keyArg] = process.argv;
const key = keyArg || process.env.SECRET_KEY;

function usage() {
  console.log('Usage: node scripts/encrypt.js encrypt|decrypt "text" [SECRET_KEY]');
  console.log('If SECRET_KEY is not provided as the third arg, set environment variable SECRET_KEY.');
}

if (!action || !text) {
  usage();
  process.exit(1);
}

if (!key) {
  console.error('SECRET_KEY missing. Provide as third arg or set env SECRET_KEY');
  process.exit(2);
}

try {
  if (action === 'encrypt') {
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    console.log(encrypted);
  } else if (action === 'decrypt') {
    const decrypted = CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    console.log(decrypted);
  } else {
    usage();
    process.exit(1);
  }
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(3);
}
