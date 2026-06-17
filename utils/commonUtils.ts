import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey: string;

    constructor() {
        //this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if(process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error("Please provide SECRET_KEY environment variable for encryption.");
        }
    }
    
    /**
     * 
     * @param data      *
     * @returns 
     */

    public encryptData(data: string) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log("Encrypted Data: ", encryptedData);
        return encryptedData;
    }

    public decryptData(encData: string) {
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        console.log("Decrypted Data: ", decryptedData);
        return decryptedData;
    }

}