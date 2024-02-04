const reverseString = function(inputStr) {
    if(inputStr.length==0){
        return ''
    }
    
    return inputStr.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
