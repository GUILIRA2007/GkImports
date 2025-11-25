
        // A senha correta definida no código
        const SENHA_CORRETA = "gkadmin";

        function checkLogin() {
            const inputSenha = document.getElementById('passwordInput').value;
            const msgErro = document.getElementById('error-msg');
            const telaLogin = document.getElementById('login-screen');
            const sitePrincipal = document.getElementById('main-site');

            if (inputSenha === SENHA_CORRETA) {
                // Senha correta: esconde login, mostra site
                telaLogin.style.display = 'none';
                sitePrincipal.style.display = 'block';
            } else {
                // Senha errada: mostra mensagem de erro
                msgErro.style.display = 'block';

                document.getElementById('passwordInput').style.border = "1px solid red";
            }
        }

        // Permitir login pressionando "Enter"
        document.getElementById('passwordInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkLogin();
            }
        });

        function logout() {
            // Recarrega a página para voltar ao login
            location.reload();
        }
