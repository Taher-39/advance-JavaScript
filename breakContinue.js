const nums = [5,8,4,87,9867,69];
for(let i = 0; i < nums.length; i++){
    
    if(nums[i] > 100){
        break;
    }
    //console.log(nums[i]);

}

const nums2 = [5, 8, 4, -87, -9867, 69];
for (let i = 0; i < nums2.length; i++) {

    if (nums2[i] < 0) {
        //break;//5,8,4
        continue;
    }
    console.log(nums2[i]);

}