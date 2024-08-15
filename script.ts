// Добавить и позже отключить класс "msg-active":
// ---------------------------------------------
function addAndRemoveActiveState(elem: HTMLElement): void {
    elem.classList.add('msg-active');

    setTimeout( () => {
        elem.classList.remove('msg-active');
    }, 1900);
};

// Дизейбл кнопок на время отображения сообщения:
// ---------------------------------------------
function disableAndEnableBtns(): void {
    const allBtnElems: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
    Array.from(allBtnElems).forEach( btn => {
        btn.disabled = true;
    });

    setTimeout( () => {
        Array.from(allBtnElems).forEach( btn => {
            btn.disabled = false;
        });
    }, 2000);
};


// Отобразить сообщение (общая функция):
// ------------------------------------
function showToastMsg(elem: HTMLElement): void {
    addAndRemoveActiveState(elem);    
    disableAndEnableBtns();
}
