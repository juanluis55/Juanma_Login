import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            error: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica de autenticación simulada
        const { username, password } = this.state;
        if (username === 'JuanLuis' && password === '2004') {
            this.setState({
                isLoggedIn: true,
                error: ''
            });
        } else if (username === 'Peter' && password === '2005') {
            this.setState({
                isLoggedIn: true,
                error: ''
            });
        }
        else {
            this.setState({
                isLoggedIn: false,
                error: 'Usuario o contraseña incorrectos'
            });
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <div>¡Has iniciado sesión correctamente!</div>;
        }

        return (
            <div class = 'F'>
               
                <br></br>
                <h2 class = 'K'>Iniciar Sesión</h2>
                <br></br>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label class="J">Usuario:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label class="L">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <button id = 'M'class="btn btn-dark" type="submit" >Iniciar Sesión</button>
                </form>
            </div>
        );
    }
}

export default Login;