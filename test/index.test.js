const { add } = require('../index')

test('toBe',()=>{
    expect(add(1,2)).toBe(3)
})

test('toEqual',()=>{
    expect(add(1,2)).toEqual(3)
})

test('toBeDefined',()=>{
    expect(add(1,2)).toBeDefined()
})