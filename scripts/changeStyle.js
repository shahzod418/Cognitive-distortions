let a;

window.onload = function() {
    a = document.createElement("link");
    a.rel = "stylesheet";
    a.href = "styles/style-light.css";
    a.id = "style-theme";
    document.getElementsByTagName("head")[0].appendChild(a);
}

let getTheme = document.getElementById("change-theme");
getTheme.addEventListener("change", function () {
    if (document.querySelector(".dark-theme")) {
        a.href = "styles/style-light.css";
        getTheme.classList.remove("dark-theme")
        return;
    }
    getTheme.classList.add("dark-theme");
    a.href = "styles/style-dark.css";
});

