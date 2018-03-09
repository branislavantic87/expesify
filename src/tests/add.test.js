const add = (a, b) => a + b ;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`


test('should be bane', () => {
    const name = generateGreeting('Bane')

    expect(name).toBe('Hello Bane')
}); 


test('should add two numbers', () => {
    const result = add(5, 3);

    expect(result).toBe(8)
});

test('should generate greeting for an', () => {
    const result = generateGreeting()

    expect(result).toBe("Hello Anonymous")
})