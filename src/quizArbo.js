import React, { Component } from 'react'
import './quizArbo.css'
import icone from './pages/app/assets/vistoAtivo.svg'
export default class QuizArbo extends Component {
    constructor(props) {
        super(props)
        this.state = [{ nome: "Gabriel", status: "inexistente" }, { nome: "Gabriel", status: "pendente" }, { nome: "Gabriel", status: "reprovado" }, { nome: "Gabriel", status: "avaliado" }]
    }
    render() {
        return (
            <div id="aprovarTabela">
                <div id="listagemAlunos">
                    {this.state.map((aluno) => {
                        return (
                            <div id={(aluno.status === "inexistente" && "alunoAprovar") || (aluno.status === "pendente" && "alunoAprovarPendente") || (aluno.status === "reprovado" && "alunoAprovarReprovado") || (aluno.status === "avaliado" && "alunoAprovarAvaliado")}>
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}{this.state.map((aluno) => {
                        return (
                            <div id="alunoAprovar">
                                <div id="profileTypeAprovar">
                                    <img src={icone} alt="ícone do usuário" />
                                </div>
                                <div id="alunoAprovarNome">
                                    {aluno.nome}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div id="legendaAprovar">
                    <div id="aval">
                        <div id="quadAval"></div>
                        <span> Conteúdo Avaliado</span>
                    </div>
                    <div id="pend">
                        <div id="quadPend"></div>
                        <span> Conteúdo Pendente</span>
                    </div>
                    <div id="rep">
                        <div id="quadRep"></div>
                        <span> Conteúdo Reprovado</span>
                    </div>
                    <div id="inex">
                        <div id="quadInex"></div>
                        <span> Conteúdo inexistente</span>
                    </div>
                </div>
            </div>
        )
    }
}