/*
let js = "Amazing";


 // "Jonas"  is a Value
 console.log("Jonas");

 // 23 is a Value
 console.log(23);

 // Eine Variable let definiert
 let firstName = "Jonas";
 console.log(firstName);

  // Ein Array in einer Variable let definiert
  let Names = ["Krischan", "Steven", "Amir", "Tim"];
  console.log(Names[0]);
  console.log(Names[1]);
  console.log(Names[2]);
  console.log(Names[3]);
  console.log(Names);
*/
/*
  const massMark = 78;
  const heightMark = 1.69;
  const massJohn = 92;
  const heightJohn = 1.95;

  const massMark2 = 95;
  const heightMark2 = 1.88;
  const massJohn2 = 85;
  const heightJohn2 = 1.76;

  const bmiMark = massMark / heightMark ** 2;
  const bmiJohn = massJohn / heightJohn ** 2;

  const bmiMark2 = massMark2 / heightMark2 ** 2;
  const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

 

  const markHigherBmi = bmiMark > bmiJohn;
  const markHigherBmi2 = bmiMark2 > bmiJohn2;

  console.log(bmiMark, bmiJohn, markHigherBmi);
  console.log(bmiMark2, bmiJohn2, markHigherBmi2);

  if(bmiMark > bmiJohn){
    console.log(`Mark´s BMI is ${bmiMark} higher, John´s BMI is ${bmiJohn}`)  
  }else{
    console.log(`John´s BMI is ${bmiJohn2} higher, Mark´s BMI is ${bmiMark2}`) 
  }
  */
  /*
const firstName = "Krischan";
const job = "Supporter";
const birthYear = 1985;
const year = 2023;

const Krischan = "Ich " + firstName + " bin ein " + (year - birthYear) + " Jahre alter " + job + "!";
console.log(Krischan);
*/
/*
const age = 12;

if(age >= 18){
    console.log("Du bist alt genug :)");
}else{
    const yearsLeft = 18 - age;
    console.log(`Du göre bist ${yearsLeft} zu Jung!`);
}

const age = 15;

if(age >= 18){
    console.log("Sie haben grünes Licht");
}else{
    const yearsLeft = 18 - age;
    console.log(`Ihnen fehlen noch ${yearsLeft} Jahre`);
}

const birthYear = 1985;

let century;
 
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/






averageDataDolphinsOne = (96 + 108 + 98) / 3;
averageDataKoalasOne = (88 + 91 + 110) / 3;

averageDataDolphinsTwo = (97 + 112 + 101) / 3;
averageDataKoalasTwo = (109 + 95 + 123) / 3;

averageDataDolphinsThr = (97 + 112 + 101) / 3;
averageDataKoalasThr = (109 + 95 + 106) / 3;

console.log(averageDataDolphinsOne, averageDataKoalasOne);
console.log(averageDataDolphinsTwo, averageDataKoalasTwo);
console.log(averageDataDolphinsThr, averageDataKoalasThr);

if(averageDataDolphinsOne > averageDataKoalasOne){
    console.log("Dolphins Wins");
}else{
    console.log("Koalas Wins");
}
if(averageDataDolphinsTwo > averageDataKoalasTwo){
    console.log("Dolphins Wins");
}else{
    console.log("Koalas Wins");
}
if(averageDataDolphinsThr > averageDataKoalasThr){
    console.log("Dolphins Wins");
}else{
    console.log("Koalas Wins");
}