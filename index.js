//write your code here
function stripUpperCase (string){
    let newstring = ""
    let letter
    for (let i = 0; i < string.length; i++){
        letter = string.charAt(i)
        if (letter === letter.toLowerCase()){
            newstring = newstring + letter
        }
    }
    return newstring
}
console.log(stripUpperCase("This is a String"))