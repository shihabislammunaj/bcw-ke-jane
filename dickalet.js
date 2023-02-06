// function ticketPrice (tablaQunantity){
//   const first100Rate =100;
//   const secondRate =90;
//   const restTicketRate =70;
//   if(tablaQunantity<=100){
//       const price =tablaQunantity*first100Rate;
//       return price;  
//   }
//   else if(tablaQunantity <=200){
//     const first100Rateprice =100 *first100Rate;
//     const restTicketRateQuantity =ticketQuantity -100;
//     const restTicketPrice =restTicketRateQuantity=
//  secondRate;
// const totalprice =first100Rateprice + restTicketPrice;
// return totalprice;
// }

// }
// const price =ticketPrice(100);
// console.log("price:",price);


function ticketPrice(ticketQuantity){
  const first100Rate =100;
  const second100Rate =90;
  const restTicketRate =70
  if(ticketQuantity<= 200){
    const price =ticketQuantity* first100Rate;
    return price;
  }
  else if( ticketQuantity<= 200){
    const first100Rateprice=100*first100Rate;
    const restTicketQuantity =ticketQuantity *second100Rate;
    const totalprice =first100Rate + restTicketRate;
    return totalprice;
  }
  else {
     const first100Rateprice=100*first100Rate;
     const second100Rateprice=100*second100Rate;
     const restTicketQuantity =ticketQuantity -200;
     const restTicketPrice =restTicketQuantity * restTicketRate;
     const totalCost =first100Rate+second100Rate+restTicketPrice;
     return totalCost;
  }
}
const price =ticketPrice(120);
console.log("price:",price);