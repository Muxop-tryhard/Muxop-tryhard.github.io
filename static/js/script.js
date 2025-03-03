const mainContainer = document.querySelector(".main-container"),
    imagePreview = document.querySelectorAll(".image-preview"),
    image = document.querySelectorAll(".image-preview img"),
    video = document.querySelectorAll("video");
    messageBienvenue = document.querySelectorAll(".messageBienvenue");

function afficheMessageBienvenue() {

    setTimeout(function (){
        document.querySelector(".messageBienvenue").style.display = "block";
        gsap.to(messageBienvenue,
            {duration:0.5 , opacity:1}
        );
    },1000);

    setTimeout(function() {
        gsap.to(messageBienvenue,
            {duration:0.5 , opacity:0}
        );
        setTimeout(function (){
            document.querySelector(".messageBienvenue").style.display = "none";
        },1000)
  }, 2000);
    setTimeout(function() {
        gsap.to(imagePreview,
        { duration: 1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", opacity: 1, stagger: -0.2, ease: "circ.in" },
    );
    },2000)

}

window.onload = () => {
    const setOpacity = (opacity) => image.forEach(img => img.style.opacity = opacity);
    mainContainer.onmouseenter = () => setOpacity(0.2);
    mainContainer.onmouseleave = () => setOpacity(1);

    gsap.fromTo(imagePreview,
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1},
        { duration: 0.6, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0, stagger: 0.2, ease: "power4.out",oncomplete:afficheMessageBienvenue() },
    );



    imagePreview.forEach((preview, index) => {
        const expandCard = (flexValue) => gsap.to(preview, { duration: 0.1, flex: flexValue, ease: "power2.out" });
        preview.onmouseenter = () => { expandCard(3); video[index].play(); };
        preview.onmouseleave = () => { expandCard(1); video[index].pause(); };
    });
};
