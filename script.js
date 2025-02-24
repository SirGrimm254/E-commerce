function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
}

document.getElementById("imageUpload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.getElementById("preview");
            img.src - e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});