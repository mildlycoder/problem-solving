const bestSum = (target, nums, memo={}) => {
    if(target in memo) return memo[target]
    if(target === 0) return [];
    if(target < 0) return null;

    let shortestCombination = null

    for(let num of nums){
        const remainder = target - num;
        const remainderCombo = bestSum(remainder, nums, memo)
        if(remainderCombo !== null){
            const combination = [...remainderCombo, num];
            if(shortestCombination === null||combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        } 

    }
    memo[target]=shortestCombination;
    return shortestCombination
}

console.log(bestSum(16, [1,2, 3]))