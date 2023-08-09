  let firstwords = ["Cool", "Sick", "The", "Original", "Amazing"];
  let middlewords = ["student", "skater", "surfer", "dog", "cat"];
  let thirdwords = ["profile", "portfolio", "page", "webpage", "us"];
  let extension = ["com", "co.uk", "org", "edu", "gov", "us"];

  for(let a = 0; a < firstwords.length; a++){
    for(let b = 0; b < middlewords.length; b++){
      for(let c = 0; c < thirdwords.length; c++){
        for(let d = 0; d < extension.length; d++){         
          console.log(`${firstwords[a]}${middlewords[b]}${thirdwords[c]}.${extension[d]}`);           
      }
    }
  }
}