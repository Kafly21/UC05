$(document).ready(function() {
    $('#form-cadastro').on('submit', function(e) {
        e.preventDefault();

        const nome = $('#registerName').val();
        const email = $('#registerEmail').val();
        const senha = $('#registerPassword').val();
        const confirmSenha = $('#confirmPassword').val();
        if (senha !== confirmSenha) {
            alert('As senhas não conferem.');
            return;
        }

        $.ajax({
            url: 'http://localhost:3000/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ nome: nome, email: email, senha: senha }),
            success: function(response) {
                alert('Cadastro realizado com sucesso! Faça Login.');
                window.location.href = 'login.html';
            },
            error: function() {
                alert('Erro ao tentar cadastrar. Tente novamente mais tarde.');
            }
        });
    });
});