const Rev = require('../utils/testing').Reverse

test('reverse of a', () => {
    const Res = Rev('a')
    expect(Res).toBe('a')
})

test('reverse of react', () => {
    const Res = Rev('react')
    expect(Res).toBe('tcaer')
})

test('reverse of saippuakauppias', () => {
    const Res = Rev('saippuakauppias')
    expect(Res).toBe('saippuakauppias')
})