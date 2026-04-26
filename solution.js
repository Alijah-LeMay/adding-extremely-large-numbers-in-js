function compareStringNumbers(num1, num2) {
    let result =0
    if(num1.length > num2.length) {
        result =1
        return result
    }
    
    if(num2.length > num1.length) {
        result =-1
        return result
    }
    
    if(num1.length == num2.length) {
        for(let i=0;i<num1.length; i++) {
            let num1Digit = num1[i]
            let num2Digit=num2[i]
            if(num1Digit > num2Digit) {
                    result =1
                    return result
                } 
                if(num1Digit < num2Digit) {
                    result =-1
                    return result
                } 
            }
    }
    return result;
}

module.exports = { compareStringNumbers };
