// Array1n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
// 📥 Input: getLevel3(5)
// 📤 Output: [3, 9, 27, 81, 243]

function getLevel3(n){
    let arr=[];
    for (let i=1;i<=n;i++){
        arr.push(3**i);
    }return arr;
}console.log(getLevel3(5));

// Array2.n natural soni va X, Y butun sonlari berilgan (n > 2).a[0] = X, a[1] = Y.Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
// 📥 Input: n = 6, X = 1, Y = 2
//  📤 Output: [1, 2, 3, 5, 8, 13];

let X=1;
let Y=2;
let arr=[X,Y];
let n =6;
for (let i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2]);
}console.log(arr);

// Array3.n ta elementdan tashkil topgan massiv berilgan.Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output: [9, 8, 5]

arr=[4, 5, 7, 8, 6, 9];
let result=[];
for (let i=0;i<arr.length;i++){
    if(i%2==1){
        result.push(arr[i]);
    }
}console.log(result.reverse());

// Array4.n ta elementdan tashkil topgan massiv berilgan.Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// 📥 Input: [10, 5, 3, 8, 1, 6, 9]
//  📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)

arr=[10, 5, 3, 8, 1, 6, 9];
let min=arr[1];
let max=arr[1];
let maxIndex=0;
let minIndex=0;
for (let i=0;i<arr.length;i++){
    if (min>arr[i]){
        min=arr[i];
        minIndex=i;
    } else if(max<arr[i]){
        max=arr[i];
        maxIndex=i;
    }
}console.log(maxIndex+minIndex);

// Array5.n ta elementdan tashkil topgan massiv berilgan.Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output:
//  Juft indekslilar: [4, 7, 6]
//  Toq indekslilar: [5, 8, 9]

arr=[4, 5, 7, 8, 6, 9];

let evenIndex=arr.filter((_,i)=>i%2==0);
console.log(evenIndex);
let oddIndex=arr.filter((_,i)=>i%2==1);
console.log(oddIndex);

// Array6.n ta elementdan tashkil topgan massiv berilgan.Massivda eng ko‘p uchragan element va uning soni topilsin.
// 📥 Input: [2, 3, 2, 5, 3, 3, 7, 2, 3]
//  📤 Output: Eng ko‘p uchragan element: 3, Uchrash soni: 4

arr=[2, 3, 2, 5, 3, 3, 7, 2, 3];
countOf=0;
mostCounter=0;
mostCounterElement=0;
    for (let i=0;i<arr.length;i++){
        countOf=0;
        for (let j=0;j<arr.length;j++){
            if (arr[i]==arr[j]){
                countOf++;
            }
        }
        if (mostCounter<countOf){
            mostCounter=countOf;
            mostCounterElement=arr[i];
        }
    }console.log(`${mostCounterElement} soni ${mostCounter} marotaba chiqarildi`);
// Array7.n ta elementdan tashkil topgan massiv va R butun soni berilgan.Massiv elementlari orasidan R soniga eng uzoq son topilsin.
// 📥 Input: arr = [10, 15, 2, 30, 18], R = 12
//  📤 Output: 30 (12 ga eng uzoq son 30 (farqi 18));

arr=[10, 15, 2, 16, 13];
let R=7;
farElement=Math.abs(R-arr[0]);
farElementIndex=0;
for (let i=1;i<arr.length;i++){
    if (Math.abs(R-arr[i])>farElement){
        farElement=Math.abs(R-arr[i]);
        farElementIndex=arr[i];
    }
}console.log(farElementIndex);

// Array8.n ta elementdan tashkil topgan massiv berilgan.
// Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// 📥 Input: [7, 3, 9, 1, 8, 2, 4]
//  📤 Output:
//  Birinchi yarmi katta: [7, 9, 8]
//  Ikkinchi yarmi kichik: [3, 1, 2, 4]

arr=[7, 3, 9, 1, 8, 2, 4];
bigFromN=arr.filter(x=>x>=arr.length);
smallFromN=arr.filter(x=>x<arr.length);
console.log(bigFromN,smallFromN);

// Array9.n ta elementdan tashkil topgan massiv berilgan.Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// 📥 Input: [1, 2, 3, 4]
//  📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]

arr=[1, 2, 3, 4];
let len=arr.length;
let OneArr=[];
let new_Arr=[];
for (let i=0;i<len;i++){
    OneArr=[];
    for (let j=0;j<2;j++){
        OneArr.push(arr[i]);
    }
    new_Arr.push(OneArr);
}console.log(new_Arr.flat());
// Array10.n ta elementdan tashkil topgan massiv berilgan.Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// 📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
//  📤 Output: [15, 9, 8, 5]

arr=[4, 5, 7, 8, 6, 9, 10, 15];
let Resultt=[];
if (arr.length%2==0){
    for (let i=1;i<arr.length;i+=2){
        Resultt.push(arr[i]);
    }
}
else if (arr.length%2==1){
    for (let i=0;i<arr.length;i+=2){
        Resultt.push(arr[i]);
    }
}
console.log(Resultt.reverse());