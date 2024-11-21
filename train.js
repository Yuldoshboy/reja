// TASK-A
/*Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/
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

/// LESSON

//// CRUD operatsiyalar

