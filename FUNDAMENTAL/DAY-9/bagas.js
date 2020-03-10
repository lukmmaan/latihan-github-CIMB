//---------------------------------- No 1 -----------------------------------------

var letters = 'abcdefghijklmnopqrstuvsxyz'

const caesarCipher = (word, num) => {

    let wordCaesar = ''

    for(i=0;i<word.length;i++){

        if(num<letters.length){

            wordCaesar += letters[num]

            num++

        }else{

            wordCaesar += letters[num-letters.length]

            num++

        }

    }

    return wordCaesar

}

// -------------------------------- No 2 ------------------------------------------

const plusMinus = (numArr) => {

    let result = 0

    let outputOperator = ''

    for (i = 0; i < numArr.length; i++) {

        if (i == 0) {

            result = numArr[i]

            outputOperator += (numArr[i])

        } else if (i % 2 == 0) {

            result -= numArr[i]

            outputOperator += ' - ' + (numArr[i])

        }else{

            result += numArr[i]

            outputOperator += ' + ' + (numArr[i])

        }

    }

    return outputOperator + ' = ' + result

}

//---------------------------------- No 3 -----------------------------------------

const isPalindrome = (str) => {

    str = str.toLowerCase()

    strAlphaNum = str.replace(" ", "")

    strArray = strAlphaNum.split("")

    strReversed = strArray.reverse()

    strRevJoin = strReversed.join("")

    if (strAlphaNum == strRevJoin) {

        return true

    } else {

        return false

    }

}

//-------------------------------------PRINT OUT------------------------------

console.log('------------------------------')

console.log('\t   NOMOR 1')

console.log('------------------------------')

console.log(caesarCipher('abc', 1))

console.log(caesarCipher('abc', 28))

console.log('------------------------------')

console.log('\t   NOMOR 2')

console.log('------------------------------')

console.log(plusMinus([1, 2, 3, 4]))

console.log(plusMinus([1, 1, 1, 1, 1]))

console.log('------------------------------')

console.log('\t   NOMOR 3')

console.log('------------------------------')

console.log(isPalindrome('Madam'))

console.log(isPalindrome('racECar'))

console.log(isPalindrome('123321'))

console.log(isPalindrome('NuRsES run'))

console.log(isPalindrome('hehe kocak'))

console.log('------------------------------')