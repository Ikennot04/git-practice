const Fruits = [
    "Apple","Mango","Pine_apple",
    "Grape","Banana","Coconut",
    "Lemon","Durian","Green_apple",
    "guava", "Banana", "What",
    "Are", "You", "KENTOY?apple",

];
let FRUTASniya = {
    Fruitswithapple: [],
    Fruitswithoutapple:[],
};
for( i = 0 ; i<Fruits.length; i++){
    if (Fruits[i].match(/apple/gi)){
        FRUTASniya.Fruitswithapple.push(Fruits[i]);
    }
    else {
        FRUTASniya.Fruitswithoutapple.push(Fruits[i]);
    }
}
console.log(FRUTASniya);