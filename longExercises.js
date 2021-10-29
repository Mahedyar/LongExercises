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
console.log(arz(32000, 2 , 1, 1 , 4200, 7500 , 3600))



