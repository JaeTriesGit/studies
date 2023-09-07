const Average = require('../utils/testing').Average

describe('Average', () => {
    test('of one value is the value itself', () => {
        expect(Average([1])).toBe(1)
    })

    test('of many is calculated right', () => {
        expect(Average([1,2,3,4,5,6])).toBe(3.5)
    })

    test('of empty array is zero', () => {
        expect(Average([])).toBe(0)
    })
})