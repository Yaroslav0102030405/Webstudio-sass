const animItems = document.querySelectorAll(".anim-items")

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll () {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight)) {
                animItem.classlist.add("active");
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                animItem.classlist.remove("active");
                }
        }
    }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
        scrolltop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrolltop, left: rect.left + scrollleft }
    }
    animOnScroll();
}