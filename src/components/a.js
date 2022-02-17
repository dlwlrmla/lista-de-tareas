const nums =  [3,2,2,3]

const  solve = nums => {
    for(let i =0;i,nums.length;i++){
        let count = 0
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
        count !== 0 ? nums.splice(i,1) : ""
    }
    for(let a of nums){
        console.log(a)
    }
}
solve(nums) 

