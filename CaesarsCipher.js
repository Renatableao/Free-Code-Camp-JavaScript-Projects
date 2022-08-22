function rot13(str) {
    let result = "";
    for (let i=0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78)
          result += String.fromCharCode(str.charCodeAt(i)+13);
      else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91) {
          result += String.fromCharCode(str.charCodeAt(i)-13)
      }
      else {
        result += str[i];
      } 
  }
  return result;}
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));