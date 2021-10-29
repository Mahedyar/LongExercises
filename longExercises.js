function arz (n , a,b ,c ,aPrice , bPrice , cPrice) {
    let count = 0
    for (let i =0 ; i<=a ; i++){

        for (let j =0 ; j<=b ; j++){

            for (let k=0 ; k<=c ; k++){

                if (i*aPrice +j*bPrice + k*cPrice ===  n ){
                    count++
                }
            }
        }
    } return count
}
// console.log(arz(32000, 2 , 1, 1 , 4200, 7500 , 3600))

////////////////////////////////password exercise ///////////////////////////////

const letterChanger = (firstString) => {

    let secondString = firstString[firstString.length-1] + firstString.substring(0 , firstString.length-1)
    let newstring = ""

    for (let i =0 ; i <= secondString.length ; i++){

        if (secondString.charCodeAt(i) === 122) {
            // 122 is the charcode of z
            newstring = newstring + "a"

        }else {
            newstring = newstring + String.fromCharCode(secondString.charCodeAt(i)+1)
        }

    }
    return newstring

}

const password = (k , string) => {
   let result = ""
    for (let j =0 ; j<k ; j++) {
        result = letterChanger(string)
        string = result
    }return string

}

// console.log(letterChanger("dbc"))
// console.log(password(2,"abz"))

////////////////////////////////// Subasa Exercise //////////////

// function sortChecker (prev , current) {
//     // if (current - prev > 0){
//     //     return true
//     // }
//     // if (current - prev <= 0){
//     //     return false
//     // }
// }
function sortChecker (array) {
    let arrayMax = 0

    for (let i =0 ; i<array.length ; i++ ){
        if (array[i] < arrayMax) {
            return false
        }
        arrayMax = array[i]
    }
    return true
}



function subasa (n , firstMinutes, secondMinutes , goals) {

    let firstHalf = []
    let secondHalf = []
    let counter = 0
    let max = 0

    for (let i=0  ; i<n ; i++) {
        if (goals[i] <= 45+firstMinutes && goals[i] > max ) {
            firstHalf.push(goals[i])
            counter++
        }
        max = goals[i]
    }

    for (let j= counter ; j<n ; j++){
        if( 45 <= goals[j] && goals[j] <= 90+secondMinutes ){
            secondHalf.push(goals[j])
        }
    }

    if (sortChecker(firstHalf) && sortChecker(secondHalf) && goals[n-1] <= 90+secondMinutes) {
        console.log("YES")
    } else {
        console.log("NO")
    }


    // console.log(sortChecker(firstHalf))
    // console.log(sortChecker(secondHalf))
    // console.log(firstHalf)
    // console.log(secondHalf)

}

subasa(6, 3, 2, [8,48,45,70 , 81 , 94 ])
