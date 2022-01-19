import { addingContainerScroll } from './addingScrollToHistory.js';

const caseForm = document.querySelector('#newCaseForm');
const historyCases = [];

caseForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
    const newCase = {
        date: '',
        doctor: '',
        complaints: '',
        treatment: '',
        conclusion: '',
        additional: '',
        id: Math.floor(Math.random() * 1000)

    }

    event.preventDefault();
    const elements = Array.from(caseForm.elements);
    elements.forEach(el => {
        if (el.getAttribute('name') === 'date') {
            newCase.date = el.value;
            el.value = ''
        } else if (el.getAttribute('name') === 'doctor') {
            newCase.doctor = el.value;
            el.value = ''
        } else if (el.getAttribute('name') === 'complaints') {
            newCase.complaints = el.value;
            el.value = ''
        } else if (el.getAttribute('name') === 'treatment') {
            newCase.treatment = el.value;
            el.value = ''
        } else if (el.getAttribute('name') === 'conclusion') {
            newCase.conclusion = el.value;
            el.value = ''
        } else if (el.getAttribute('name') === 'additional') {
            newCase.additional = el.value;
            el.value = ''
        }
    })
    historyCases.push(newCase);
    createNewCase(newCase)
}

function createNewCase({ date, doctor, complaints, treatment, conclusion, additional, id }) {

    const wrapper = document.querySelector('.personal-history__cases');
    const historyCase = document.createElement('div');
    historyCase.setAttribute('case-id', id);

    historyCase.className = 'personal-history__case';
    historyCase.innerHTML = `
        <div class="personal-history__case-date"><span>Дата:</span>${date}</div>
        <div class="personal-history__case-name"><span>Врач:</span> ${doctor}</div>
        <div class="personal-history__case-problem"><span>Жалобы:</span>  ${complaints}</div>
        <div class="personal-history__case-conclution"><span>Диагноз:</span>  ${treatment}</div>
        <div class="personal-history__case-threatment"><span>Лечение:</span>  ${conclusion}</div>
        <div class="personal-history__case-additional"><span>Дополнительно:</span> ${additional}</div>
        <div class="personal-history__case-buttons">
            <button class="personal-history__case-remove">Удалить историю</button>
            <button class="personal-history__case-edit">Изменить</button>
        </div>
    `;
    
    wrapper.insertAdjacentElement('afterbegin', historyCase);

    const newCaseModalWrapper = document.querySelector('.new-case-modal-wrapper');
    newCaseModalWrapper.style.display = 'none';
    addingContainerScroll();
}


export { formSubmit };