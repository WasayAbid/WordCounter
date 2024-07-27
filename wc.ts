class TextAnalyzer {
    static getWordCount(content: string): number {
        // Remove excess whitespace from the start and end, and split the string by whitespace
        const terms = content.trim().split(/\s+/);
        // Filter out empty entries and return the number of remaining terms
        return terms.filter(term => term.length > 0).length;
    }
}

// Example usage:
const paragraph1 = "Hello, this is a simple word counter.";
const paragraph2 = "This is a test.";
const paragraph3 = "   Leading and trailing spaces   should be ignored.   ";

console.log(`The paragraph: "${paragraph1}" contains ${TextAnalyzer.getWordCount(paragraph1)} words.`);
console.log(`The paragraph: "${paragraph2}" contains ${TextAnalyzer.getWordCount(paragraph2)} words.`);
console.log(`The paragraph: "${paragraph3}" contains ${TextAnalyzer.getWordCount(paragraph3)} words.`);