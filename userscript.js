// ==UserScript==
// @name         MineMoore Bots - Client
// @match        http://agar.io/*
// @run-at       document-start
// ==/UserScript==
function loadScript(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = a;
    document.head.appendChild(b);
}

function stopPage() {
    window.stop();
    document.documentElement.innerHTML = null;
}
stopPage();
loadScript("https://code.jquery.com/jquery-3.1.0.min.js");
loadScript("https://cdn.socket.io/socket.io-1.4.5.js");
loadScript("http://pastebin.com/raw/8mPxZhjV");
