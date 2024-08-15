// Добавить и позже отключить класс "msg-active":
// ---------------------------------------------
function addAndRemoveActiveState(elem) {
    elem.classList.add('msg-active');

    setTimeout( () => {
        elem.classList.remove('msg-active');
    }, 1900)
};

// Дизейбл кнопок на время отображения сообщения:
// ---------------------------------------------
function disableAndEnableBtns() {
    const allBtns = document.querySelectorAll('.btn');
    Array.from(allBtns).forEach( btn => {
        btn.disabled = true;
    });

    setTimeout( () => {
        Array.from(allBtns).forEach( btn => {        
            btn.disabled = false;
        })
    }, 2000);
};

// Отобразить сообщение (общая функция):
// ------------------------------------
function showToastMsg(elem) { // каждому сообщению присвоен уникальный "id", который передается в функцию как аргумент
    addAndRemoveActiveState(elem);
    disableAndEnableBtns();
};