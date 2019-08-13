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

function min(nums){
    let lowest = 0;
    let i = 0;
    while(i < nums.length){
        if(nums[i] < lowest){
            lowest = nums[i]
        }
        i++
    } return lowest
}




let testScores = [87, 88,65, 97];
function avg (num){
	let total = 0;
	num.forEach(numbers => {
		total += numbers;
	});
	return total / num.length;
}

avg(testScores);
}