function isyear (year){
  const remainider =year % 4;
 if(remainider ===0){
  // console.log('Your Year is Leap Year');
  return true;
 }
 else{
  // console.log('Your year is not a leap year');
  return false;
 }
}
const ismyyearisyear =isyear(1933); 
 console.log('my year:',ismyyearisyear)
const isheryearisyear=isyear(1952);
console.log('her year:',isheryearisyear)