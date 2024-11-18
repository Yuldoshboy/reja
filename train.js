// TASK-A
/*Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/
function task_A(a, b) {
    let count = 0;    
    for (let ele of b) {
        if (ele === a) {
            count++;
        }
    }    
    return count;
}
console.log(task_A("m", "memorable"));


/// LESSON

// Node JS event Loop va callback functions

console.log("Jack MA maslahatlari!");
const list = [
    "Yaxshi talaba bo'ling!", //0 - 20
    "To`g`ri boshliq tanlang va ko`proq xato qiling!", // 20-30
    "O`znigizga ishlashni boshlang!", // 30-40
    "Siz kuchli bo`lgan narsalarni qiling!", //40-50
    "Yoshlarga investitsiya qiling!", //50-60
    "Endi dam oling, baribir foydasi yo`q!", //60-~
];

function maslahatBering(a, callback) {
    if (typeof a !== 'number') callback('Please insert a number!', null);
    else if (a <= 20) callback(null, list[0]);
    else if (20 < a && a <= 30) callback(null, list[1]);
    else if (30 < a && a <= 40) callback(null, list[2]);
    else if (40 < a && a <= 50) callback(null, list[3]);
    else if (50 < a && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 2000);        
    }
};

maslahatBering(80, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

maslahatBering(27, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

maslahatBering(37, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

maslahatBering(47, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

maslahatBering(57, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

console.log('Passed here!');

maslahatBering(67, (err, data) => {
    if(err) console.log('Error', err);
    console.log('Javob:', data);
});

console.log('The result has been displayed after 5 seconds according to the time setted by setTimeout');


// Asynchronous functions

async function maslahatBering(a, callback) {
    if (typeof a !== 'number') throw new Error ("Please insert a number!");
    else if (a <= 20) return list[0];
    else if (20 < a && a <= 30) return list[1];
    else if (30 < a && a <= 40) return list[2];
    else if (40 < a && a <= 50) return list[3];
    else if (50 < a && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        }); 
    };
};

async function maslahatBering(a, callback) {
    if (typeof a !== 'number') throw new Error ("Please insert a number!");
    else if (a <= 20) return list[0];
    else if (20 < a && a <= 30) return list[1];
    else if (30 < a && a <= 40) return list[2];
    else if (40 < a && a <= 50) return list[3];
    else if (50 < a && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(list[5]);
            }, 1000);
        }); 
    };
};
 
// Call via then/catch

console.log("Passed here!");
maslahatBering(34)
.then((data) => {
    console.log("Javob:", data)
})
.catch((err)=> {
    console.log("Error", err);}
);

console.log("Passed here!");


async function run() {
    let javob = await maslahatBering(72);               ///// async ... await dastlabkilari javob olmagancha keyingilari run bulmaydi
    console.log(javob);
    console.log("=====================");
    javob = await maslahatBering(73);
    console.log(javob);
    console.log("=====================");
    javob = await maslahatBering(43);
    console.log(javob);
    console.log("=====================");
    javob = await maslahatBering(53);
    console.log(javob);
    console.log("=====================");
    javob = await maslahatBering(63);
    console.log(javob);
};
run();

