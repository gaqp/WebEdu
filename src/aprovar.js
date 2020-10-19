import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/tabs'
export default class Aprovar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="notificacoes">
                <h1 id="addBlockTitle">Avalie as atividades dos seus alunos:</h1>
                <Tabs
                    id="controlled-tab-example"
                >
                    <Tab eventKey="quizArbo" title="QuizArbo">
                        Teste QuizArbo
                    </Tab>
                    <Tab eventKey="patrulha" title="Patrulha em foco">
                        Teste Patrulha em foco
                    </Tab>
                    <Tab eventKey="janelas" title="janelas&Tanques">
                        Teste janelas e tanques
                    </Tab>
                    <Tab eventKey="reciclagem" title="Coleta&Reciclagem">
                        Teste coleta e reciclagem
                    </Tab>
                </Tabs>
            </div>
        )
    }
}