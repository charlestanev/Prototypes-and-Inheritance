// Extend the build-in String object with additional functionality. Implement the following functions:
// •	ensureStart(str) – the current string doesn't start with str, returns a new string with str appended  to the begining, otherwise returns the original string
// •	ensureEnd(str) - the current string doesn't end with str, returns a new string with str appended  to the begining, otherwise returns the original string
// •	isEmpty() - return true if the string is empty, false otherwise
// •	truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
// •	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of it’s prototype. See the examples for more info.
// Note strings are immutable, so your functions will return new strings as a result.

(function() {
    String.prototype.ensureStart = function(str)
})

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');