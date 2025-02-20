document.getElementById("nextPage").addEventListener("click", function() {
    document.querySelector(".wrapper").style.transform = "translateX(-100vw)";
});

document.getElementById("prevPage").addEventListener("click", function() {
    document.querySelector(".wrapper").style.transform = "translateX(0)";
});
