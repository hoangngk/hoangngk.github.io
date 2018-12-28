// 12. Write a JavaScript program to removes non-printable ASCII characters from a given string.

function removeNonASCII(str) {
  
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
}

console.log(removeNonASCII('àbcôbác'))
