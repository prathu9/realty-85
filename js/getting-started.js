(function(){
    const getStartedBtn = document.getElementById("get-started-btn");
    const getStartedPopup = document.querySelector(".get-started-popup-wrapper");
    const getStartedCloseBtn = document.getElementById("get-started-close");

    const toggleGetStartedPopup = () => {
        if(getStartedPopup.classList.contains("open")){
            getStartedPopup.classList.remove("open");
            document.body.style.overflow = "auto";
        }
        else{
            getStartedPopup.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    getStartedBtn.addEventListener("click", toggleGetStartedPopup);
    getStartedCloseBtn.addEventListener("click", toggleGetStartedPopup);
}());