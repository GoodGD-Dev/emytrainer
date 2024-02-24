// Função para obter os valores salvos no armazenamento local
function getSavedValues() {
    const savedValues = localStorage.getItem('savedValues');
    return savedValues ? JSON.parse(savedValues) : {};
}

// Função para salvar os valores no armazenamento local
function saveValuesToLocalStorage(values) {
    localStorage.setItem('savedValues', JSON.stringify(values));
}

// Função para preencher os campos de entrada com os valores salvos
function fillInputsFromSavedValues() {
    const savedValues = getSavedValues();
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(function(input) {
        if (input.name in savedValues) {
            input.value = savedValues[input.name];
        }
    });
}

// Chamada para preencher os campos de entrada quando a página é carregada
window.addEventListener('load', fillInputsFromSavedValues);

function toggleContent(tab) {
    document.querySelectorAll('.content, .buttons button').forEach(item => item.classList.remove('active'));

    document.getElementById(`content${tab.toUpperCase()}`).classList.add('active');
    document.getElementById(`btn${tab.toUpperCase()}`).classList.add('active');
}

const menuItems = document.querySelectorAll('.menu-item');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function setActiveMenuItem() {
    menuItems.forEach(item => item.classList.toggle('active', isInViewport(document.getElementById(item.textContent.toLowerCase()))));
}

function scrollToSection(sectionId) {
    window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', setActiveMenuItem);

// Função para obter os valores salvos no armazenamento local
function getSavedValues(formId) {
    const savedValues = localStorage.getItem(formId);
    return savedValues ? JSON.parse(savedValues) : {};
}

// Função para salvar os valores no armazenamento local
function saveValuesToLocalStorage(formId, values) {
    localStorage.setItem(formId, JSON.stringify(values));
}

// Função para preencher os campos de entrada com os valores salvos
function fillInputsFromSavedValues(formId) {
    const savedValues = getSavedValues(formId);
    const inputs = document.querySelectorAll(`#${formId} input[type="number"]`);

    inputs.forEach(function (input) {
        if (input.name in savedValues) {
            input.value = savedValues[input.name];
        }
    });
}

// Chamada para preencher os campos de entrada quando a página é carregada
window.addEventListener('load', function () {
    fillInputsFromSavedValues('registroForm1');
    fillInputsFromSavedValues('registroForm2');
});

function registrar(formId) {
    // Obtenha os elementos de entrada
    var inputs = document.querySelectorAll(`#${formId} input[type="number"]`);

    // Crie um objeto para armazenar os valores
    var valores = {};

    // Preencha o objeto com os valores dos campos de entrada
    inputs.forEach(function (input) {
        valores[input.name] = input.value;
    });

    // Salve os valores no armazenamento local
    saveValuesToLocalStorage(formId, valores);

    // Exiba os valores no console (você pode substituir isso por lógica de envio para um servidor, por exemplo)
    console.log(valores);
}