export default function caesar(string, times) {
  if (string.length === 0) {
    throw new Error('Empty string cannot be encoded!');
  }
  const result = [];

  string.split('').forEach(character => {
    if (character.match(/[a-z]/)) {
      const encodedChar = encodeLowercaseChar(character, times);
      result.push(encodedChar);
    } else if (character.match(/[A-Z]/)) {
      const encodedChar = encodeUppercaseChar(character, times);
      result.push(encodedChar);
    } else {
      result.push(character);
    }
  });

  return result.join('');
}

function encodeLowercaseChar(character, times) {
  const charCode = character.charCodeAt() + times;
  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(charCode);
  } else if (charCode > 122) {
    return String.fromCharCode(97 + (charCode - 122) - 1);
  }
}

function encodeUppercaseChar(character, times) {
  const charCode = character.charCodeAt() + times;
  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(charCode);
  } else if (charCode > 90) {
    return String.fromCharCode(65 + (charCode - 90) - 1);
  }
}

module.exports = caesar;
