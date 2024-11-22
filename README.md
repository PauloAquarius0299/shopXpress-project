# ShopXpress ecommerce
![Captura de Tela (317)](https://github.com/user-attachments/assets/2fb64258-b236-44a1-8fd9-da3a99967399)
Criando projeto fullstack com TypeScript, Stripe, Docker, MongoExpress Nestjs e Reactjs  
## Introdução 
Nesse projeto que desenvolvi o backend com o framework Nestjs é muito parecido com o Spring Boot do Java especialmente no que diz respeito à estrutura e abordagem para construir aplicativos. O Nestjs Utiliza uma arquitetura modular onde você pode organizar seu código em módulos independentes, assim como o Spring Boot. Cada módulo pode conter controladores, serviços e outros componentes relacionados a uma funcionalidade específica.

No projeto organizei os modulos em usuários, produtos e stripe (pagamento), onde em services está organizado toda logica de programação com NodeJs/TypeScript, em controllers as requisições HTTP e Schema onde define a estrutura dos dados que serão armazenados em uma coleção do MongoDB.

No frontend utilizei o framework Reactjs para construir os componentes e reuniliza-los na interface, com material-ui estilizei de forma pratica e simples a interface em qualquer tipo de tela. Organizei os componentes para ouvir as requisições nas portas especificas e efetuar o que foi solicitado. Organizei as paginas e apliquei os testes unitários para evitar qualquer problema futuramente.

Com docker crie um file chamado docker-compose usado para definir e executar dois serviços relacionados ao banco de dados MongoDB e uma interface web chamada Mongo Express para gerenciar esse banco de dados.
## Ferramentas 
* TypeScript
* Nestjs
* ReactJs
* Material-UI
* MongoExpress
* Docker
* Stripe
