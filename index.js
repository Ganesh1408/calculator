const inputEl = document.getElementById("input")


const buttons= document.querySelectorAll('button')

let string= "";
let arr=Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){ 
            string = eval(string);
            inputEl.value=string;
            console.log(string)
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";   
            inputEl.value=string;
            console.log(string)
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1);
            inputEl.value=string;
        }
        else {
            string+= e.target.innerHTML;
            inputEl.value=string;
        }
        
    })
})