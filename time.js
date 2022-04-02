export default time


function time(date){

let userDate = date
const present = new Date().getTime();
let time = present - userDate;

const day = (1000 * 60 * 60) * 24;
const month = day * Math.floor(30, 4167)
const year = day * 365; 
console.log(day, month, year)

let nums = [Math.floor((time / year)), Math.floor((time % year) / month), Math.floor((time % month) / day)] 
console.log(nums)

    const years =  nums[0] > 1  ? `${nums[0]} Years ago`: `${nums[0]} Year ago`
    const months = nums[1] > 1  ? `${nums[1]} Months ago` : `${nums[1]} Month ago`
    const days   = nums[2] > 1  ? `${nums[2]}  days ago` : `${nums[2]} day ago`


    for (let i = 0 ; i < nums.length; i ++){
        if(nums[i] > 0){
            return years
        } else if (nums[1] <= 12){
           return months
        } else  return days
    }

}

// time()

