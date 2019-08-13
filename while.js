//max min without sort.
function max(nums){
let highest= 0;
let i=0;
while (i <nums.length) {
    if (nums[i] >highest) {
        highest= nums[i]
    }
    i++;
    

}
return highest;
}

