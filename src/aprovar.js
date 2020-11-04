import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import QuizArbo from './quizArbo';
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
                        <QuizArbo />
                    </Tab>
                    <Tab eventKey="patrulha" title="Patrulha em foco">
                        <QuizArbo />
                    </Tab>
                    <Tab eventKey="janelas" title="janelas&Tanques">
                        <QuizArbo />
                    </Tab>
                    <Tab eventKey="reciclagem" title="Coleta&Reciclagem">
                        <QuizArbo />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}