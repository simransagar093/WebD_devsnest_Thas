const div = document.querySelectorAll(".box");


const fix = [130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 
190, 191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250, 251,
 253, 267, 269, 272, 274];


Array.from(div).forEach((div,i) => {
    if(fix.includes(i+1)) div.style.background ="white"
})

Array.from(div).forEach((div,i) => {
    
    div.addEventListener('click',() =>{
        div.style.background = (div.style.background == "white" ? "red" : "white")
    })
})