// código para área dos projetos
const img = document.querySelector("#pictures img");
const aba = document.querySelectorAll("#projects .projects");
var idx;

const images = [
    '../images/experiments.png',
    '../images/facebook_template.png',
    '../images/chat.png',
    '../images/userlogin.png',
    '../images/app.png'
]

for (let i =0; i < aba.length; i++) {
    aba[i].addEventListener("click", function() {
        
        this.classList.add(`ativo${i+1}`)
        this.style.borderColor = '#893639'
        
        for (let y = 0; y < aba.length; y++) {
            if (i != y) {
                aba[y].classList.remove(`ativo${y+1}`)
                aba[y].style.borderColor = 'gray'
            }
        }

    })
    
}

function choice(t) {

    if (t == idx) { return };


    console.log("clicou " + t);
    
    img.style.filter = 'blur(5px)';
    img.src = images[t-1];
    idx = t;

    setTimeout(()=> {
        console.log("time");
        img.style.filter = 'blur(0px)';
    }, 50);

    
}