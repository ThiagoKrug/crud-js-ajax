function salvarUsuario(event) {
    event.preventDefault();
    let inputIDUsuario = document.getElementsByName("id_usuario")[0];
    let id_usuario = document.getElementsByName("id_usuario")[0].value;
    console.log(id_usuario.value);
}

/*function salvarPessoa(event) {
    event.preventDefault();
    let form = document.getElementById("form");
    // converte os dados do formulário em um objeto pessoa
    let pessoa = Object.fromEntries(new FormData(form).entries());

    // inserir uma nova pessoa
    if (pessoa.id == "") {
        fetch("salvar.php", {
            method: "POST", // verbo de envio
            body: JSON.stringify(pessoa), // informações a serem enviadas
            headers: { 'Content-Type': "application/json; charset=UTF-8" } // informações do cabeçalho
        })
            // converte a resposta em JSON
            .then(response => response.json())
            .then(pessoa => inserirPessoa(pessoa))
            .catch(error => console.log(error));

    } else { // editar uma pessoa
        fetch("salvar.php", {
            method: "PUT", // verbo de envio
            body: JSON.stringify(pessoa), // informações a serem enviadas
            headers: { 'Content-Type': "application/json; charset=UTF-8" } // informações do cabeçalho
        })
            // converte a resposta em JSON
            .then(response => response.json())
            .then(pessoa => alterarPessoa(pessoa))
            .catch(error => console.log(error));
    }
    form.reset();
    return false;
}*/