(function(){
    const mobileNavBtn = document.getElementById("mobile-nav-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    mobileNavBtn.addEventListener("click",() => {
        mobileNavBtn.classList.toggle("active");
        mobileNav.classList.toggle("open");
        document.body.classList.toggle("no-scroll");
    })
}());