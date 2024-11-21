// function task_A(a) {
//     let n = 0;    
//     for (let ele of a) {
//         if (ele >= 0) {
//             n++;
//         };
//     };    
//     return n;    
// };

function task_b(string) {
    let m = 0;
    const a = string.split("");
    a.forEach(raqamlar => {
        if(Number(raqamlar)>=0) {
            m++;
        };
    });
    return m;
};

const result = task_b("gdghd99u7hn");
console.log("Result:", result);

// function maslahatBering(a, callback) {
//     if (typeof a == 'number') callback('Please insert a number!', null);
//     else if ()
//     else if (a <= 20) callback(null, list[0]);
//     else if (20 < a && a <= 30) callback(null, list[1]);
//     else if (30 < a && a <= 40) callback(null, list[2]);
//     else if (40 < a && a <= 50) callback(null, list[3]);
//     else if (50 < a && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 2000);        
//     }
// };

// maslahatBering(80, (err, data) => {
//     if(err) console.log('Error', err);
//     console.log('Javob:', data);
// });