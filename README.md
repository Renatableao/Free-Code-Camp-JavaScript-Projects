# Free-Code-Camp-JavaScript-Projects
JavaScript Algorithms and Data Structure Projects

* **Palindrome Checker**: Return `true` if the given string is a palindrome. Otherwise, return `false`. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

    * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes. We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others. We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

* **Roman Numeral Converter**: Convert the given number into a roman numeral.

* **Caesars Cipher**: One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the `ROT13 cipher`, where the values of the letters are shifted by `13` places. Thus `A ↔ N`, `B ↔ O` and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

* **Telephone Number Validator**: Return `true` if the passed string looks like a valid US phone number. The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  <blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

  For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.
  
* **Cash Register**: Design a cash register drawer function <code>checkCashRegister()</code> that accepts purchase price as the first argument (<code>price</code>), payment as the second argument (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the third argument.
<code>cid</code> is a 2D array listing available currency. The <code>checkCashRegister()</code> function should always return an object with a <code>status</code> key and a <code>change</code> key.
Return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code> if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return <code>{status: "CLOSED", change: [...]}</code> with cash-in-drawer as the value for the key <code>change</code> if it is equal to the change due.
Otherwise, return <code>{status: "OPEN", change: [...]}</code>, with the change due in coins and bills, sorted in highest to lowest order, as the value of the <code>change</code> key.

  <table class='table table-striped'><tr><th>Currency Unit</th><th>Amount</th></tr><tr><td>Penny</td><td>$0.01 (PENNY)</td></tr><tr><td>Nickel</td><td>$0.05 (NICKEL)</td></tr><tr><td>Dime</td><td>$0.1 (DIME)</td></tr><tr><td>Quarter</td><td>$0.25 (QUARTER)</td></tr><tr><td>Dollar</td><td>$1 (ONE)</td></tr><tr><td>Five Dollars</td><td>$5 (FIVE)</td></tr><tr><td>Ten Dollars</td><td>$10 (TEN)</td></tr><tr><td>Twenty Dollars</td><td>$20 (TWENTY)</td></tr><tr><td>One-hundred Dollars</td><td>$100 (ONE HUNDRED)</td></tr></table>

  See below for an example of a cash-in-drawer array:

  ```js
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
```
