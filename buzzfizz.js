
function fizz_buzz(){
    for(i=1; i <= 100; i++){
      if(i%3 === 0 && i%5 ==0){
        console.log("BUZZFIZZ")
        continue;
      }
        if(i%3 === 0){
          console.log("FIZZ")
          continue;
        }
        if(i%5 === 0){
          console.log("buzz")
          continue;
        }

        console.log(i);

    }
}
fizz_buzz();
