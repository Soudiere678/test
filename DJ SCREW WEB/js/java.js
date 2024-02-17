const visibleP = document.querySelector('.info-text');
const btnInfo = document.querySelector('.btnInfo');
btnInfo.onclick = function () {
    visibleP.classList.toggle('info-text-visible');
}
