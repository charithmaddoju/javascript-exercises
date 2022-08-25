const reverseString = function(word) {
    let answer = '';
    for(let i = word.length; i>=0 ; i--){
        answer += word.charAt(i);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
