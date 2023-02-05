function getsumANARRAY(number){
  let sum =0;
  for(let i = 0; i < number.length; i++){
    const index =i;
    const element =number[index]
    sum =sum +element;
    // console.log(index ,element,sum);
  }
  return sum;
}
// sdfghjk
function getOddNumberOfAnarray(numbers){
  const oddNumbers =[];
  for(let i=0; i < numbers.length; i++){
    const index =i;
    const element =numbers[index];
    if(element  % 2  !== 0){
      console.log(index,element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
const  myNubers =[12, 65, 78,32,45,91];
   const oddNumbers =getOddNumberOfAnarray(myNubers)
   console.log(oddNumbers);
const oddNumbersSum=getsumANARRAY(myNubers);
console.log('odd number sum',oddNumbers)