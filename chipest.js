const camera=[
  {name:'samsung',camera:12,storage:
   '32gb',price:36000,color:"silver"},

  {name:'walton',camera:1,storage: 
  '32gb',price:22000,color:"silver"},

  {name:'inopen',camera:2,storage:
  '32gb',price:82000,color:"silver"},

  {name:'xaomi',camera:3,storage:
  '32gb',price:52000,color:"silver"},

  {name:'oppo',camera:4,storage:
  '32gb',price:20000,color:"black"},

  {name:'Nokia',camera:5,storage:
  '32gb',price:44000,color:"silver",},

  {name:'inopen',camera:6,storage:
  '32gb',price:62000,color:"silver"},
];
function cheapestPhone(phones){
  let cheapest = phones[0];
for( let i = 0; i< phones.length; i++){
  const phone = phones[i];
  // console.log(phones)
 if(camera.price < cheapest.price){
  cheapest = camera;
 }
}
return cheapest;
}
const myselection=cheapestPhone(camera)
console.log(myselection);