// const myInches =12;
// const myFeet =myInches /12;
// console.log(myFeet);
// // fg
// const dadainches =144;
// const dadaFeet = dadainches /12;
// console.log('data feet', dadaFeet);

// const dadiInches =60;
// const dadiFeet = dadiInches/12;
// console.log('dadi Feet', dadiFeet);

function inchToFeet(inches){
  const feet =inches /12;
  return feet;
}

const dadainches =144;
const dadaFeet= inchToFeet(dadainches);
console.log(dadaFeet)


const nanaInches =168;
const nanaFeet =inchToFeet(nanaInches);
console.log('nana feet', nanaFeet)