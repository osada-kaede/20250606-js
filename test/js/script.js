function calculateShipping(amount){
    if(amount < 3000){
        console.log("送料は500円です");
    }else{
        console.log("送料無料です");
    }
}

calculateShipping(2500);
calculateShipping(3000);
calculateShipping(4000);