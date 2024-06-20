(function(){
    const tabOptions = document.querySelectorAll(".tab-option");

    const handleTabClick = (e) => {
        resetClassList();
        document.getElementById(e.target.dataset.contentId).classList.add("show");
        e.target.classList.add("active");
    }

    tabOptions.forEach((elem) => {
        elem.addEventListener("click", handleTabClick);
    });

    const resetClassList = () => {
        const tabContent = document.querySelectorAll(".tab-content");

        tabContent.forEach((elem) => {
            elem.classList.remove("show");
        })

        tabOptions.forEach((elem) => {
            elem.classList.remove("active");
        })
    }
}());