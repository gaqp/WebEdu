import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from './services/api'
export default class EditarEscola extends Component {
    constructor(props) {
        super(props)
        this.state = { title: "", escolas: null }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.pesquisar = this.pesquisar.bind(this)
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }
    async pesquisar(event) {
        await API.get("/institution").then((response) => {
            console.log(response);
            this.setState({ escolas: response.data });
        });

        console.log(this.state);
    }
    render() {

        return (
            <div id="EditorEscola">
                <h1>Esta é a tela de edição de escola</h1>
                <Form>
                    <Form.Group controlId="FormSearch">
                        <Form.Label>Pesquisar Escola</Form.Label>
                        <Form.Control type="text" placeholder="Insira o nome da escola" value={this.state.title} onChange={this.handleTitleChange} />
                    </Form.Group>
                    <Button onClick={this.pesquisar}> Pesquisar </Button>
                </Form>
                <div id="seletorEscola">
                    {this.state.escolas != null && this.state.escolas.map(escola => (
                        <div id="escola" key={escola.token}>
                            <div id="escolaTitle">
                                {escola.title}
                            </div>
                            <div id="escolaSocialReason">
                                {escola.socialReason}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}