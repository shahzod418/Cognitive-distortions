window.onload = function() {
    let a = document.createElement("link");
    a.rel = "stylesheet";
    a.href = "styles/style-dark.css";
    a.id = "style-theme";
    document.getElementsByTagName("head")[0].appendChild(a);
}