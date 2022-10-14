const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  reverseOrNot = "no";
  constructor(boolean) {
    if (typeof boolean === "boolean") {
      this.reverseOrNot = "yes";
    }
  }

  encrypt(text, codeword) {
    if (typeof text !== "string" || typeof codeword !== "string")
      throw new Error("Incorrect arguments!");
    let symbolsToReturn = {};
    text.split("").forEach((char, index) => {
      if (this.alphabet.indexOf(char.toUpperCase()) === -1)
        symbolsToReturn[index] = char;
    });
    let textToEncode = text
      .split("")
      .filter((char) => this.alphabet.indexOf(char.toUpperCase()) !== -1)
      .join("");
    let encryptionWord = codeword;
    while (textToEncode.length > encryptionWord.length) {
      encryptionWord += encryptionWord;
    }
    encryptionWord = encryptionWord.split("").splice(0, textToEncode.length);
    let encoded = textToEncode.split("").map((char, index) => {
      let indexOfChar = this.alphabet.indexOf(char.toUpperCase());
      let indexOfEncryptingChar = this.alphabet.indexOf(
        encryptionWord[index].toUpperCase()
      );

      return this.alphabet[
        indexOfChar + indexOfEncryptingChar > 25
          ? indexOfChar + indexOfEncryptingChar - 26
          : indexOfChar + indexOfEncryptingChar
      ];
    });
    Object.entries(symbolsToReturn).forEach((comb) => {
      encoded.splice(+comb[0], 0, comb[1]);
    });
    return this.reverseOrNot === "yes"
      ? encoded.reverse().join("")
      : encoded.join("");
  }

  decrypt(text, codeword) {
    if (typeof text !== "string" || typeof codeword !== "string")
      throw new Error("Incorrect arguments!");
    let symbolsToReturn = {};
    text.split("").forEach((char, index) => {
      if (this.alphabet.indexOf(char.toUpperCase()) === -1)
        symbolsToReturn[index] = char;
    });
    let textToDecode = text
      .split("")
      .filter((char) => this.alphabet.indexOf(char.toUpperCase()) !== -1)
      .join("");
    let encryptionWord = codeword;
    while (textToDecode.length > encryptionWord.length) {
      encryptionWord += encryptionWord;
    }
    encryptionWord = encryptionWord.split("").splice(0, textToDecode.length);
    let decoded = textToDecode.split("").map((char, index) => {
      let indexOfEncryptingChar = this.alphabet.indexOf(
        encryptionWord[index].toUpperCase()
      );
      let indexOfChar = this.alphabet.indexOf(char.toUpperCase());
      return this.alphabet[
        indexOfChar - indexOfEncryptingChar < 0
          ? 26 - Math.abs(indexOfChar - indexOfEncryptingChar)
          : indexOfChar - indexOfEncryptingChar
      ];
    });
    Object.entries(symbolsToReturn).forEach((comb) => {
      decoded.splice(+comb[0], 0, comb[1]);
    });

    return this.reverseOrNot === "yes"
      ? decoded.reverse().join("")
      : decoded.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
