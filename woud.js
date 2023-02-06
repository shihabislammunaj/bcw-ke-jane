function woodCalculatoo(chaioQuaontity, tablaQunantity, bedQuantity){
  const perChaiowood=3;
  const perTablewood =10;
  const perBedwood =50;
  
 const tableWood=tablaQunantity* perTablewood; 
const bedWood= bedQuantity* perBedwood;  
const  chairwood =chaioQuaontity *perChaiowood;


// console.log(chaioQuaontity,tablaQunantity,bedQuantity);
const totalwood =chairwood + tableWood + bedWood;
return totalwood;

 
}
const totalwood=woodCalculatoo(2,2,5);
console.log('total wood required',totalwood);
 