function ceaser (string) {
    const plain = ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const workingString = string.split('');
    //on workingstring call map and pass char and index
    //then for every char find the index of the same char in plain
    //replace char with char in plain with found index -1
    //if char is a replace with z;
    //if no matches return char;
    const ciphered = workingString.map((char, index) => {
        const foundIndex = plain.indexOf(char);
        if (char.match(/[A-Za-z]/)) {
        const newChar = plain[foundIndex - 1];
        return newChar;
        } else {
            return char;
        }
    })
    return ciphered.join('');
}

module.exports = ceaser;