import React, { Component } from 'react'
import './ranking.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Ranking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "João Victor",
            idade: 16,
            imgURL: "https://images.freeimages.com/images/large-previews/a0c/art-students-1438420.jpg",
            alunoPos: 6,
            escolaPos: 12,
            escolaNome: "EREM - Professora Amarina Simões",
            pontuacoes: [
                { nome: "QuizArbo", pontuacao: 100 },
                { nome: "Patrulha em Foco", pontuacao: 51 },
                { nome: "Janelas & Tanques", pontuacao: 42 },
                { nome: "Coleta & Reciclagem", pontuacao: 150 },
                { nome: "Arbo Turma", pontuacao: 20 }

            ]
        };
    }
    render() {
        return (
            <div className="container  text-center rankingContainer pb-4 pt-4 pr-0 pl-0">
                <div>
                    <img src={this.state.imgURL} alt={this.state.nome} className="alunoDestaqueImagem mt-5 mb-3"></img>
                    <p className="alunoDestaqueNome">{this.state.nome},   {this.state.idade}</p>
                </div>
                <div className="rankings">
                    <div className="rankingAluno">
                        <div className="rankingAlunoTitle mb-3 whiteText">Ranking do aluno</div>
                        <p className="rankingAlunoName mb-3"><span className="rankingNumberName">{this.state.alunoPos}º</span> {this.state.nome}</p>
                    </div>
                    <div className="rankingEscolar">
                        <div className="rankingEscolaTitle mb-3 whiteText">Ranking da escola</div>
                        <p className="rankingEscolaName mb-3"><span className="rankingNumberEscola">{this.state.escolaPos}º</span> {this.state.escolaNome}</p>
                    </div>

                    <div className="pontDesafios">
                        <div className="pontDesafiosTitle mb-3 whiteText">Pontuação nos desafios</div>
                        <div className="pontDesafiosName">
                            {this.state.pontuacoes.map(
                                (ponto) => {
                                    return (
                                        <p className="d-flex mb-3 rankingPontuacao">
                                            <span className="mr-auto pl-3 pr-3">{ponto.nome}</span> {ponto.pontuacao} pontos
                                        </p>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class RankingPesquisa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisa: "",
            entidades: [
                { nome: "João Victor", ranking: 6, tipo: "Aluno" },
                { nome: "João das Neves", ranking: 10, tipo: "Aluno" },
                { nome: "Escola João e Maria", ranking: 90, tipo: "Escola" }
            ],
            pesquisaResultado: null
        }
        this.handlePesquisaChange = this.handlePesquisaChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }
    handlePesquisaChange(event) {
        this.setState({ pesquisa: event.target.value });
    }
    handleSearchClick(event) {
        this.setState({ pesquisaResultado: this.state.pesquisa });
    }

    render() {
        return (
            <div>
                <h1
                    className="sectionTitle">
                    Consultar ranking de estudante ou escola:
                </h1>
                <div className="container">
                    <div className="searchBox">
                        <input
                            type="text"
                            className="rankingSearch"
                            placeholder="Exemplo: João das Neves, Escola Municipal João Carpinteiro"
                            value={this.state.pesquisa}
                            onChange={this.handlePesquisaChange}
                            onKeyPress={
                                (event) => {
                                    if (event.key === 'Enter') {
                                        this.handleSearchClick()
                                    }
                                }
                            }
                        ></input>
                        <FontAwesomeIcon className="ml-3 clickable" icon={faSearch} onClick={this.handleSearchClick} />
                    </div>
                    <div className="searchResults">
                        {this.state.pesquisaResultado === null && <div> </div>}

                        {this.state.pesquisaResultado != null && this.state.pesquisaResultado !== "" &&
                            this.state.entidades.map(
                                (resultado) => {
                                    return (
                                        <div className="d-flex resultCard mt-3 pl-3 pr-3" key={resultado.nome}>
                                            <p className="text-center">{resultado.nome}</p>
                                            <div className="d-flex resultOptions">
                                                <p className="text-center">{resultado.ranking}º</p>
                                                <FontAwesomeIcon className="ml-3 clickable" icon={faArrowRight} onClick={this.handleSearchClick} />
                                            </div>

                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}