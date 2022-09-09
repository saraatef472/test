document.getElementById("second").style.visibility = "hidden";
document.getElementById("second2").style.visibility = "hidden";

function myFunction() {
    var x = document.getElementById("second");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }

}

function myFunction2() {
    var x = document.getElementById("second2");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}