function palindrome(str) {
    let str_to_check =  str.replace(/[^a-z0-9]/ig, "").toLowerCase().split("")
  
  for(let i=0; i < Math.floor(str_to_check.length/2); i++) {
        if (str_to_check[i] != str_to_check[str_to_check.length-1-i]) {
          return false;
        } 
      } 
      return true;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("nope"))
  console.log(palindrome("almostomla"))