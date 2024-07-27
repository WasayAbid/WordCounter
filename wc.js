var TextAnalyzer = /** @class */ (function () {
    function TextAnalyzer() {
    }
    TextAnalyzer.getWordCount = function (content) {
        // Remove excess whitespace from the start and end, and split the string by whitespace
        var terms = content.trim().split(/\s+/);
        // Filter out empty entries and return the number of remaining terms
        return terms.filter(function (term) { return term.length > 0; }).length;
    };
    return TextAnalyzer;
}());
// Example usage:
var paragraph1 = "Hello, this is a simple word counter.";
var paragraph2 = "This is a test.";
var paragraph3 = "   Leading and trailing spaces   should be ignored.   ";
console.log("The paragraph: \"".concat(paragraph1, "\" contains ").concat(TextAnalyzer.getWordCount(paragraph1), " words."));
console.log("The paragraph: \"".concat(paragraph2, "\" contains ").concat(TextAnalyzer.getWordCount(paragraph2), " words."));
console.log("The paragraph: \"".concat(paragraph3, "\" contains ").concat(TextAnalyzer.getWordCount(paragraph3), " words."));
