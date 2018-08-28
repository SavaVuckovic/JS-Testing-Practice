function caesar(string, times) {
  const result = [];

  string.split('').forEach(character => {
    if (character.match(/[a-z]/)) {
      const charCode = character.charCodeAt() + times;
      if (charCode >= 97 && charCode <= 122) {
        result.push(String.fromCharCode(charCode));
      } else if (charCode > 122) {
        result.push(String.fromCharCode(97 + (charCode - 122) - 1));
      }
    } else if (character.match(/[A-Z]/)) {
      const charCode = character.charCodeAt() + times;
      if (charCode >= 65 && charCode <= 90) {
        result.push(String.fromCharCode(charCode));
      } else if (charCode > 90) {
        result.push(String.fromCharCode(65 + (charCode - 90) - 1));
      }
    } else {
      result.push(character);
    }
  });

  return result.join('');
}

module.exports = caesar;
