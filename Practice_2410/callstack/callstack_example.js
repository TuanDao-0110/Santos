function takeShower(){
    return "Showering!"
}
// O(1)
function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}
// O(2)
function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}



function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()
