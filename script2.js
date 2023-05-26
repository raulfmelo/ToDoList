const inputText = document.querySelector('.input');
const submitButton = document.querySelector('.input-btn');
const listaItem = document.querySelector('.lista-item');
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

tarefas.forEach(tarefa => {
  criaItem(tarefa);
});

submitButton.addEventListener('click', () => {
  if (inputText.value !== '') {
    tarefas.push(inputText.value);
    criaItem(inputText.value);
    inputText.focus();
    inputText.value = '';
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
});

function criaItem(texto) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');
  const olho = document.createElement('i');
  const check = document.createElement('i');
  const xmark = document.createElement('i');

  li.classList.add('item');
  p.classList.add('item-nome');
  btn1.classList.add('eye');
  btn2.classList.add('done');
  btn3.classList.add('delete');
  olho.classList.add('fa-solid', 'fa-eye', 'fa-eye-slash');
  check.classList.add('fa-solid', 'fa-circle-check');
  xmark.classList.add('fa-solid', 'fa-circle-xmark');

  listaItem.appendChild(li);
  li.appendChild(p);
  li.appendChild(btn1);
  li.appendChild(btn2);
  li.appendChild(btn3);
  btn1.appendChild(olho);
  btn2.appendChild(check);
  btn3.appendChild(xmark);

  btnEyeFuncao(btn1);
  btnDoneFuncao(btn2);
  btnDelete(btn3, texto);

  p.textContent = texto;
}

function btnEyeFuncao(btn) {
    btn.addEventListener('click', (e) => {
      const lista = btn.parentElement;
      const texto = lista.querySelector('.item-nome');
      texto.classList.toggle('blur');
      
      const olho = btn.querySelector('i.fa-eye');
      olho.classList.toggle('fa-eye-slash');
    });
  }

function btnDoneFuncao(btn) {
  btn.addEventListener('click', () => {
    const lista = btn.parentElement;
    const texto = lista.querySelector('.item-nome');
    texto.classList.toggle('risco');
  });
}

function btnDelete(btn, texto) {
  btn.addEventListener('click', (e) => {
    const li = e.target.parentElement.parentElement;
    li.remove();
    encontraNaTarefa(texto);
  });
}

function encontraNaTarefa(texto) {
  const posicao = tarefas.indexOf(texto);
  tarefas.splice(posicao, 1);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
