// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {
    let H = 50, 
        Q = 25, 
        D = 10, 
        N = 5, 
        P = 1;
    let result = {}

    if (currency < 0) {
        return result = {}
    } else if (currency < 10000) {
        let left = 0;
        result.H = Math.floor(currency / H);
        left = currency % H;
        result.Q = Math.floor(left / Q);
        left = left % Q;
        result.D = Math.floor(left / D);
        left = left % D;
        result.N = Math.floor(left / N);
        left = left % N;
        result.P = Math.floor(left / P);

    } else {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
    }

    for(key in result) {
        if(result[key] == 0) {
            delete result[key];
        }
    }

    return result
}

// function exchange(currency) {
//     let H = 50, 
//         Q = 25, 
//         D = 10, 
//         N = 5, 
//         P = 1;
//     let result = {}

//     if(currency < 10000) {
//         let left = 0;
//         result.H = Math.floor(currency / H);
//         left = currency % H;
//         result.Q = Math.floor(left / Q);
//         left = left % Q;
//         result.D = Math.floor(left / D);
//         left = left % D;
//         result.N = Math.floor(left / N);
//         left = left % N;
//         result.P = Math.floor(left / P);

//     } else {
//         result.error = "You are rich, my friend! We don't have so much coins for exchange";
//     }

//     for(key in result) {
//         if(result[key] == 0) {
//             delete result[key];
//         }
//     }
    
//     console.log()
    
    
//     return result
// };

//console.log(exchange(9999))
