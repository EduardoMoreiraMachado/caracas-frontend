'use strict'

const validarLogin = async (login) => {
    let responseJSON = {}

    const url = 'http://127.0.0.1:1206/v1/loginCliente'

    const options = {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'content-type': 'application/json',
            'x-access-token': window.localStorage.getItem('token')
        }
    }

    const response = await fetch(url, options)

    responseJSON.statusCode = response.status
    responseJSON.json = response.json()

    return responseJSON
}

const openDashboard = async () => {

    const emailADM = document.getElementById('email').value
    const senhaADM = document.getElementById('senha').value
    
    var loginJSON = {
        email: emailADM,
        senha: senhaADM
    }
    
    const validacao = await validarLogin(loginJSON)
    var dadosADM = await validacao.json

    if (validacao.statusCode == 200) {

        window.localStorage.setItem('token', dadosADM[0].token);
        window.location.href = `./welcome-page.html?id_adm=${dadosADM[0].id}?nome=${dadosADM[0].nome}`
        //console.log(window.localStorage.getItem('token'))
    }

    else {
        alert('E-mail ou senha incorreto(s)')
    }
}

const button = document.getElementById('enter').addEventListener('click', openDashboard)
