# Cadastro de carro

**RF**

Deve ser possivel cadastrar um novo carro

Deve ser possivel listar todas as categorias

**RN**

Não de ver possivel cadastrar um carro com uma plca já existente.

Não deve ser possivel alterar a place de um carro já cadastrado.

O Carro deve ser cadastrado com disponibilidade por padrão.

O usuário responsavel pelo cadastrado deve ser usuário administrador.

# Listagem de carros

**RF**

Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**

O usuário não precisa estar logado no sistema

# Cadastro de especificação do carro

**RF**

Deve ser possivel cadastrar um especificação do carro.

Deve ser possivel listar todas as especificações

**RN**

Não deve ser possivel não cadastrar uma espeficicação para um carro inexistente.

Não deve possivel cadastrar um especificação já existente para o mesmo carro.

O usuário responsavel pelo cadastrado deve ser usuário administrador.


# Cadastro de imagens do carro

**RF**

Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
utilizar o multer para upload das imagens

**RN**

O usuário pode cadastar mais de uma imagem para o mesmo carro

O usuário responsavel pelo cadastrado deve ser usuário administrador.


# Agendamento de aluguel

**RF**
Deve ser possivel cadastrar um aluguel



**RN**

O aluguel deve ter duração minima de 24 horas

Não deve ser possivel alugar um novo alguel caso já exista um aberto para o usuário

Não deve ser possivel alugar um novo alguel caso já exista um aberto para o carro