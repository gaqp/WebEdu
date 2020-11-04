import React, { Component } from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import "./notifications.css"

import AdminIcon from './pages/app/assets/adminIcon.svg'
export default class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Olá mundo"
        }
        this.handleMsgChange = this.handleMsgChange.bind(this)
        this.handleMsgSend = this.handleMsgSend.bind(this);
    }
    handleMsgChange(event) {
        this.setState({ msg: event.target.value })
    }
    handleMsgSend(event) {
        console.log(this.state.msg);
        this.setState({ msg: "" });
    }
    render() {
        return (
            <div>
                <div>
                    <h1 id="addBlockTitle">Avalie as atividades dos seus alunos:</h1>
                </div>
                <div id="notificationBox">
                    <div id="notificationList">
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                        <div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div><div id="chat">
                            <div id="profileType">
                                <img src={AdminIcon} alt="ícone de usuário"/>
                            </div>
                            <div id="name">Gabriel Alves Queiroz Pontes</div>
                        </div>
                    </div>
                    <div id="notificationChat">
                        <div id="notificationChatHistory">
                        </div>
                        <div id="notificationChatInput">
                            <InputGroup className="mb-3" id="msgBox" size="lg">
                                <FormControl as="textarea" aria-describedby="Enviar Mensagem" value={this.state.msg} onChange={this.handleMsgChange} />
                                <InputGroup.Append>
                                    <Button className="btn-primary" onClick={this.handleMsgSend}>Enviar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}