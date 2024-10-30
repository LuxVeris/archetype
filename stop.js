document.addEventListener('touchmove', function(e) {
            e.preventDefault();
}, { passive: false });
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
document.addEventListener('contextmenu', function(e) {
     e.preventDefault();
});
document.onkeydown = function(e) {
    if (e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85)) { 
        return false;
        }
    };