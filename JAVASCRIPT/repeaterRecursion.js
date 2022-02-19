
let string = "";
function repeater(char) {
    if(string.length === 5) {
        return string;
    }
    string += char;

    return repeater(char);
}



let a = repeater('g');
console.log(a);
