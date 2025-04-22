# 📄 Documentação dos casos de Testes - `automationExercise.cy.js`

## Visão Geral
Esta suíte de testes automatiza interações com o site [Automation Exercise](https://automationexercise.com), validando funcionalidades como navegação, login, cadastro e contato.

---

### 🔹 Teste 1: Registrar usuário
- **Objetivo**: Criar um novo usuário no site preenchendo as informações necessárias e após criar o mesmo, realizar a exclusão da conta.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastro / Login'
    5. Verifique se a opção 'Cadastro de Novo Usuário!' está visível
    6. Insira o nome e o endereço de e-mail
    7. Clique no botão 'Cadastro'
    8. Verifique se a opção 'INSERIR INFORMAÇÕES DA CONTA' está visível
    9. Preencha os dados: Título, Nome, E-mail, Senha, Data de nascimento
    10. Marque a caixa de seleção 'Assine nossa newsletter!'
    11. Marque a caixa de seleção 'Receba ofertas especiais de nossos parceiros!'
    12. Preencha os dados: Nome, Sobrenome, Empresa, Endereço, Endereço2, País, Estado, Cidade, CEP, Número de celular
    13. Clique no botão 'Criar Conta'
    14. Verifique se a opção 'CONTA CRIADA!' está visível
    15. Clique no botão "Continuar"
    16. Verifique se "Conectado como nome de usuário" está visível
    17. Clique no botão "Excluir conta"
    18. Verifique se "CONTA EXCLUÍDA!" está visível e clique no botão "Continuar"
- **Resultado Esperado**: A conta deverá ser criada com os dados fornecidos e excluída.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 2: Login Usuário com e-mail e senha corretos
- **Objetivo**: Realizar o Login na aplicação com o usuário e senha corretos.
- **Pré-condições**: Usuário e senhas devem estar salvos no banco de dados do Sistema.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastre-se / Login'
    5. Verifique se a opção 'Entrar na sua conta' está visível
    6. Insira o endereço de e-mail e a senha corretos
    7. Clique no botão 'Login'
    8. Verifique se a opção 'Conectado como nome de usuário' está visível
    9. Clique no botão 'Excluir conta'
    10. Verifique se a opção 'CONTA EXCLUÍDA!' está visível
- **Resultado Esperado**: O login deve ser efetuado com sucesso e logo em seguida a conta excluída.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 3: Login Usuário com e-mail e senha incorretos
- **Objetivo**: Realizar o Login na aplicação com o usuário e senha incorretos.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastre-se / Login'
    5. Verifique se 'Entrar na sua conta' está visível
    6. Digite o endereço de e-mail e a senha incorretos
    7. Clique no botão 'Login'
    8. Verifique se o erro 'Seu e-mail ou senha estão incorretos!' está visível
- **Resultado Esperado**: O usuário será inpedido de logar com a seguinte mensagem: 'Seu e-mail ou senha estão incorretos!'

---

### 🔹 Teste 4: Sair do usuário
- **Objetivo**: Verificar se o usuário foi Deslogado corretamente.
- **Pré-condições**: Usuário e senhas devem estar salvos no banco de dados do Sistema.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastre-se / Login'
    5. Verifique se a opção 'Entrar na sua conta' está visível
    6. Insira o endereço de e-mail e a senha corretos
    7. Clique no botão 'Login'
    8. Verifique se a opção 'Conectado como nome de usuário' está visível
    9. Clique no botão 'Sair'
    10. Verifique se o usuário foi direcionado para a página de login
- **Resultado Esperado**: O usuário que antes estava logado, ao clicar no botão sair, ser direcionado para a página de Login sem estar conectado na conta.

---

### 🔹 Teste 5: Registrar usuário com e-mail existente
- **Objetivo**: Verificar se o mesmo e-mail pode ser utilizado para cadastro mais de uma vez.
- **Pré-condições**: Usuário e senhas devem estar salvos no banco de dados do Sistema.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastro / Login'
    5. Verifique se 'Cadastro de Novo Usuário!' está visível
    6. Insira o nome e o endereço de e-mail já cadastrado
    7. Clique no botão 'Cadastro'
    8. Verifique se o erro 'Endereço de e-mail já existente!' está visível
- **Resultado Esperado**: O usuário não conseguirá criar uma conta, e a seguinte mensagem estará visível: 'Endereço de e-mail já existente!'

---

### 🔹 Teste 6: Formulário de contato
- **Objetivo**: Verificar se o formulário de contato está com o comportamento esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Fale Conosco'
    5. Verifique se a opção 'ENTRE EM CONTATO' está visível
    6. Insira nome, e-mail, assunto e mensagem
    7. Carregue o arquivo
    8. Clique no botão 'Enviar'
    9. Clique no botão OK
    10. Verifique se a mensagem de sucesso 'Sucesso! Seus dados foram enviados com sucesso.' está visível
    11. Clique no botão 'Página Inicial' e verifique se a página inicial foi acessada com sucesso
- **Resultado Esperado**: O usuário deverá conseguir preencher suas informações e Mensagem e submeter com sucesso a Mensagem escrita, com a mensagem de confirmação: 'Sucesso! Seus dados foram enviados com sucesso.'

---

### 🔹 Teste 7: Página Verificar Casos de Teste
- **Objetivo**: Verificar se o usuário foi para a página de Casos de teste com sucesso.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
        1. Abra o navegador
        2. Navegue até a URL 'http://automationexercise.com'
        3. Verifique se a página inicial está visível com sucesso
        4. Clique no botão 'Casos de Teste'
        5. Verifique se o usuário acessou a página de casos de teste com sucesso
- **Resultado Esperado**: O usuário deverá ser redirecionado para a página de Casos de teste.

---

### 🔹 Teste 8: Verifique todos os produtos e a página de detalhes do produto
- **Objetivo**: Verificar se os detalhes dos produtos estão visíveis.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Produtos'
    5. Verifique se o usuário foi direcionado para a página TODOS OS PRODUTOS com sucesso
    6. A lista de produtos está visível
    7. Clique em 'Ver Produto' do primeiro produto
    8. O usuário é direcionado para a página de detalhes do produto
    9. Verifique se os detalhes estão visíveis: nome do produto, categoria, preço, disponibilidade, condição, marca
- **Resultado Esperado**: Os detalhes do Produto selecionado deve estar visível para o usuário.

---

### 🔹 Teste 9: Pesquisar Produto
- **Objetivo**: Verificar se o mesmo e-mail pode ser utilizado para cadastro mais de uma vez.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Produtos'
    5. Verifique se o usuário acessou a página TODOS OS PRODUTOS com sucesso
    6. Digite o nome do produto na caixa de pesquisa e clique no botão de pesquisa
    7. Verifique se 'PRODUTOS PESQUISADOS' está visível
    8. Verifique se todos os produtos relacionados à pesquisa estão visíveis
- **Resultado Esperado**: O nome do produto pesquisado deve estar visível para o usuário.

---

### 🔹 Teste 10: Verificar assinatura na página inicial
- **Objetivo**: Verificar se a funcionalidade de Assinatura (Subscription) está com o comportamento esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Role para baixo até o rodapé
    5. Verifique o texto 'ASSINATURA'
    6. Insira o endereço de e-mail e clique no botão de seta
    7. Verifique se a mensagem de sucesso 'Você foi inscrito com sucesso!' está visível
- **Resultado Esperado**: Ao preencher os campos necessário e clicar no botão a mensagem: 'Você foi inscrito com sucesso!' deverá aparecer para o usuário.

---

### 🔹 Teste 11: Verificar assinatura na página do carrinho
- **Objetivo**: Verificar a funcionalidade de Assinatura (Subscription) na página de carrinho está com o comportamento esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Carrinho'
    5. Role para baixo até o rodapé
    6. Verifique o texto 'ASSINATURA'
    7. Insira o endereço de e-mail e clique no botão de seta
    8. Verifique se a mensagem de sucesso 'Você foi inscrito com sucesso!' está visível
- **Resultado Esperado**: Ao preencher os campos necessário e clicar no botão a mensagem: 'Você foi inscrito com sucesso!' deverá aparecer para o usuário.

---

### 🔹 Teste 12: Adicionar produtos ao carrinho
- **Objetivo**: Verificar se os produtos selecionados foram adicionados ao carrinho.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível corretamente
    4. Clique no botão 'Produtos'
    5. Passe o mouse sobre o primeiro produto e clique em 'Adicionar ao carrinho'
    6. Clique no botão 'Continuar comprando'
    7. Passe o mouse sobre o segundo produto e clique em 'Adicionar ao carrinho'
    8. Clique no botão 'Ver carrinho'
    9. Verifique se ambos os produtos foram adicionados ao carrinho
    10. Verifique seus preços, quantidade e preço total
- **Resultado Esperado**: A funcionalidade 'Carrinho" deverá conter todos os produtos com seus seus preços, quantidade e preço total, selecionados pelo usuário.

---

### 🔹 Teste 13: Verifique a quantidade do produto no carrinho
- **Objetivo**: Verificar se os produtos selecionados no carrinho estão com a quantidade exata selecionada.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível corretamente
    4. Clique em 'Ver Produto' para qualquer produto na página inicial
    5. Verifique se os detalhes do produto estão abertos
    6. Aumente a quantidade para 4
    7. Clique no botão 'Adicionar ao carrinho'
    8. Clique no botão 'Ver Carrinho'
    9. Verifique se o produto é exibido na página do carrinho com a quantidade exata
- **Resultado Esperado**: O produto selecionado pelo usuário deverá estar com a quantidade '4' no carrinho.

---

### 🔹 Teste 14: Fazer pedido: Registre-se durante a finalização da compra
- **Objetivo**: Verificar se a funcionalidade de criação da conta durante a finalização de uma compra está executando como o esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Adicione produtos ao carrinho
    5. Clique no botão 'Carrinho'
    6. Verifique se a página do carrinho está sendo exibida
    7. Clique em 'Prosseguir para a finalização da compra'
    8. Clique no botão 'Cadastrar / Login'
    9. Preencha todos os dados em 'Cadastro' e crie uma conta
    10. Marque a opção 'CONTA CRIADA!' e clique no botão 'Continuar'
    11. Marque a opção 'Conectado como nome de usuário' na parte superior
    12. Clique no botão 'Carrinho'
    13. Clique no botão 'Prosseguir para a finalização da compra'
    14. Verifique os detalhes do endereço e revise seu pedido
    15. Insira a descrição na área de comentários e clique em 'Fazer pedido'
    16. Insira os detalhes de pagamento: Nome no cartão, Número do cartão, CVC, Data de validade
    17. Clique no botão 'Pagar e confirmar pedido'
    18. Verifique a mensagem de sucesso 'Seu pedido foi feito com sucesso!'
    19. Clique no botão "Excluir conta"
    20. Marque a opção "CONTA EXCLUÍDA!" e clique no botão "Continuar"
- **Resultado Esperado**: O usuário deverá conseguir criar uma conta após finalizar uma compra e o carrinho deverá manter os produtos selecionados, e a conta deverá ser excluída.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 15: Caso de teste 15: Fazer pedido: Registrar antes de finalizar a compra
- **Objetivo**: Verificar se a funcionalidade de criação da conta antes da finalização de uma compra está executando como o esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastro / Login'
    5. Preencha todos os dados em 'Cadastro' e crie uma conta
    6. Marque a opção 'CONTA CRIADA!' e clique no botão 'Continuar'
    7. Marque a opção 'Conectado como nome de usuário' na parte superior
    8. Adicione produtos ao carrinho
    9. Clique no botão 'Carrinho'
    10. Verifique se a página do carrinho é exibida
    11. Clique em 'Finalizar Compra'
    12. Verifique os detalhes do endereço e revise seu pedido
    13. Insira a descrição na área de texto dos comentários e clique em 'Fazer Pedido'
    14. Insira os detalhes de pagamento: Nome no Cartão, Número do Cartão, CVC, Data de Validade
    15. Clique no botão 'Pagar e Confirmar Pedido'
    16. Verifique a mensagem de sucesso 'Seu pedido foi feito com sucesso!'
    17. Clique no botão 'Excluir Conta'
    18. Marque a opção 'CONTA EXCLUÍDA!' e clique no botão 'Continuar'
- **Resultado Esperado**: O usuário deverá conseguir criar uma conta antes de finalizar uma compra após o pedido ser feito com sucesso, a conta deverá ser excluída.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 16: Fazer pedido: Faça login antes de finalizar a compra
- **Objetivo**: Verificar se a funcionalidade de Login antes da finalização de uma compra está executando como o esperado.
- **Pré-condições**: Usuário e senhas devem estar salvos no banco de dados do Sistema.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastro / Login'
    5. Preencha o e-mail, a senha e clique no botão 'Login'
    6. Verifique a opção 'Conectado como nome de usuário' na parte superior
    7. Adicione produtos ao carrinho
    8. Clique no botão 'Carrinho'
    9. Verifique se a página do carrinho é exibida
    10. Clique em 'Finalizar Compra'
    11. Verifique os detalhes do endereço e revise seu pedido
    12. Insira a descrição na área de texto dos comentários e clique em 'Fazer Pedido'
    13. Insira os detalhes de pagamento: Nome no Cartão, Número do Cartão, CVC, Data de Validade
    14. Clique no botão 'Pagar e Confirmar Pedido'
    15. Verifique a mensagem de sucesso 'Seu pedido foi feito com sucesso!'
    16. Clique no botão 'Excluir Conta'
    17. Verifique a opção 'CONTA EXCLUÍDA!' e clique no botão 'Continuar'
- **Resultado Esperado**: O Login deve ser realizado com sucesso e a compra realizada com sucesso, após isso a conta do usuário não deve existir mais.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 17: Remover produtos do carrinho
- **Objetivo**: Verificar se a funcionalidade Remover produto do carrinho executa como esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Adicione produtos ao carrinho
    5. Clique no botão 'Carrinho'
    6. Verifique se a página do carrinho é exibida
    7. Clique no botão 'X' correspondente ao produto específico
    8. Verifique se o produto foi removido do carrinho
- **Resultado Esperado**: O produto selecionado deverá ter sido removido do Carrinho.

---

### 🔹 Teste 18: Ver produtos da categoria
- **Objetivo**: Verificar se a categoria selecionada está sendo visualizada pelo usuário.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se as categorias estão visíveis na barra lateral esquerda
    4. Clique na categoria 'Mulheres'
    5. Clique em qualquer link de categoria na categoria 'Mulheres', por exemplo: Vestidos
    6. Verifique se a página da categoria é exibida e confirme o texto 'MULHERES - PRODUTOS DE TOPS'
    7. Na barra lateral esquerda, clique em qualquer link de subcategoria da categoria 'Homens'
    8. Verifique se o usuário foi direcionado para a página da categoria
- **Resultado Esperado**: A categoria selecionada deve estar sendo exibida na página.

---

### 🔹 Teste 19: Visualização e carrinho de produtos da marca
- **Objetivo**: Verificar se o Menu lateral de 'Marcas' está exibindo as informações corretamente
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Clique no botão 'Produtos'
    4. Verifique se as marcas estão visíveis na barra lateral esquerda
    5. Clique em qualquer nome de marca
    6. Verifique se o usuário foi direcionado para a página da marca e se os produtos da marca são exibidos
    7. Na barra lateral esquerda, clique em qualquer link de outra marca
    8. Verifique se o usuário foi direcionado para a página da marca e consegue ver os produtos
- **Resultado Esperado**: A marca selecionada deverá ser exibida para o usuário.

---

### 🔹 Teste 20: Pesquisar produtos e verificar carrinho após o login
- **Objetivo**: Verificar se após fazer Login os produtos selecionados estão no carrinho
- **Pré-condições**: Usuário e senhas devem estar salvos no banco de dados do Sistema.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Clique no botão 'Produtos'
    4. Verifique se o usuário acessou a página TODOS OS PRODUTOS com sucesso
    5. Insira o nome do produto na caixa de pesquisa e clique no botão de pesquisa
    6. Verifique se 'PRODUTOS PESQUISADOS' está visível
    7. Verifique se todos os produtos relacionados à pesquisa estão visíveis
    8. Adicione esses produtos ao carrinho
    9. Clique no botão 'Carrinho' e verifique se os produtos estão visíveis no carrinho
    10. Clique no botão 'Inscrever-se / Login' e insira os dados de login
    11. Novamente, acesse a página do carrinho
    12. Verifique se esses produtos também estão visíveis no carrinho após o login
- **Resultado Esperado**: Os produtos selecionados antes do Login devem está no carrinho após o Login do usuário.

---

### 🔹 Teste 21: Adicionar avaliação do produto
- **Objetivo**: Verificar se a funcionalidade "Avaliar Produto" está se comportando como o esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Clique no botão 'Produtos'
    4. Verifique se o usuário acessou a página TODOS OS PRODUTOS com sucesso
    5. Clique no botão 'Ver Produto'
    6. Verifique se a opção 'Escreva sua avaliação' está visível
    7. Insira seu nome, e-mail e avaliação
    8. Clique no botão 'Enviar'
    9. Verifique a mensagem de sucesso 'Obrigado pela sua avaliação'.
- **Resultado Esperado**: Ao preencher os Campos nome, email e análise e clicar no botão de Enviar a mensagem de sucesso: 'Obrigado pela sua avaliação' deverá ser visível para o usuário.

---

### 🔹 Teste 22: Adicionar ao carrinho de Itens recomendados
- **Objetivo**: Verificar se a sessão "Itens Recomendados" está funcionando como o esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até o URL 'http://automationexercise.com'
    3. Role até o final da página
    4. Verifique se os 'ITENS RECOMENDADOS' estão visíveis
    5. Clique em 'Adicionar ao carrinho' no produto recomendado
    6. Clique no botão 'Ver carrinho'
    7. Verifique se o produto é exibido na página do carrinho
- **Resultado Esperado**: Ao clicar no botão "Carrinho" o usuário deverá ver o produto que selecionou pela aba de "Itens Recomendados"

---

### 🔹 Teste 23: Verifique os detalhes do endereço na página de finalização da compra
- **Objetivo**: Verificar se os detalhes de endereço cadastrados são os mesmos ao finalizar uma compra.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Clique no botão 'Cadastro / Login'
    5. Preencha todos os detalhes em 'Cadastro' e crie uma conta
    6. Marque a opção 'CONTA CRIADA!' e clique no botão 'Continuar'
    7. Marque a opção 'Conectado como nome de usuário' na parte superior
    8. Adicione produtos ao carrinho
    9. Clique no botão 'Carrinho'
    10. Verifique se a página do carrinho é exibida
    11. Clique em 'Prosseguir para a finalização da compra'
    12. Verifique se o endereço de entrega é o mesmo informado no momento do cadastro da conta
    13. Verifique se o endereço de cobrança é o mesmo informado no momento do cadastro da conta
    14. Clique no botão 'Excluir conta'
    15. Marque a opção 'CONTA EXCLUÍDA!' e clique no botão 'Continuar'
- **Resultado Esperado**: Ao criar detalhes de Endereço, o mesmo deve ser igual na confirmação de uma compra, e ao clicar em exclir conta, a mesma não deverá mais estar no banco de dados da aplicação.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 24: Baixe a fatura após o pedido de compra
- **Objetivo**: Verificar se a Funcionalidade "Baixar Fatura" funciona como o esperado.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível com sucesso
    4. Adicione produtos ao carrinho
    5. Clique no botão 'Carrinho'
    6. Verifique se a página do carrinho está sendo exibida
    7. Clique em 'Prosseguir para a finalização da compra'
    8. Clique no botão 'Cadastrar / Login'
    9. Preencha todos os dados em 'Cadastro' e crie uma conta
    10. Marque a opção 'CONTA CRIADA!' e clique no botão 'Continuar'
    11. Marque a opção 'Conectado como nome de usuário' na parte superior
    12. Clique no botão 'Carrinho'
    13. Clique no botão 'Prosseguir para a finalização da compra'
    14. Verifique os detalhes do endereço e revise seu pedido
    15. Insira a descrição na área de comentários e clique em 'Fazer pedido'
    16. Insira os detalhes de pagamento: Nome no cartão, Número do cartão, CVC, Data de validade
    17. Clique no botão 'Pagar e confirmar pedido'
    18. Verifique a mensagem de sucesso 'Seu pedido foi feito com sucesso!'
    19. Clique no botão "Baixar Fatura" e verifique se a fatura foi baixada com sucesso.
    20. Clique no botão "Continuar"
    21. Clique no botão "Excluir Conta"
    22. Marque a opção "CONTA EXCLUÍDA!" e clique no botão "Continuar"
- **Resultado Esperado**: Ao clicar no Botão "Baixar Fatura" depois de finalizar uma compra, um PDF deverá ser baixado no dispositivo do usuário com as informações da compra, e ao clicar em exclir conta, a mesma não deverá mais estar no banco de dados da aplicação.
- **Pós-condições**: A conta do usuário não deve existir mais no sistema.

---

### 🔹 Teste 25: Verifique a rolagem para cima usando o botão 'Seta' e a funcionalidade de rolagem para baixo
- **Objetivo**: Verificar se a página se move para cima ou para baixo ao pressionar a tecla de seta.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até o URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível corretamente
    4. Role a página até o final
    5. Verifique se 'ASSINATURA' está visível
    6. Clique na seta no canto inferior direito para mover para cima
    7. Verifique se a página está rolada para cima e se o texto 'Site de prática completa para engenheiros de automação' está visível na tela
- **Resultado Esperado**: A página inicial se move de acordo com o clique na tecla de seta do teclado.

---

### 🔹 Teste 26: Verifique a funcionalidade de rolagem para cima sem o botão de seta e rolagem para baixo
- **Objetivo**: Verificar se a página se move para cima ou para baixo ao usar o Scroll para cima ou para baixo do Mouse.
- **Pré-condições**: Acesso à página inicial.
- **Passos**:
    1. Abra o navegador
    2. Navegue até a URL 'http://automationexercise.com'
    3. Verifique se a página inicial está visível corretamente
    4. Role a página até o final
    5. Verifique se 'ASSINATURA' está visível
    6. Role a página até o topo
    7. Verifique se a página está rolada para cima e se o texto 'Site de prática completa para engenheiros de automação' está visível na tela
- **Resultado Esperado**: A página inicial se move de acordo com o Scroll do Mouse.

---

