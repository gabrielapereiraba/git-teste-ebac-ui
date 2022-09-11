/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
   beforeEach( () => {
       cy.visit('minha-conta')
       cy.fixture('perfil').then(dados =>{
       cy.login(dados.usuario, dados.senha)
    })
    
   });
   
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento ('Gabriela', 'Barreto', 'Google', 'Brasil', 'Av. Brasil', '1100', 'São Paulo', 'São Paulo', '01000100', '11998988989', 'email@dominio.com')
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
});