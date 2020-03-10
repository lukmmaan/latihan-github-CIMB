// function palindromeCheck(str){
// 	str = str.toLowerCase().replace(/[\W\s\_]/gi, "");
// 	console.log(str);
// 	var reverseArr = str.split("").reverse();
// 	console.log (reverseArr);
// 	var reverseStr = reverseArr.join("");
// 	console.log(reverseStr);
// 	if (reverseStr === str){
// 		return true;
// 	}else{
// 		return false;
// 	}
	
// }
// //palindromeCheck("ey*e");
// palindromeCheck("Yreka Bakery");

let tulisan = "nurses run nurses"
tulisan = tulisan.replace(/ /g, '')
console.log(tulisan)