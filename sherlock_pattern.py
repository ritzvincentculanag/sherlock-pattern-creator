mystery_word: str = "mystery_word_here"
covered: str = mystery_word.replace(" ", "")

def indexer(word: str) -> str:
    indexes: list = []
    for i, v in enumerate(word):
        index = covered.index(v) + 1
        index = str(index)
        indexes.append(index)
        
    return "-".join(indexes)
    
anagram: str = "anagram_here"

print(indexer(anagram))
