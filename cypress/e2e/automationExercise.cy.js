describe('Suíte de Testes para o Site "Automation Exercise"', () => {

    beforeEach(()=> {
        cy.visit('https://automationexercise.com')
        cy.title().should('eq', 'Automation Exercise')
    })
  it("Registrar um usuário", () => {
    cy.get('a[href="/login"]').click();
    cy.get("h2").contains("New User Signup!").should("be.visible");
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste51@siegh.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get("h2")
      .eq(0)
      .find("b")
      .should("have.text", "Enter Account Information");
    cy.get("#id_gender1").check();
    cy.get("#password").type("123456");
    cy.get("#days").select(5);
    cy.get("#months").select(6);
    cy.get("#years").select(40);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Teste");
    cy.get("#last_name").type("Legal");
    cy.get("#company").type("sieghLTDA");
    cy.get("#address1").type("Rua tal");
    cy.get("#address2").type("Numero tal");
    cy.get("#country").select(1);
    cy.get("#state").type("Florida");
    cy.get("#city").type("Xibiu");
    cy.get("#zipcode").type("12345-963");
    cy.get("#mobile_number").type("88888888");
    cy.get('button[data-qa="create-account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('a[href="/delete_account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Deleted!");
    cy.get(".btn.btn-primary").click();
    cy.title().should("eq", "Automation Exercise");
  });

  it("Fazer Login com usuário e senha corretos", () => {
    cy.get('a[href="/login"]').click();
    cy.get('div[class="login-form"] h2').should("be.visible");
    cy.get('input[data-qa="login-email"]').type("teste3@siegh.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[data-qa="login-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
  });

  it("Fazer Login com usuário e senha incorretos", () => {
    cy.get('a[href="/login"]').click();
    cy.get('div[class="login-form"] h2').should("be.visible");
    cy.get('input[data-qa="login-email"]').type("incorrecttest@siegh.com");
    cy.get('input[placeholder="Password"]').type("1234567");
    cy.get('button[data-qa="login-button"]').click();
    cy.get(".login-form > form > p")
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });

  it("Deslogar Usuário", () => {
    cy.get('a[href="/login"]').click();
    cy.get('div[class="login-form"] h2').should("be.visible");
    cy.get('input[data-qa="login-email"]').type("teste3@siegh.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[data-qa="login-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('a[href="/logout"]').click();
    cy.get('div[class="login-form"] h2')
      .contains("Login to your account")
      .should("be.visible");
  });

  it("Registrar um usuário com e-mail Existente", () => {
    cy.get('a[href="/login"]').click();
    cy.get('div[class="signup-form"] h2').should("be.visible");
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste3@gmail.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get(".signup-form > form > p")
      .contains("Email Address already exist!")
      .should("be.visible");
  });

  it("Formulário contate-nos", () => {
    cy.get('a[href="/contact_us"]').click();
    cy.get('div[class="col-sm-12"] h2')
      .contains("Contact")
      .should("be.visible");
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[placeholder="Email"]').type("teste2@siegh.com");
    cy.get('input[placeholder="Subject"]').type("testSubject");
    cy.get("#message").type("loremypsum");
    cy.get('input[name="upload_file"]').selectFile("./package.json");
    cy.get('input[value="Submit"]').click();
    cy.get(".status.alert.alert-success").should("be.visible");
    cy.get('a[class="btn btn-success"] span').click();
    cy.title().should("eq", "Automation Exercise");
  });

  it('Verificar a página "Test Cases"', () => {
    cy.get(".nav.navbar-nav")
      .contains("Test Cases")
      .should("be.visible")
      .click();
    cy.get('h2[class="title text-center"] b')
      .contains("Test Cases")
      .should("be.visible");
  });

  it('Verificar a página "Todos os produtos" e a página "Detalhes do Produto"', () => {
    cy.get('a[href="/products"]').click();
    cy.get(".title.text-center").contains("All Products").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get('a[href="/product_details/1"]').click();
    cy.get(".product-information")
      .contains("h2", "Blue Top")
      .should("be.visible");
    cy.get(".product-information")
      .contains("Category: Women > Tops")
      .should("be.visible");
    cy.get(".product-information").contains("Rs. 500").should("be.visible");
    cy.get(".product-information")
      .contains("Availability: In Stock")
      .should("be.visible");
    cy.get(".product-information")
      .contains("Condition: New")
      .should("be.visible");
    cy.get(".product-information").contains("Brand: Polo").should("be.visible");
  });

  it("Procurar um Produto", () => {
    cy.get('a[href="/products"]').click();
    cy.get(".title.text-center").contains("All Products").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#search_product").type("shirt");
    cy.get("#submit_search").click();
    cy.get("h2").contains("Searched Products").should("be.visible");
    cy.get(".features_items").should("be.visible");
  });

  it("Verificar assinatura na página inicial", () => {
    cy.get("h2").contains("Subscription").should("be.visible");
    cy.get("#susbscribe_email").type("teste2@siegh.com");
    cy.get('button[id="subscribe"]').click();
    cy.get(".alert-success").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  });

  it("Verificar assinatura na página do carrinho", () => {
    cy.get("li").contains(" Cart").click();
    cy.get("h2").contains("Subscription").should("be.visible");
    cy.get("#susbscribe_email").type("teste2@siegh.com");
    cy.get('button[id="subscribe"]').click();
    cy.get(".alert-success").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  });

  it("Adicionar produtos no carrinho", () => {
    cy.get("li").contains(" Products").click();
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get(".btn.btn-success.close-modal.btn-block")
      .contains("Continue Shopping")
      .click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("li").contains(" Cart").click();
    cy.get("#product-1").should("be.visible");
    cy.get("#product-2").should("be.visible");
    cy.get("#product-1").contains("Rs. 500").should("have.text", "Rs. 500");
    cy.get("#product-2").contains("Rs. 400").should("have.text", "Rs. 400");
    cy.get("#product-1 .disabled").should("have.text", "1");
    cy.get("#product-2 .disabled").should("have.text", "1");
    cy.get("#product-1 .cart_total_price").should("have.text", "Rs. 500");
    cy.get("#product-2 .cart_total_price").should("have.text", "Rs. 400");
  });

  it("Verificar a quantidade do produto no carrinho", () => {
    cy.get('a[href="/product_details/1"]').click();
    cy.get("p").contains("Availability:").should("be.visible");
    cy.get('input[id="quantity"]').type("{backspace}4");
    cy.get('button[type="button"]').contains("Add to cart").click();
    cy.wait(2000);
    cy.get("button").contains("Continue Shopping").click();
    cy.get("li").contains("Cart").click();
    cy.get("#product-1 .disabled").should("have.text", "4");
  });

  it("Fazer pedido: Registre-se durante o checkout", () => {
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="3"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get("li").contains(" Cart").click();
    cy.get("body").contains("Shopping Cart").should("be.visible");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('.text-center a[href="/login"]').click();
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste47443@siegh.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get("#id_gender1").check();
    cy.get("#password").type("123456");
    cy.get("#days").select(5);
    cy.get("#months").select(6);
    cy.get("#years").select(40);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Teste");
    cy.get("#last_name").type("Legal");
    cy.get("#company").type("sieghLTDA");
    cy.get("#address1").type("Rua tal");
    cy.get("#address2").type("Numero tal");
    cy.get("#country").select(1);
    cy.get("#state").type("Florida");
    cy.get("#city").type("Xibiu");
    cy.get("#zipcode").type("12345-963");
    cy.get("#mobile_number").type("88888888");
    cy.get('button[data-qa="create-account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('li a[href="/view_cart"]').click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get('textarea[name="message"]').type("Testando");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('input[name="name_on_card"]').type("Siegh");
    cy.get('input[name="card_number"]').type("1452125478966325");
    cy.get('input[placeholder="ex. 311"]').type("212");
    cy.get('input[placeholder="MM"]').type("08");
    cy.get('input[placeholder="YYYY"]').type("2028");
    cy.get("#submit").click();
    cy.get("body")
      .contains("Congratulations! Your order has been confirmed!")
      .should("be.visible");
    cy.get('a[href="/delete_account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Deleted!");
    cy.get(".btn.btn-primary").click();
    cy.title().should("eq", "Automation Exercise");
  });

  it("Fazer pedido: Registre-se antes do checkout", () => {
    cy.get('li a[href="/login"]').click();
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste47443@siegh.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get("#id_gender1").check();
    cy.get("#password").type("123456");
    cy.get("#days").select(5);
    cy.get("#months").select(6);
    cy.get("#years").select(40);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Teste");
    cy.get("#last_name").type("Legal");
    cy.get("#company").type("sieghLTDA");
    cy.get("#address1").type("Rua tal");
    cy.get("#address2").type("Numero tal");
    cy.get("#country").select(1);
    cy.get("#state").type("Florida");
    cy.get("#city").type("Xibiu");
    cy.get("#zipcode").type("12345-963");
    cy.get("#mobile_number").type("88888888");
    cy.get('button[data-qa="create-account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="3"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get("li").contains(" Cart").click();
    cy.get("body").contains("Shopping Cart").should("be.visible");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('li a[href="/view_cart"]').click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get('textarea[name="message"]').type("Testando");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('input[name="name_on_card"]').type("Siegh");
    cy.get('input[name="card_number"]').type("1452125478966325");
    cy.get('input[placeholder="ex. 311"]').type("212");
    cy.get('input[placeholder="MM"]').type("08");
    cy.get('input[placeholder="YYYY"]').type("2028");
    cy.get("#submit").click();
    cy.get("body")
      .contains("Congratulations! Your order has been confirmed!")
      .should("be.visible");
    cy.get('a[href="/delete_account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Deleted!");
    cy.get(".btn.btn-primary").click();
    cy.title().should("eq", "Automation Exercise");
  });

  it("Fazer pedido: Login antes do checkout", () => {
    cy.get('li a[href="/login"]').click();
    cy.get('input[data-qa="login-email"]').type("teste3@siegh.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[data-qa="login-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="3"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get("li").contains(" Cart").click();
    cy.get("body").contains("Shopping Cart").should("be.visible");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('li a[href="/view_cart"]').click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get('textarea[name="message"]').type("Testando");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('input[name="name_on_card"]').type("Siegh");
    cy.get('input[name="card_number"]').type("1452125478966325");
    cy.get('input[placeholder="ex. 311"]').type("212");
    cy.get('input[placeholder="MM"]').type("08");
    cy.get('input[placeholder="YYYY"]').type("2028");
    cy.get("#submit").click();
    cy.get("body")
      .contains("Congratulations! Your order has been confirmed!")
      .should("be.visible");
  });

  it("Remover produtos do carrinho", () => {
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="3"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get("li").contains(" Cart").click();
    cy.get("body").contains("Shopping Cart").should("be.visible");
    cy.get(".cart_quantity_delete").eq(0).click();
    cy.contains("#cart_info", "Blue Top").should("not.exist");
  });

  it("Ver categoria de produtos", () => {
    cy.get("h2").contains("Category").should("be.visible");
    cy.get('a[href="#Women"]').click();
    cy.get('a[href="/category_products/1"]').contains("Dress").click();
    cy.get("h2").contains("Women - Dress Products").should("be.visible");
    cy.get('a[href="#Men"]').click();
    cy.get('a[href="/category_products/3"]').contains("Tshirts ").click();
    cy.get("h2").contains("Men - Tshirts Products").should("be.visible");
  });

  it("Ver e carrinho Produtos de marca", () => {
    cy.get('a[href="/products"]').should("contain", "Products").click();
    cy.get("h2").contains("Brands").and("be.visible");
    cy.get('a[href="/brand_products/Polo"]').click();
    cy.get("h2").contains("Brand - Polo Products").and("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get('a[href="/brand_products/H&M"]').click();
    cy.get("h2").contains("Brand - H&M Products").and("be.visible");
  });

  it("Pesquisar produtos e verificar carrinho após o login", () => {
    cy.get('a[href="/products"]').should("contain", "Products").click();
    cy.get('input[placeholder="Search Product"]').type("Tshirt");
    cy.get('button[id="submit_search"]').click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('a[data-product-id="28"]').contains("Add to cart").click();
    cy.get("button").contains("Continue Shopping").click();
    cy.get('li a[href="/view_cart"]').contains(" Cart").click();
    cy.get('li a[href="/login"]').click();
    cy.get('input[data-qa="login-email"]').type("teste3@siegh.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[data-qa="login-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('li a[href="/view_cart"]').contains(" Cart").click();
    cy.get("#cart_info_table tbody tr").should("have.length", 2);
  });

  it("Adicionar Review em um produto", () => {
    cy.get('a[href="/products"]').should("contain", "Products").click();
    cy.get("h2").contains("All Products").should("be.visible");
    cy.get('a[href="/product_details/1"]').click();
    cy.get('a[href="#reviews"]').and("contain", "Write Your Review");
    cy.get('input[placeholder="Your Name"]').type("Siegh");
    cy.get('input[placeholder="Email Address"]').type("teste@siegh.com");
    cy.get('textarea[placeholder="Add Review Here!"]').type("Review");
    cy.get('button[id="button-review"]').and("contain", "Submit").click();
    cy.get("span").contains("Thank you for your review.").should("be.visible");
  });

  it("Adicionar ao carrinho de Itens recomendados", () => {
    cy.get("h2").contains("recommended items").and("be.visible");
    cy.get(
      ".active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    cy.get(".modal-footer > .btn").click();
    cy.get('li a[href="/view_cart"]').contains(" Cart").click();
    cy.get("#cart_info").should("contain", "Stylish Dress");
  });

  it("Verifique os detalhes do endereço na página de checkout", () => {
    cy.get('a[href="/login"]').click();
    cy.get("h2").contains("New User Signup!").should("be.visible");
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste111@siegh.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get("h2")
      .eq(0)
      .find("b")
      .should("have.text", "Enter Account Information");
    cy.get("#id_gender1").check();
    cy.get("#password").type("123456");
    cy.get("#days").select(5);
    cy.get("#months").select(6);
    cy.get("#years").select(40);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Teste");
    cy.get("#last_name").type("Legal");
    cy.get("#company").type("sieghLTDA");
    cy.get("#address1").type("Rua tal");
    cy.get("#address2").type("Numero tal");
    cy.get("#country").select(1);
    cy.get("#state").type("Florida");
    cy.get("#city").type("Xibiu");
    cy.get("#zipcode").type("12345-963");
    cy.get("#mobile_number").type("88888888");
    cy.get('button[data-qa="create-account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get("li").contains(" Products").click();
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get(".btn.btn-success.close-modal.btn-block")
      .contains("Continue Shopping")
      .click();
    cy.get('a[data-product-id="2"]').contains("Add to cart").click();
    cy.get("li").contains(" Cart").click();
    cy.get('li a[href="/view_cart"]').contains(" Cart").click();
    cy.get("li").contains("Shopping Cart").and("be.visible");
    cy.get(".btn.btn-default.check_out").click();
    cy.get(
      'ul[id="address_delivery"] li[class="address_firstname address_lastname"]'
    ).should("have.text", "Mr. Teste Legal");
    cy.get(
      'ul[id="address_delivery"] li[class="address_address1 address_address2"]'
    ).should("have.text", "sieghLTDARua talNumero tal");
    cy.get(
      'ul[id="address_invoice"] li[class="address_firstname address_lastname"]'
    ).should("have.text", "Mr. Teste Legal");
  });

  it("Baixe a fatura após o pedido de compra", () => {
    cy.get('a[href="/login"]').click();
    cy.get("h2").contains("New User Signup!").should("be.visible");
    cy.get('input[placeholder="Name"]').type("Siegh");
    cy.get('input[data-qa="signup-email"]').type("teste121@siegh.com");
    cy.get('button[data-qa="signup-button"]').click();
    cy.get("h2")
      .eq(0)
      .find("b")
      .should("have.text", "Enter Account Information");
    cy.get("#id_gender1").check();
    cy.get("#password").type("123456");
    cy.get("#days").select(5);
    cy.get("#months").select(6);
    cy.get("#years").select(40);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Teste");
    cy.get("#last_name").type("Legal");
    cy.get("#company").type("sieghLTDA");
    cy.get("#address1").type("Rua tal");
    cy.get("#address2").type("Numero tal");
    cy.get("#country").select(1);
    cy.get("#state").type("Florida");
    cy.get("#city").type("Xibiu");
    cy.get("#zipcode").type("12345-963");
    cy.get("#mobile_number").type("88888888");
    cy.get('button[data-qa="create-account"]').click();
    cy.get("h2").find("b").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get("li").eq(9).find("a").should("have.text", " Logged in as Siegh");
    cy.get('a[data-product-id="1"]').contains("Add to cart").click();
    cy.get(".btn.btn-success.close-modal.btn-block")
      .contains("Continue Shopping")
      .click();
    cy.get('li a[href="/view_cart"]').contains(" Cart").click();
    cy.get("li").contains("Shopping Cart").and("be.visible");
    cy.get(".btn.btn-default.check_out").click();
    cy.get(
      'ul[id="address_delivery"] li[class="address_firstname address_lastname"]'
    ).should("have.text", "Mr. Teste Legal");
    cy.get(
      'ul[id="address_delivery"] li[class="address_address1 address_address2"]'
    ).should("have.text", "sieghLTDARua talNumero tal");
    cy.get(
      'ul[id="address_invoice"] li[class="address_firstname address_lastname"]'
    ).should("have.text", "Mr. Teste Legal");
    cy.get('textarea[name="message"]').type("TESTE");
    cy.get(".btn.btn-default.check_out").click();
    cy.get('input[name="name_on_card"]').type("SIEGH");
    cy.get('input[name="card_number"]').type("111111111111");
    cy.get('input[placeholder="ex. 311"]').type("111");
    cy.get('input[placeholder="MM"]').type("08");
    cy.get('input[placeholder="YYYY"]').type("1965");
    cy.get("#submit").click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get(".btn.btn-primary").click();
  });

  it('Verifique a rolagem para cima usando o botão "Seta" e a funcionalidade de rolagem para baixo', () => {
    cy.get("h2").contains("Subscription").and("be.visible");
    cy.get("h2")
      .contains("Full-Fledged practice website for Automation Engineers")
      .scrollIntoView();
  });

  it('Verifique a rolagem para cima sem usar o botão "Seta" e a funcionalidade de rolagem para baixo', () => {
    cy.get("h2").contains("Subscription").and("be.visible");
    cy.get("h2")
      .contains("Full-Fledged practice website for Automation Engineers")
      .scrollIntoView();
  });
});
