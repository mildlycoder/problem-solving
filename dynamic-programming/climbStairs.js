const climbStairs = (n, memo={}) => {
    if(n <= 2) return n
    if(n in memo) return memo[n]
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return memo[n]
}

console.log(climbStairs(5))