function munas (nuber){
  let result =1;
  for(let i=1; i <= nuber; i++){
    result=result*i;
  }
  return result;
}
const result=munas(10 );
console.log(result);