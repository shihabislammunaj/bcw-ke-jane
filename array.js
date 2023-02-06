const country ="Bangladesh";
const age =50;
const isndependent =true;
const student ={id: 121, class:8,name:"abdulla"};
const friends =[12,14,12,15,12,11];
function add(num1,num2){
  return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(friends.includes(12));
console.log(friends.includes(19));
//  if(friends.indexOf(12) !== -1{

//  }
  const newfriend=[40,50,60,70,80,90]
  const allfriend=newfriend.concat(friends);
  console.log(allfriend);
 