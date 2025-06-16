import crypto from 'crypto';

const SALT = "SALT1234";
const KEY = crypto.createHash('sha256').update('internsNeverGuess').digest();

function encryptField (field) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', KEY, iv);
    const encypted = Buffer.concat([
        cipher.update(SALT + field, "utf8"),
        cipher.final()
    ]).toString('base64');
    return {
        data: encypted,
        iv: iv.toString('base64')
    };
}

export default encryptField;