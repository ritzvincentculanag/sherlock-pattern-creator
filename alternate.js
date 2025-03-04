// Base word for the letter position lookup (with spaces to ignore)
const baseWord = "base_word";
const inputWord = "input_word";  // Input word with spaces to ignore

// Function to create a position map for the base word, ignoring spaces
function createLetterPositionMap(baseWord) {
  const positionMap = {};
  
  // Remove spaces from the base word
  baseWord = baseWord.replace(/\s+/g, '');

  // Iterate over the base word and map each letter to its position (storing all positions for duplicates)
  for (let i = 0; i < baseWord.length; i++) {
    const letter = baseWord[i];
    // Add all positions for each letter in an array
    if (!positionMap[letter]) {
      positionMap[letter] = [];
    }
    positionMap[letter].push(i + 1);  // Store 1-based positions
  }
  return positionMap;
}

// Function to convert an input word into its numerical code, ignoring spaces
function convertWordToCode(inputWord, baseWord) {
  const positionMap = createLetterPositionMap(baseWord);
  
  // Remove all spaces from the input word before processing it
  inputWord = inputWord.replace(/\s+/g, '');

  const code = [];
  const usedPositions = {};  // Track used positions for duplicates in input word

  // For each letter in the input word, get its position from the base word
  for (const letter of inputWord) {
    if (positionMap[letter]) {
      let availablePositions = positionMap[letter];

      let positionToUse = null;

      // If there are no duplicates, just reuse the first available position
      if (availablePositions.length === 1) {
        positionToUse = availablePositions[0];
      } else {
        // Otherwise, handle duplicates normally
        let count = (usedPositions[letter] || 0);
        positionToUse = availablePositions[count % availablePositions.length];  // Loop back if there are more instances
        usedPositions[letter] = count + 1;
      }

      // Add the position to the code
      code.push(positionToUse);
    }
  }

  return code.join('-');  // Return the code as a string with hyphens
}

// Example usage
const code = convertWordToCode(inputWord, baseWord);
console.log(code);  // Output the numerical code
