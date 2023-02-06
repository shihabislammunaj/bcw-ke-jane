// const spoopingcart =[
//   {name:"shoe", price:1200}   ,  
//   {name:"shirt", price:2200},     
//   {name:"pent", price:3700} ,    
//   {name:"belt", price:600}     
// ];
// function totalCOST(products){
//   const sum =0;
//   for(let i=0; i<products.length; i++){
//     const product =products[i];
//     sum = sum+ products.price;
//     console.log(product);
//   }
//  return sum;
// }
// const explore=totalCOST(spoopingcart);
// console.log("total explense today:",explore);




const shoppingCart =[
  {name:'shoe',price:1200},
  {name:'shitr',price:2200},
  {name:'pant',price:3700},
  {name:'belt',price:600}
];
function totalCost(products){
  let sum =0;
  for(let i =0; i< products.length; i++){
    const product =products[i];
    sum =sum +product.price;
    console.log(product);
  }
  return sum;
}
const expense =totalCost(shoppingCart);
console.log("total expende today:",expense);
