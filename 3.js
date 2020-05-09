const count_vowels = (str) => {
    const vowel = str.match(/[aiueo]/gi);

    return vowel ? vowel.length : 0;
};

console.log(count_vowels('programmer'));
console.log(count_vowels('hmm..'));