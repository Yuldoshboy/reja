// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function task_b(string) {
    let m = 0;
    const a = string.split("");
    a.forEach(element => {
        if (!isNaN(element) && Number(element) >= 0) {
            m++;
        }
    });
    return m;
}

console.log(task_b("dfdfhhsdyhsd4h65gdf4615v56z4v8947zsd1g874dzsd1vg")); 