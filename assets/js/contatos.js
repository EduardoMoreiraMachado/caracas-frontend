'use strict'

const inserirContato = async (contato) => {
    let responseJSON = {}

    const url = 'http://127.0.0.1:1206/v1/contato'

    const options = {
        method: 'POST',
        body: JSON.stringify(contato),
        headers: {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)

    responseJSON.statusCode = response.status
    responseJSON.json = response.json()
    
    return responseJSON
}

const saveContact = async () => {

    const nameUser = document.getElementById('name').value
    const phoneUser = document.getElementById('phone').value
    const celUser = document.getElementById('cel').value
    const emailUser = document.getElementById('email').value
    const messageUser = document.getElementById('message').value
    
    let saveContactJSON

    if(document.getElementById('suggestion').checked) {

        saveContactJSON = {
            nome: nameUser,
            telefone: phoneUser,
            celular: celUser,
            email: emailUser,
            mensagem: messageUser,
            id_opcao: 1
        }

    } else {

        saveContactJSON = {
            nome: nameUser,
            telefone: phoneUser,
            celular: celUser,
            email: emailUser,
            mensagem: messageUser,
            id_opcao: 2
        }

    }

    console.log(saveContactJSON)
    
    const save = await inserirContato(saveContactJSON)
    console.log(save)

    if (save.statusCode == 201) {
        alert('Sua mensagem foi enviada. Muito obrigada por contribuir com a sua opinião.')
    
        // window.location.reload(true)
    }
}

const button = document.getElementById('send').addEventListener('click', saveContact)