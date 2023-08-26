const howSum = (target, nums, memo={}) => {
    if(target in memo) return memo[target]
    if(target === 0) return []
    if(target < 0) return null
    for( let num of nums){
        const remainder = target - num
        const remainderRes = howSum(remainder, nums, memo)
        if(remainderRes !== null){
            memo[target] = [...remainderRes, num]
            return memo[target]
        }

    }
    memo[target] = null;
    return null;
}

console.log(howSum(8, [5, 3, 2]))
console.log(howSum(322, [7, 15]))