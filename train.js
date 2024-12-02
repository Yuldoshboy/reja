// TASK F
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.
// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

function doubleCharacter(word) {
  let list = [];
  for (let char of word.toLowerCase()) {
      if (list.includes(char)) {
          return true;
      }
      list.push(char);
  }
  return false;
}

const result = doubleCharacter("nimadir");
console.log("Result:", result);


// D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function findString(word1, word2) {
//   let arr = word1.split("").sort();
//   let arr1 = word2.split("").sort();
  
//   console.log(arr);
//   console.log(arr1);
  
//   const result = arr.length === arr1.length && arr1.every((index, ele) => index === arr[ele]);
//   console.log(`Are the letters of "${word1}" and "${word2}" are the same?`, result);
// }

// findString("uzbekistan", "tanuzbkise"); 

// findString("mitgroup", "gropumi");



// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// @MITASK

// class Shop {
//   //state
//   bread;
//   wheat;
//   cola;
//   time;

//   //constructor
//   constructor(bread, wheat, cola, time) {
//     this.bread = bread;
//     this.wheat = wheat;
//     this.cola = cola;
//     this.time == time;
//   }

//   shop_qoldiq() {
//     const now = new Date();
//     console.log(
//       `Available products in the store at ${now.toLocaleString()}: Bread-${this.bread
//       } loave(s); Wheat-${this.wheat} bag(s); cola-${this.cola} bottle(s)`
//     );
//   }

//   shop_sotish(amount) {
//     this.bread -= amount;
//   }

//   shop_qabul(qabul) {
//     this.cola += qabul;
//   }
// }

// const result = new Shop(4, 5, 5);
// result.shop_qoldiq();
// console.log("=========================");
// result.shop_sotish(3);
// result.shop_qoldiq();
// console.log("=========================");
// result.shop_qabul(4);
// result.shop_qoldiq();

//   // B-TASK:

// // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function task_b(string) {
//     let m = 0;
//     const a = string.split("");
//     a.forEach(element => {
//         if (!isNaN(element) && Number(element) >= 0) {
//             m++;
//         }
//     });
//     return m;
// }

// console.log(task_b("dfdfhhsdyhsd4h65gdf4615v56z4v8947zsd1g874dzsd1vg"));