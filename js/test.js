//Left-aside-open
var leftClickNo = 1;

function leftClickAction() {
    var dropdown = document.getElementById("asideLeft");
    var operNo = leftClickNo % 2;

    if (operNo === 1) {
        dropdown.classList.add("show-aside-left");
        dropdown.classList.remove("move-aside-left");
    } else if (operNo === 0) {
        dropdown.classList.add("move-aside-left");
        dropdown.classList.add("move-aside-left");
    }
    leftClickNo++;
}

// Right-aside-open
var rightClickNo = 1;

function rightClickAction() {
    var dropdown = document.getElementById("asideRight");
    var operNo = rightClickNo % 2;

    if (operNo === 1) {
        dropdown.classList.add("show-aside-right");
        dropdown.classList.remove("move-aside-right");
    } else if (operNo === 0) {
        dropdown.classList.add("move-aside-right");
        dropdown.classList.add("move-aside-right");
    }
    rightClickNo++;
}

//On mouse click
window.onclick = function(event) {
    if (!event.target.matches('.aside-btn-left')) {
        var dropdownLeft = document.getElementById("asideLeft");
        if (dropdownLeft && dropdownLeft.classList.contains('show-aside-left')) {
            dropdownLeft.classList.remove('show-aside-left');
            dropdownLeft.classList.remove('move-aside-left');
            leftClickNo = 1;
        }
    }
    if (!event.target.matches('.aside-btn-right')) {
        var dropdownRight = document.getElementById("asideRight");
        if (dropdownRight && dropdownRight.classList.contains('show-aside-right')) {
            dropdownRight.classList.remove('show-aside-right');
            dropdownRight.classList.remove('move-aside-right');
            rightClickNo = 1;
        }
    }
};