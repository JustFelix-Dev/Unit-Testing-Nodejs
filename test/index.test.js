const { add,err } = require('../index')

test('toBe',()=>{
    expect(add(1,2)).toBe(3)
})

test('toEqual',()=>{
    expect(add(1,2)).toEqual(3)
})

test('toBeDefined',()=>{
    expect(add(1,2)).toBeDefined()
})

test('toBeNull',()=>{
    expect(add(1,2)).not.toBeNull()
})

test('toBeGreaterThan',()=>{
    expect(add(1,2)).toBeGreaterThan(1)
})

test('toBeLessThan',()=>{
    expect(add(1,2)).toBeLessThan(4)
})

test('toMatch',()=>{
    expect(add("Hello","World")).toMatch(/Hello/)
})

test("toThrow",()=>{
    expect(() => err()).toThrow('This is an error');
})

describe('I am a group',()=>{
    test("toThrow",()=>{
        expect(() => err()).toThrow('This is an error');
    })
    test("toThrow",()=>{
        expect(() => err()).toThrow('This is an error');
    })
})