function adviseClothing(weather){
    if(weather === "晴れ"){
        console.log("Tシャツがおすすめ");
    }else if(weather === "雨"){
        console.log("傘を忘れずに");
    }else if(weather === "雪"){
        console.log("コートを着ましょう");
    }else if(weather === "お札"){
        console.log("お財布を用意しましょう");
    }else{
        console.log("天気の入力が正しくありません");
    }
}

adviseClothing("晴れ");
adviseClothing("雨");
adviseClothing("雪");
adviseClothing("槍");
adviseClothing("お札");