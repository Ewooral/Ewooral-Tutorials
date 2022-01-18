function findElement(element, arrayStack) {
    for(let newArray of arrayStack) {
        if(newArray.includes(element)) {
            return true;
        }
    }
    return false;
    
}

findElement("ruby", ["ruby", "javascript", "python", "ruby"]);
