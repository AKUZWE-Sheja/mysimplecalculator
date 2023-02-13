function addNumbers(){
    const numbers=[12,2,83,4,35,6,43,9];
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
      }
      return sum;
    }
    console.log(addNumbers());
     
    ​
    function multiplyNumbers(){
        const arrayNumbers=[12,2,83,4,35,6,43,9];
        let product=1;
        for(let i=0;i<arrayNumbers.length;i++){
        product *=arrayNumbers[i];
        }
        return product;
      }
      console.log(multiplyNumbers());
    ​
      module.exports={
        addNumbers,
        multiplyNumbers
      }
