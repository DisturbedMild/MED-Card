const historyWrapper = document.querySelector('.personal-history__cases');

function addingContainerScroll() {
    if(historyWrapper.offsetHeight >= 600) {
        historyWrapper.style.overflowY = 'scroll';
    }
}

export {addingContainerScroll};