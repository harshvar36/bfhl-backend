const processData = (dataArray) => {
    const numbers = [];
    const alphabets = [];
    const specialChars = [];
    
    // Categorize data
    dataArray.forEach(item => {
        if (typeof item === 'string' && item.length === 1) {
            if (/[a-zA-Z]/.test(item)) {
                alphabets.push(item);
            } else if (/[0-9]/.test(item)) {
                numbers.push(parseInt(item));
            } else {
                specialChars.push(item);
            }
        } else if (typeof item === 'number') {
            numbers.push(item);
        } else if (typeof item === 'string') {
            // Handle multi-character strings
            item.split('').forEach(char => {
                if (/[a-zA-Z]/.test(char)) {
                    alphabets.push(char);
                } else if (/[0-9]/.test(char)) {
                    numbers.push(parseInt(char));
                } else {
                    specialChars.push(char);
                }
            });
        }
    });

    // Process numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0).map(num => num.toString());
    const oddNumbers = numbers.filter(num => num % 2 === 1).map(num => num.toString());
    const sum = numbers.reduce((acc, num) => acc + num, 0).toString();

    // Process alphabets
    const uppercaseAlphabets = alphabets.map(char => char.toUpperCase());
    
    // Create concat_string (reverse order with alternating caps)
    const reversedAlphabets = [...alphabets].reverse();
    const alternatingCaps = reversedAlphabets.map((char, index) => 
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    );
    const concatString = alternatingCaps.join('');

    return {
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets: uppercaseAlphabets,
        special_characters: specialChars,
        sum: sum,
        concat_string: concatString
    };
};

module.exports = { processData };