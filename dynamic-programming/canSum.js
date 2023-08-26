const canSum = (target, nums, memo={}) => {
    if(target in memo) return memo[target]
    if(target === 0) return true
    if(target < 0) return false
    for( let num of nums){
        const remainder = target - num
        if(canSum(remainder, nums, memo)){
            memo[target] = true
            return true
        }
    }

    memo[target] = false
    return false
}

console.log(canSum(3000, [2, 4, 3, 15]))
console.log(canSum(3000, [7, 14]))