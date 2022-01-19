const addNewCaseButton = document.querySelector('.personal-history-new-case');

addNewCaseButton.addEventListener('click', openNewCaseModal)


function openNewCaseModal() {
    const newCaseModalWrapper = document.querySelector('.new-case-modal-wrapper');
    const newCaseModal = document.querySelector('.new-case-modal');
    newCaseModalWrapper.style.display = 'block';
    newCaseModal.style.display = 'block';
}

const newCaseModalWrapper = document.querySelector('.new-case-modal-wrapper');
addEventListener('click', closeNewCaseModal);

function closeNewCaseModal(event) {

    if (event.target === newCaseModalWrapper) {
        newCaseModalWrapper.style.display = 'none';
    }

}

export { openNewCaseModal };