// define sample function to randomly return an item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// define generatePassword function
function generatePassword(options) {
    // define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
    // define dummy data
    // const options = {
    //     length: 12,
    //     lowercase: 'on',
    //     uppercase: 'on',
    //     numbers: 'on',
    //     excludeCharacters: '40'
    //   }

    // create a collection to store things user picked up
    let collection = []

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }

    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }

    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }

    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // remove things users do not need
    if (options.excludeCharacters) {
        collection = collection.filter(
            character => !options.excludeCharacters.includes(character)
        )
    }

    if (collection.length === 0) {
        return 'There is no valid character in your selection.'
    }

    // start generating password
    let password = ''
    for (let i = 0; i < options.length; i++) {
        password += sample(collection)
    }
    // console.log(password)
    // return the generated password
    return password

}

// generatePassword()
export default generatePassword;
// module.exports = generatePassword
// node c