function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    // Types of currency units avaiable
    let unit = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
    // List to be used to print result
    let result = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]];
    // Deep copy of cid to keep original unchanged
    var newcid = JSON.parse(JSON.stringify(cid))

    function getchange(change) {
        
        //If all avaiable money in cash register is used to pay off change. Return all cid avaiable originally
        if (newcid.every(item => item[1] == 0) && change == 0) {
            return {status: "CLOSED", change: cid}
        }

        //If change is paid but there still money left on register. Return result list only with units used in order to pay off change
        if (newcid.some(item => item[1] != 0) && change == 0) {
            return {status: "OPEN", change: result.filter(item => item[1] != 0)}
        }
    
        //Find biggest unit that is less or equal to change
        let maxval = Math.max(...Object.values(unit).filter(num => num <= change));

        //If there is none avaiable (example: change is 0.50 but there is only 1 dollar coin in register)
        if (maxval <= 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
          
        //Check how much money there is in register in maxval unit (example: ["FIVE": 15] or 3 bills of 5 dollars)
        let unit_in_cid = newcid.filter(item => item[0] == Object.keys(unit).find(key => unit[key] === maxval))[0];
      
        //If change is not all paid yet and there is still money in register or no more money in register
        if (newcid.some(item => item[1] != 0) && change > 0 || newcid.every(item => item[1] == 0) && change > 0) {
        
            //If there is money in register in maxval unit
            if (unit_in_cid[1] > 0) {
                //Give change in maxval value and take it off register
                let temp = unit_in_cid[1] - maxval;
                unit_in_cid[1] = temp.toFixed(2);
                //Update change left to be paid
                change -= maxval;
                //Update result list with amount given as change in maxval unit
                let update_result = result.filter(item => item[0] == unit_in_cid[0])
                update_result[0][1] += maxval;

                //Start over for change left to be paid
                 return getchange(change.toFixed(2));
            }

            //If there is no money in register in maxval unit
            if (unit_in_cid[1] == 0) { 
                //Delete that unit from units list so it won't be considered avaiable for maxval
                delete unit[Object.keys(unit).find(key => unit[key] === maxval)]
                //Start over for change left to be paid
                return getchange(change);
            }
      }
    }
    return getchange(change);
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))