import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import API from '../../../services/api';
import Cadastro from '../../cadastro/novoCadastro';

//import * as Yup from 'yup';


export class ADDEscola extends Component {
    render() {
        return (
            <div>
                <h1>
                    Adicionar Escola:
                </h1>
                <Formik
                    initialValues={{
                        title: "",
                        phone: "",
                        zip: "",
                        address: "",
                        number: "",
                        neighborhood: "",
                        city: "",
                        state: "",
                        socialReason: "",
                        cnpj: "",
                        sanitaryDistrict: "",
                        token: ""
                    }}
                    onSubmit={
                        async (values, { setSubmitting }) => {
                            setSubmitting(true)
                            await API.post("/institution", values).then(
                                (response) => {
                                    console.log(response);
                                }
                            )
                            setSubmitting(false);
                        }
                    }
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                            <Form className="form-ADD">
                                <Form.Group controlId="formTitle">
                                    <Form.Label>
                                        Nome da Instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        placeholder="Insira o nome aqui"
                                        value={values.title}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>
                                        Telefone da Instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Insira o telefone da instituição"
                                        value={values.phone}
                                        onChange={handleChange}>

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formZip">
                                    <Form.Label>
                                        CEP da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="zip"
                                        placeholder="Insira o CEP da instituição"
                                        value={values.zip}
                                        onChange={handleChange}>

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>
                                        Endereço da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Insira o Endereço da instituição"
                                        value={values.address}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formNumber">
                                    <Form.Label>
                                        Número da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="number"
                                        placeholder="Insira o número da instituição"
                                        value={values.number}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formNeighborhood">
                                    <Form.Label>
                                        Bairro da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="neighborhood"
                                        placeholder="Insira o bairro da instituição"
                                        value={values.neighborhood}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formCity">
                                    <Form.Label>
                                        Cidade da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="Insira a cidade da instituição"
                                        value={values.city}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formState">
                                    <Form.Label>
                                        Estado da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        placeholder="Insira o estado da instituição"
                                        value={values.state}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formSocialReason">
                                    <Form.Label>
                                        Razão social da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="socialReason"
                                        placeholder="Insira a razão social da instituição"
                                        value={values.socialReason}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formToken">
                                    <Form.Label>
                                        Token da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="token"
                                        placeholder="Insira o token da instituição"
                                        value={values.token}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formCNPJ">
                                    <Form.Label>
                                        CNPJ da instituição
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="cnpj"
                                        placeholder="Insira o CNPJ da instituição"
                                        value={values.cnpj}
                                        onChange={handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formSanitaryDistrict">
                                    <Form.Label>
                                        Distrito sanitário da instituição
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        type="text"
                                        name="sanitaryDistrict"
                                        placeholder="Insira o distrito sanitário da instituição"
                                        value={values.sanitaryDistrict}
                                        onChange={handleChange}
                                    >
                                        <option>Selecione</option>
                                        <option value="1">I</option>
                                        <option value="2">II</option>
                                        <option value="3">III</option>
                                        <option value="4">IV</option>
                                        <option value="5">V</option>

                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>Cadastrar Instituição</Button>
                            </Form>
                        )}

                </Formik>

            </div>
        )
    }
}
export class ADDQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { list_questions: [] };
    }
    render() {
        return (
            <div>
                <h1>
                    Adiconar Quiz:
                </h1>
                <Formik
                    initialValues={{
                        nome: "",
                        deadline: "",
                        list_questions: []
                    }}
                    onSubmit={async (values) => {
                        values.list_questions = this.state.list_questions
                        await API.post("/quiz", values).then((response) => console.log(response));
                    }

                    }
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                            <Form className="form-Quiz">
                                <Form.Group controlId="formName">
                                    <Form.Label>Nome do Quiz</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nome"
                                        onChange={handleChange}
                                        value={values.nome}
                                    >

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formDate">
                                    <Form.Label>Escolha a data de entrega do quiz</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="deadline"
                                        onChange={handleChange}
                                        value={values.deadline}
                                    ></Form.Control>
                                </Form.Group>
                                <p>Questões inseridas</p>
                                {this.state.list_questions.map((valor, indice) => {
                                    return (
                                        <p key={indice}>{valor.Nome} {indice}</p>
                                    )
                                })}
                                <p>Adicionar Questões</p>
                                <Button onClick={async () => {
                                    let list_questions = this.state.list_questions;
                                    list_questions.push({ enunciado: "Teste", nivel: "DIFICIL", resposta_correta: "A", justificativa_A: "A", justificativa_B: "B", justificativa_C: "C", justificativa_D: "D", justificativa_E: "E" })

                                    await this.setState({ list_questions: list_questions })
                                    console.log(this.state.list_questions)
                                }}>Adicionar pergunta</Button>

                                <Button onClick={handleSubmit}>Cadastrar quiz</Button>
                            </Form>
                        )}

                </Formik>

            </div >
        )
    }
}
export class ADDDiretor extends Component {
    render() {
        return (
            <Cadastro role="diretor" />
        )
    }
}
export class ADDAluno extends Component {
    render() {
        return (
            <Cadastro role="aluno" />
        )
    }
}
export class ADDProfessor extends Component {
    render() {
        return (
            <Cadastro role="professor" />
        )
    }
}
export class ADDProfissionalSaude extends Component {
    render() {
        return (
            <Cadastro role="profissional_saude" />
        )
    }
}
export class ADDProfissionalEducacao extends Component {
    render() {
        return (
            <Cadastro role="profissional_educacao" />
        )
    }
}
export class ADDAdministrador extends Component {
    render() {
        return (
            <Cadastro role="administrador" />
        )
    }
}
export class ADDJovemACE extends Component {
    render() {
        return (
            <Cadastro role="jovem_ace" />
        )
    }
}
export class ADDPesquisador extends Component {
    render() {
        return (
            <Cadastro role="pesquisador" />
        )
    }
}