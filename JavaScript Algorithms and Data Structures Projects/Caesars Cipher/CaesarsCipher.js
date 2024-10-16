// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  const decodeChar = (char) => {
    if (/[A-Z]/.test(char)) {
      const charCode = char.charCodeAt(0);
      const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      return String.fromCharCode(decodedCharCode);
    }
    return char;
  };
  return str.split("").map(decodeChar).join("");
}

console.log(rot13("SERR PBQR PNZC"));
