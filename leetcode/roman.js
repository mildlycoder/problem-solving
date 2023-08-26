/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let val = 0;
    for (let i = 0; i <s.length; i++) {
        const nextDigit = s[i + 1]; 
        const curDigit = s[i];
        
        if (prevDigit !== undefined && dict[nextDigit] > dict[curDigit]) {
            val -= dict[curDigit];
        } else{
            val += dict[curDigit];
        }
    }
    return val;
};

console.log(romanToInt("IX")); 
