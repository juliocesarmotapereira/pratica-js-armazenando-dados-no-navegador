import BotaoConclui from '../js/componentes/concluiTarefa.js'
import BotaoDeleta from '../js/componentes/deletaTarefa.js'

// MANIPULANDO O ARRAY
let tarefas = []

const handleNovoItem = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    // CALENDÁRIO
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados)

    // MANIPULANDO O ARRAY
    tarefas.push(dados)

    lista.appendChild(criaTarefa)

    // ARMAZENANDO DADOS
    // LOCAL STORAGE
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    input.value = " "
}

const criarTarefa = ({ valor, dataFormatada }) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)