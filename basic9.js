var idTooltip, modal;
function popover(data_details, clickevent) {
    console.log('here');
    idTooltip = "tlyTooltip-" + data_details;
    modal = document.getElementById(idTooltip);
    if (clickevent == "close") {
        modal.style.display = "none";
    } else {
        setNone("tly__tooltip", "none");
        modal.style.display = "block";
    }
    event.stopPropagation();
    event.preventDefault();
}
window.onclick = function (event) {
    console.log('oliver');
    if (event.target != modal) {
        setNone("tly__tooltip", "none");
    }
}
function setNone(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = displayValue;
    }
}
