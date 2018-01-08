 function stringIncludes(word, letter){
    let matches;
    for(let i = 0; i < word.length; i++){
      if(word[i] === letter){
        matches = true
      }
    }
    return !!matches
  }


  function countdown(n){
  console.log(n)
  if(n > 1){
    countdown(n -1)
  } else {
    return true
  }
}