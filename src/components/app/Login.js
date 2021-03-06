import React, {useState} from "react"
import axios from "axios"
import {navigate} from "@reach/router"
import styled from 'styled-components';
import "../../../assets/styles/login.scss"
import {setUser} from "../../services/auth"
import {Button, Modal} from 'reactstrap';

const ErrorMessage = () => <h1>Błąd logowania</h1>;

export default () => {
    const [error, setError] = React.useState(null);
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await axios.post('https://lrstrapi.burrow.io/auth/local', {
                identifier: emailRef.current.value,
                password: passwordRef.current.value
            })
            setUser(data)
            setError(null)
            navigate('/app/account')
        } catch {
            setError('Błąd logowania')
        }
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const Center = styled.div`
    text-align:center;
    padding:20px;
    
    `

    return (
        <Center>
            <Button color="danger" onClick={toggle}>Zaloguj się!</Button>
            <Modal className="modal-login" isOpen={modal} toggle={toggle}>
                {error && <ErrorMessage text={error}/>}
                <form id="form" onSubmit={handleSubmit}>
                    <fieldset id="sign_up">
                        <legend>Logowanie do systemu</legend>
                        <div>
                            <label htmlFor="email-address">Email</label>
                            <input
                                className="form-control"

                                ref={emailRef}
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Hasło</label>
                            <input
                                className="form-control"
                                ref={passwordRef}
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div>
                        <Button
                            type="submit"
                        >Zaloguj</Button>
                    </div>
                </form>

            </Modal>
        </Center>
    );
}