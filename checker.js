const code = "4_DIGIT_CODE"
const word = "BASE_WORD"

function extractLetters(code, word) {
    const positions = code.split('-').map(num => parseInt(num) - 1);
    let result = '';
    
    for (let pos of positions) {
        if (pos >= 0 && pos < word.length) {
            result += word[pos];
        } else {
            return "Invalid position in code";
        }
    }
    
    return result;
}

// Example usage
console.log(extractLetters(code, word)); // Output: "leap"
const code = "4_DIGIT_CODE"
const word = "BASE_WORD"

function extractLetters(code, word) {
    const positions = code.split('-').map(num => parseInt(num) - 1);
    let result = '';
    
    for (let pos of positions) {
        if (pos >= 0 && pos < word.length) {
            result += word[pos];
        } else {
            return "Invalid position in code";
        }
    }
    
    return result;
}

// Example usage
console.log(extractLetters(code, word)); // Output: "leap"
