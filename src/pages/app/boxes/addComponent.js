import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { ADDAdministrador, ADDAluno, ADDDiretor, ADDEscola, ADDJovemACE, ADDPesquisador, ADDProfessor, ADDProfissionalEducacao, ADDProfissionalSaude, ADDQuiz } from './add'
import './addComponent.css'

import add_desafios from '../assets/add_desafios.svg';
import add_escola from '../assets/add_escola.svg';
import add_jovemACE from '../assets/add_jovemACE.svg';
import add_pesquisador from '../assets/add_pesquisador.svg';
import add_prof_educacao from '../assets/add_prof_educacao.svg';
import add_prof_saude from '../assets/add_prof_saude.svg'
import add_professor from '../assets/add_professor.svg'

const opcoes = [
    {
        nome: "Administrador",
        logo: add_escola,
        box: ADDAdministrador
    },
    {
        nome: "Aluno",
        logo: add_escola,
        box: ADDAluno
    },
    {
        nome: "Diretor",
        logo: add_escola,
        box: ADDDiretor
    },
    {
        nome: "Escola",
        logo: add_escola,
        box: ADDEscola
    },
    {
        nome: "Professor",
        logo: add_professor,
        box: ADDProfessor
    },
    {
        nome: "Jovem ACE",
        logo: add_jovemACE,
        box: ADDJovemACE
    },
    {
        nome: "Profissional de Saúde",
        logo: add_prof_saude,
        box: ADDProfissionalSaude
    },
    {
        nome: "Profissional de Educação",
        logo: add_prof_educacao,
        box: ADDProfissionalEducacao
    },
    {
        nome: "Pesquisador",
        logo: add_pesquisador,
        box: ADDPesquisador
    },
    {
        nome: "Desafios",
        logo: add_desafios,
        box: ADDQuiz
    },
]

export default class addComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false, componentToShow: ADDEscola }
        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
    }
    closeModal() {
        this.setState({ show: false })
    }
    showModal() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div id="addBlockBody">
                <h1 id="addBlockTitle"><strong>Indique o que deseja adicionar :</strong></h1>
                <div id="options">
                    {opcoes.map(opcao => {
                        return (
                            <div id="addBlock" key={opcao.nome}>
                                <button id="addBlock" onClick={() => {
                                    this.setState({ show: true, componentToShow: opcao.box })
                                }}>
                                    <img src={opcao.logo} alt={opcao.nome} />
                                </button>
                                <p><strong>{opcao.nome}</strong></p>
                            </div>
                        )
                    }
                    )}
                </div>
                <Modal show={this.state.show} onHide={() => this.closeModal()} size="xl">
                    <Modal.Header closeButton/>
                    <this.state.componentToShow></this.state.componentToShow>
                </Modal>
            </div>
        )
    }
}
