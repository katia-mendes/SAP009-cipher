# Cifra de César

[Acesso a aplicação:](https://katia-mendes.github.io/SAP009-cipher/)
![Screen Aplicação](src/imgJu.png)
## Índice/ Criptografia para as Julietes

* [1. Apresentação](#1-Apresentação)
* [2. Um pouco de história](#2-UmPoucoDeHistória)
* [3. Funcionalidades](#3-Funcionalidades)
* [4. Desenvolvimento](#5-Desenvolvimento)
* [5. Definição dos usuários](#5-DefiniçãoDosUsuários)
* [6. Limitações da aplicação](#6-LimitaçõesDaAplicação)
***


## 1. Apresentação

Em um multiverso, onde a história de Romeu e Julieta pode ter um final feliz a Criptografia pode ser de grande ajuda para enviar românticas mensagens secretas...
E você já sentiu dificuldades em expressar os seus sentimentos por algum motivo? Como vergonha? Medo? Ou insegurança?
Se a sua resposta for sim, o "Criptografia para Julietes" é perfeito para você!!!
Para utiliza - lo não existe limite de idade, gênero, ou qualquer tipo de distinção. Assim como o amor é livre a 'Criptografia para as Julietes' é para todes os públicos e para todes os apaixonados!!!


## 2. Um pouco de história

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, comoxd
a cifra de Vigenère, e tem aplicação no sistema ROT13.


## 3. Funcionalidades 

A 'Criptografia para as Julietes', exibe ao usuário a decisão de cifrar ou decifrar uma mensagem, ao clicar no botão correspondente, o usuário deverá informar o deslocamento/chave (um número inteiro, positivo) correspondente à cifragem em questão.

Ao digitar a mensagem, automaticamente o resultado da cifragem/descifragem será exibido no campo Resultado logo abaixo do campo de texto.

A aplicação utiliza a chave numérica para deslocar a letra informada até a letra correspondente do alfabeto realizando o processo de cifrar e descifrar através das funções encode e decode respectivamente.


## 4. Desenvolvimento

UX: definição do usuário, planejamento da interface e funcionalidades.
Sequência Lógica: planejamento da sequência lógica necessária para desenvolvimento do código para esta aplicação.
HTML: desenvolvimento do HTML base para a aplicação.
Javascript: desenvolvimento do código Javascript e primeiros testes de funcionamento.
CSS: desenvolvimento do CSS.
Revisão: revisão do código, implementações necessárias HTML, CSS, JavaScript.
Testes: desenvolvimento de testes para validar o funcionamento esperado da aplicação


## 5. Definição dos usuários

Através da Introdução adotada, consideram-se que os usuários são todes os públicos e para todes os apaixonados!!!  

Dessa forma, o desenvolvimento da interface foi realizado,procurando proporcionar uma usabilidade intuitiva e simples, para que o usuário possa fazer uso da aplicação com facilidade e rapidez.

A escolha de ícones e fontes foi realizada pensando em proporcionar a sensação de mistério e segredo ao usuário no contexto da festa surpresa, mantendo a legibilidade e auxiliando visualmente o entendimento do uso intuitivo da aplicação.

 
## 6. Limitações da aplicação

São características que ainda não foram tratadas, mas funcionarão em próximas atualizações.

Não criptografa/descriptografa números e outros caracteres, somente letras maiúsculas;

Não aceita deslocamento negativo.
