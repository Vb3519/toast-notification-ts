// Добавить и позже отключить класс "msg-active":
// ---------------------------------------------
function addAndRemoveActiveState(elem) {
    elem.classList.add('msg-active');
    setTimeout(function () {
        elem.classList.remove('msg-active');
    }, 1900);
}
;
// Дизейбл кнопок на время отображения сообщения:
// ---------------------------------------------
function disableAndEnableBtns() {
    var allBtnElems = document.querySelectorAll('.btn');
    Array.from(allBtnElems).forEach(function (btn) {
        btn.disabled = true;
    });
    setTimeout(function () {
        Array.from(allBtnElems).forEach(function (btn) {
            btn.disabled = false;
        });
    }, 2000);
}
;
// Отобразить сообщение (общая функция):
// ------------------------------------
function showToastMsg(elem) {
    addAndRemoveActiveState(elem);
    disableAndEnableBtns();
}
