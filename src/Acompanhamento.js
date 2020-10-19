import React, { Component } from 'react'
import stats_off from './assets/stats_off.svg'
import stats_on from './assets/stats_on.svg'
import atv_on from './assets/atv_on.svg'
import atv_off from './assets/atv_off.svg'
import bubble_on from './assets/bubble_on.svg'
import bubble_off from './assets/bubble_off.svg'
import './acompanhamento.css'
let alunos = [
    { nome: "Gabriel Alves Queiroz Pontes", um: false, dois: true, tres: false, id: 0 },
    { nome: "Gabriel Pontes Queiroz Alves", um: true, dois: true, tres: true, id: 1 },
    { nome: "Gabriel Queiroz Pontes Alves", um: true, dois: true, tres: false, id: 2 }
]

export default class Acompanhamento extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div
                id="acompanhamento">
                <h1
                    id="addBlockTitle">
                    Selecione qual aluno deseja avaliar:</h1>
                <div
                    id="listaAlunos">
                    <span>
                        Alunos matriculados
                    </span>
                    <div
                        id="lista">
                        {alunos.map((aluno) => {
                            return (
                                <div id="aluno" key={aluno.id}>
                                    <div id="alunoNome">
                                        {aluno.nome}
                                    </div>
                                    <div id="stats">
                                        {aluno.um ? <img src={bubble_on} alt="notificação pendente" /> : <img src={bubble_off} alt="sem notificações pendentes" />}
                                        {aluno.dois ? <img src={stats_on} alt="stats pendentes" /> : <img src={stats_off} alt="sem stats pendentes" />}
                                        {aluno.tres ? <img src={atv_on} alt="atividades pendentes" /> : <img src={atv_off} alt="sem atividades pendentes" />}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}