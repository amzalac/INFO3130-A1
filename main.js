function leftContentClick() {
    document.getElementById('left-animation').classList.add('left-animation');

    let pageContent = document.getElementById("my-designs-page-content");
    setTimeout(function(){ pageContent.style.display = "block"}, 2000);
}


