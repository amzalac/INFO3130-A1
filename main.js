function leftContentClick() {
    document.getElementById('left-animation').classList.add('left-animation');
    let pageContent = document.getElementById("my-designs-page-content");
    setTimeout(function(){pageContent.style.display = "block"}, 2000);
}

function rightContentClick() {
    document.getElementById('right-animation').classList.add('right-animation');
    let pageContent = document.getElementById("about-me-page-content");
    setTimeout(function(){pageContent.style.display = "block"}, 2000);
}

function bottomContentClick() {
    document.getElementById('bottom-animation').classList.add('bottom-animation');
    let pageContent = document.getElementById("contact-page-content");
    setTimeout(function(){pageContent.style.display = "block"}, 2000);
}

function exitLeft() {
    document.getElementById('left-animation').classList.remove("left-animation");
    document.getElementById("my-designs-page-content").style.display = "none";
}

function exitRight() {
    document.getElementById('right-animation').classList.remove("right-animation");
    document.getElementById("about-me-page-content").style.display = "none";
}

function exitBottom() {
    document.getElementById('bottom-animation').classList.remove("bottom-animation");
    document.getElementById("contact-page-content").style.display = "none";
}


