const names=["munas","siyam","anas"," ","anas","kabul","labul","kabul","labul","munas","ashik","siyam"];
 function removeDuplicate(names){
  const valwo=[];
  for(let i=0; i<names.length; i++){
    const name=names[i];
    console.log(name);
    if(valwo.includes(name)=== false){
      valwo.push(name);
    }
  
  }
  return valwo;
 }
 const valoname=removeDuplicate(names);
 console.log(valoname)
