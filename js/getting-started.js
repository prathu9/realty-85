(function(){
    const getStartedBtn = document.getElementById("get-started-btn");
    const getStartedMobBtn = document.getElementById("get-started-mob-btn");
    const getStartedPopup = document.querySelector(".get-started-popup-wrapper");
    const getStartedCloseBtn = document.getElementById("get-started-close");
    const mobileNav = document.querySelector(".mobile-nav");

    const toggleGetStartedPopup = () => {
        document.body.classList.toggle("no-scroll");
        if(getStartedPopup.classList.contains("open")){
            getStartedPopup.classList.remove("open");
        }
        else{
            mobileNav.classList.remove("open");
            getStartedPopup.classList.add("open");
        }
    }

    getStartedBtn.addEventListener("click", toggleGetStartedPopup);
    getStartedMobBtn.addEventListener("click", toggleGetStartedPopup);
    getStartedCloseBtn.addEventListener("click", toggleGetStartedPopup);
}());