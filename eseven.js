// // console.log(4/2);
// // console.log(100/2);
// // console.log(50/2);
// // console.log(25/2);
// // console.log(40/2);
// // console.log(1200/2);
// console.log(7/2);
// console.log(11/2);
// console.log(83/2);
// console.log(5/2);
// console.log(9/2);
// console.log(17/2);

// console.log(4%2);
// console.log(100%2);
// console.log(50%2);
// console.log(28%2);
// console.log(40%2);
// console.log(1200 %2);
// console.log(7%2);
// console.log(11%2);
// console.log(83%2);
// console.log(5%2);
// console.log(9%2);
// console.log(17%2);
function isEven(number){
  const remainider =number %2;
  // console.log(remainider);
  if ( remainider ===0){
    // console.log('number is Even')
    return true;

  }
  else{
    // console.log('nuber is bese');
    return false;
  }
}

  const myNumberisEven =isEven(303);
  console.log(myNumberisEven);
 const herNumberisEven = isEven(1200);
 console.log(herNumberisEven);