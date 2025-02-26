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

function openPopup1() {
    document.getElementById("popup1").style.display = "flex";
}

function closePopup1() {
    document.getElementById("popup1").style.display = "none";
}

window.onclick = function(event) {
    var popup1 = document.getElementById('popup1');
    if (event.target === popup1) {
        closePopup1();
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


