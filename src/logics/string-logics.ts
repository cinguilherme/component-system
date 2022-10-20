// returns true if string is anagram of another string
export function isAnagram(strOne: string, strTwo: string): boolean {

    // if the length of the strings are not equal, they are not anagrams
    if (strOne.length !== strTwo.length) {
        return false;
    }

    // sort the strings
    const sortedStrOne = strOne.split('').sort().join('');
    const sortedStrTwo = strTwo.split('').sort().join('');

    // if the sorted strings are equal, they are anagrams
    if (sortedStrOne === sortedStrTwo) {
        return true;
    }

    // if the sorted strings are not equal, they are not anagrams
    return false;

}