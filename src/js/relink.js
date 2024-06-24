// Código de link das midias sociais
var redeSociais = [
    "https://github.com/EduChappie", // GitHub
    "https://www.linkedin.com/in/eduardo-fabrício-a936102a1", // Linkedin
    "https://www.instagram.com/edu.f21/", // Instagram
]

function socialMedia(n) {
    window.open(redeSociais[n-1])
}

// https://github.com/EduChappie
// https://www.instagram.com/edu.f21/
// https://www.linkedin.com/in/eduardo-fabrício-a936102a1

var db = [
    "https://educhappie.github.io/css_Experiments/page_1/", // css_experiments
    "https://educhappie.github.io/internet_copied/facebook_template/#facebook_template", // facebook
    "https://github.com/EduChappie/projectsSocket.io", // socket.io
    "https://educhappie.github.io/internet_copied/interface_login/", // login
    "https://github.com/EduChappie/mobile_projects", // mobiles
    "https://github.com/EduChappie/" // internet
]
/*
<ul>css Experiments</ul>
<ul>Facebook Template</ul>
<ul>ChatTalk</ul>
<ul>Login Interface</ul>
<ul>Apps Mobiles</ul>
*/
function openProject(n) {
    if (n==99) {
        window.open(db[5]);
        return
    }

    window.open(db[n]);
}

const abas = document.querySelectorAll(".projects")

// ImagesProjects hahhah
const ip = document.querySelector("#pictures img")

ip.addEventListener("click", function() {

    for (let i = 0; i < abas.length; i++) {
        let r = abas[i].classList.value
        let vl = r.indexOf("ativo");
    
        if (vl >= 0) {
            openProject(i)
            return
        }
    }

    openProject(99);

})