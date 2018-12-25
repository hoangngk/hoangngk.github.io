function clicked() {
    var input_value = document.getElementById('inputText').value;
    var h = document.createElement("H2");
    var t = document.createTextNode(input_value);
    h.appendChild(t);

    if (input_value === '') {
        alert("Please input text!");
    } else {
        var button = document.createElement("input");
        button.type = "button";
        button.value = "Delete";
        button.class ='delete';
        button.onclick = function(){
            $(this).closest('h2').remove();
        };

        h.appendChild(button);
        document.body.appendChild(h);
    }
    document.getElementById('inputText').value = '';

    
}

// function deleteThis(){
// 	$(this).closest('.h2').remove();
// }

document.getElementById('button').addEventListener('click', clicked);