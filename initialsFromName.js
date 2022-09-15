let createInitialsFromName = (name) => {
    let number=name.split(" ");
    if (number.length==1) {
      return(name.slice(0,2)).toUpperCase();
    } 
    else if(number.length==2){
      let space="";
      for(let i=0;i<number.length;i++)
      {
        let a=number[i];
        space=space.concat(a.charAt(0));
      }
      return(space.toUpperCase());
    }
    else if(number.length==3)
    {
      let space="";
      for(let i=0;i<number.length;i++)
      {
        let a=number[i];
        if(i==0|| i==number.length-1)
        space=space.concat(a.charAt(0));
      }
      return(space.toUpperCase());
    }
    
    }
    
  //console.log(createInitialsFromName("John"))
  //console.log(createInitialsFromName("John doe"))
  //console.log(createInitialsFromName("John deer cuu"))
  
  module.exports = createInitialsFromName;