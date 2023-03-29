// const btnEye = document.querySelectorAll('.eye')
// const btnEye = []
// const btnDone = document.querySelectorAll('.done')
// const btnDone = []
const inputText = document.querySelector('.input')
const submitButton = document.querySelector('.input-btn')
const listaItem = document.querySelector('.lista-item')
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => {
    criaItem(tarefa)
});

//enviar 
submitButton.addEventListener('click', () => {
    if (inputText.value != '') {
        tarefas.push(inputText.value)
        criaItem(inputText.value)
        // console.log(btnEye);
        // console.log(btnDone);
        inputText.focus()
        inputText.value = ''
        console.log(tarefas);

        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }
})
//cria o elemento
function criaItem(texto) {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const btn3 = document.createElement('button')
    const olho = document.createElement('i')
    const check = document.createElement('i')
    const xmark = document.createElement('i')

    li.classList.add('item')
    p.classList.add('item-nome')
    btn1.classList.add('eye')
    btn2.classList.add('done')
    btn3.classList.add('delete')
    olho.classList.add('fa-solid', 'fa-eye', 'fa-eye-slash')
    check.classList.add('fa-solid', 'fa-circle-check')
    xmark.classList.add('fa-solid', 'fa-circle-xmark')

    listaItem.appendChild(li)
    li.appendChild(p)
    li.appendChild(btn1)
    li.appendChild(btn2)
    li.appendChild(btn3)
    btn1.appendChild(olho)
    btn2.appendChild(check)
    btn3.appendChild(xmark)

    btnEyeFuncao(btn1)
    btnDoneFuncao(btn2)
    btnDelete(btn3, texto)

    p.innerHTML = texto
    // btnEye.push(btn1)
    // btnDone.push(btn2)

}

function btnEyeFuncao(btn) {
    btn.addEventListener('click', (e) => {
        lista = btn.parentElement
        texto = lista.querySelector('.item-nome')
        texto.classList.toggle('blur')
        e.target.classList.toggle('fa-eye')
    })
}

function btnDoneFuncao(btn) {
    btn.addEventListener('click', () => {
        lista = btn.parentElement
        texto = lista.querySelector('.item-nome')
        texto.classList.toggle('risco')
    })
}
function btnDelete(btn, texto) {
    btn.addEventListener('click', (e) => {
        li = e.target.parentElement.parentElement
        li.remove()
        encontraNaTarefa(texto)
    })
}

function encontraNaTarefa(texto) {
    posicao = tarefas.indexOf(texto)
    tarefas.splice(posicao, 1)
    console.log(posicao);
    console.log(tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}


