function capitalize (string) {
    let newString = string.split('');
    newString[0] = newString[0].toUpperCase();
   return newString.join('');
}

module.exports = capitalize;