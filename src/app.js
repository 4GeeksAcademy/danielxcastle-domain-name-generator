  let firstwords = ["Cool", "Sick", "The", "Original", "Amazing"];
  let middlewords = ["student", "skater", "surfer", "dog", "cat"];
  let thirdwords = ["profile", "portfolio", "page", "webpage", "us"];
  let extension = ["com", "co.uk", "org", "edu", "gov", "us"];

  for(let a = 0; a < firstwords.length; a++){
    for(let b = 0; b < middlewords.length; b++){
      for(let c = 0; c < thirdwords.length; c++){
        for(let d = 0; d < extension.length; d++){         
          // check if whole domain name ends with extension
          let domainName = `${firstwords[a]}${middlewords[b]}${thirdwords[c]}`;
          if(domainName.endsWith(extension[d])){
              //if true we remove the last extension.length characters from domain name
            domainName = domainName.slice(0, - extension[d].length);
          }
          //print domain name with the extension
          
          console.log(`${domainName}.${extension[d]}`);           
      }
    }
  }
}