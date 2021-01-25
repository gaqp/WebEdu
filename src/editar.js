import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import sucesso from './pages/cadastro/assets/sucess.svg'
import './editar.css'

import API from './services/api'
export default class EditarEscola extends Component {
    constructor(props) {
        super(props)
        this.state = { title: "", escolas: null, show: false, escolaSelecionada: null, showToast: false }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.pesquisar = this.pesquisar.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.selecionarEscola = this.selecionarEscola.bind(this)
        this.handleSelectedTitleChange = this.handleSelectedTitleChange.bind(this)
        this.updateInstitution = this.updateInstitution.bind(this)
        this.handleSelectedPhoneChange = this.handleSelectedPhoneChange.bind(this)
        this.handleSelectedZipChange = this.handleSelectedZipChange.bind(this)
        this.handleSelectedAddressChange = this.handleSelectedAddressChange.bind(this)
        this.handleSelectedNumberChange = this.handleSelectedNumberChange.bind(this)
        this.handleSelectedCityChange = this.handleSelectedCityChange.bind(this)
        this.handleSelectedStateChange = this.handleSelectedStateChange.bind(this)
        this.handleSelectedSocialReasonChange = this.handleSelectedSocialReasonChange.bind(this)
        this.handleSelectedCNPJChange = this.handleSelectedCNPJChange.bind(this)
        this.handleSelectedSanitaryDistrictChange = this.handleSelectedSanitaryDistrictChange.bind(this)
        this.handleToast = this.handleToast.bind(this);
    }
    handleToast(event) {
        this.setState({ showToast: !this.state.showToast });
    }
    selecionarEscola(escola) {
        let escolaTemp = Object.create(escola)
        this.setState({ escolaSelecionada: escolaTemp })
        this.handleShow();
    }
    handleClose(event) {
        this.setState({ show: false })
    }
    handleShow(event) {
        this.setState({ show: true })
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }
    handleSelectedPhoneChange(event) {
        let institution = this.state.escolaSelecionada
        institution.phone = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedZipChange(event) {
        let institution = this.state.escolaSelecionada
        institution.zip = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedAddressChange(event) {
        let institution = this.state.escolaSelecionada
        institution.address = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedNumberChange(event) {
        let institution = this.state.escolaSelecionada
        institution.number = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedCityChange(event) {
        let institution = this.state.escolaSelecionada
        institution.city = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedStateChange(event) {
        let institution = this.state.escolaSelecionada
        institution.state = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedSocialReasonChange(event) {
        let institution = this.state.escolaSelecionada
        institution.socialReason = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedCNPJChange(event) {
        let institution = this.state.escolaSelecionada
        institution.cnpj = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedSanitaryDistrictChange(event) {
        let institution = this.state.escolaSelecionada
        institution.sanitaryDistrict = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    handleSelectedTitleChange(event) {
        let institution = this.state.escolaSelecionada
        institution.title = event.target.value;
        this.setState({ escolaSelecionada: institution })
    }
    async updateInstitution(event) {
        await API.put(`/institution/${this.state.escolaSelecionada.id}`, this.state.escolaSelecionada).then(
            (response) => {
                console.log(response);
                this.handleToast();
                this.handleClose();
            }
        )
    }
    async pesquisar(event) {
        await API.get("/institution").then((response) => {
            this.setState({ escolas: response.data });
        });

    }
    render() {

        return (
            <div id="EditorEscola">
                <h1>Editar Escola</h1>
                <Form>
                    <Form.Group controlId="FormSearch">
                        <Form.Label>Pesquisar Escola</Form.Label>
                        <Form.Control type="text" placeholder="Insira o nome da escola" value={this.state.title} onChange={this.handleTitleChange} />
                    </Form.Group>
                    <Button onClick={this.pesquisar}> Pesquisar </Button>
                </Form>
                <div id="seletorEscola">
                    {this.state.escolas != null && this.state.escolas.map(escola => (
                        <div id="escola" key={escola.id}>
                            <div id="escolaTitle">
                                {escola.title}
                            </div>
                            <div id="escolaSocialReason">
                                {escola.socialReason}
                            </div>
                            <Button onClick={() => this.selecionarEscola(escola)}>Editar Escola</Button>
                        </div>
                    ))}
                </div>
                {this.state.escolaSelecionada != null &&
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editando Escola</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group
                                    controlId="EditFormTitle">
                                    <Form.Label>Título da Instituição</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o nome da instituição"
                                        name="title" value={this.state.escolaSelecionada.title}
                                        onChange={this.handleSelectedTitleChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormPhone">
                                    <Form.Label>Telefone da Instituição</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o nome da instituição"
                                        name="phone" value={this.state.escolaSelecionada.phone}
                                        onChange={this.handleSelectedPhoneChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormZip">
                                    <Form.Label>
                                        CEP da Instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o cep da instituição"
                                        value={this.state.escolaSelecionada.zip}
                                        onChange={this.handleSelectedZipChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormAddress">
                                    <Form.Label>
                                        Endereço da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o endereço da instituição"
                                        value={this.state.escolaSelecionada.address}
                                        onChange={this.handleSelectedAddressChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormNumber">
                                    <Form.Label>
                                        Número do endereço da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o número do endereço da instituição"
                                        value={this.state.escolaSelecionada.number}
                                        onChange={this.handleSelectedNumberChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormCity">
                                    <Form.Label>
                                        Cidade da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira a  cidade da Instituição"
                                        value={this.state.escolaSelecionada.city}
                                        onChange={this.handleSelectedCityChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormState">
                                    <Form.Label>
                                        Estado da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o Estado da Instituição"
                                        value={this.state.escolaSelecionada.state}
                                        onChange={this.handleSelectedStateChange} />

                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormSocialReason">
                                    <Form.Label>
                                        Razão social da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira a razão social da instituição"
                                        value={this.state.escolaSelecionada.socialReason}
                                        onChange={this.handleSelectedSocialReasonChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormCPNJ">
                                    <Form.Label>
                                        CNPJ da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o CNPJ da instituição"
                                        value={this.state.escolaSelecionada.cnpj}
                                        onChange={this.handleSelectedCNPJChange} />
                                </Form.Group>
                                <Form.Group
                                    controlId="EditFormSanitaryDistrict">
                                    <Form.Label>
                                        Distrito Sanitário da Instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira o distrito sanitário da instituição"
                                        value={this.state.escolaSelecionada.sanitaryDistrict}
                                        onChange={this.handleSelectedSanitaryDistrictChange} />

                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={this.handleClose}>
                                Cancelar
                        </Button>
                            <Button
                                variant="primary"
                                onClick={this.updateInstitution}>
                                Salvar alterações
                        </Button>
                        </Modal.Footer>
                    </Modal>
                }
                <Toast
                    show={this.state.showToast}
                    onClose={this.handleToast}
                    delay={5000}
                    autohide
                    id="toast">
                    <Toast.Header>
                        <img
                            src={sucesso}
                            className="rounded mr-2"
                            alt="ícone de sucesso"
                            id="toastImg"
                        />
                        <strong
                            className="mr-auto">Escola Atualizada com sucesso</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.escolaSelecionada != null && this.state.escolaSelecionada.title} foi editada</Toast.Body>
                </Toast>
            </div>
        );
    }
}