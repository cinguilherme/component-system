import { isAnagram } from '../../../src/logics/string-logics'

describe('string-logics-kata', () => {
    describe('isAnagram function', () => {
        it('should return true if the strings are anagrams', () => {
            expect(isAnagram('listen', 'silent')).toBeTruthy()
        })

        it('should return false if the strings are not anagrams', () => {
            expect(isAnagram('listen', 'silen')).toBeFalsy()
        })
    })
})
