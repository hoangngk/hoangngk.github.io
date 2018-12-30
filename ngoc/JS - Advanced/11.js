// 11. Write a JavaScript program to generate a random hexadecimal color code.

var letters = "0123456789ABCDEF"; 

var color = '#'; 
   
for (var i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))]; 
}

console.log(color);