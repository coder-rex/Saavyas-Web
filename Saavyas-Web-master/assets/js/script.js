function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.opacity = "1";
    document.getElementById("home").style.opacity = "0";
        $(".nav").css("opacity", 0.1);

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("home").style.opacity = "1";

        $(".nav").css("opacity", 1);
}
