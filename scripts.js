document.getElementById("toggle-gallery").onclick = () => {
    const g = document.querySelector(".gallery");
    g.style.display = g.style.display === "none" ? "grid" : "none";
};

document.getElementById("toggle-video").onclick = () => {
    const v = document.querySelector("video");
    v.style.display = v.style.display === "none" ? "block" : "none";
};
