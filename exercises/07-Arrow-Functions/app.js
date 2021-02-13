

//    // From this line up Do not change code below
// let str = "John";
// console.log(rapid(str));

// function rapid(str) {
//   var strArr = str.split('');
//   for (var x = 0; x < str.length; x++) {
//     var char = str[x].toUpperCase();
//     if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
//       strArr[x] = '';
//     }
//   }
//   return strArr.join('');
// }


//    // SEGUNDO CODIGO
//    let str = "John";

// const rapid  = (str) => {
//      let resultado = str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '')
//     return resultado.toUpperCase();
// }
//    console.log(rapid(str));


// TERCER CODIGO


rapid = (validateText) => {
    return validateText.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '').toUpperCase();
}

// From this line up Do not change code below
let str = "Otorrinoringología";
console.log(rapid(str));