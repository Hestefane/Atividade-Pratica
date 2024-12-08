# Perguntas e Respostas sobre Git

## 1. O que é git?
**Git** é um sistema de controle de versão distribuído usado para rastrear alterações em arquivos e coordenar o trabalho em projetos de desenvolvimento de software.

## 2. O que é staging area?
A **staging area** é uma área intermediária onde os arquivos modificados são preparados para serem incluídos no próximo commit. Aqui, você decide quais alterações serão salvas.

## 3. O que é working directory?
**Working directory** é o espaço no sistema de arquivos local onde podemos realizar as alterações nos arquivos de um repositório Git. Ele contém todos os arquivos do projeto e pode incluir arquivos rastreados e não rastreados.

## 4. O que é um commit?
Um **commit** é um comando que salva as alterações preparadas na staging area no histórico do repositório, com a possibilidade de reverter ou revisar essas alterações no futuro.

## 5. O que é a head no git?
A **HEAD** no git é um ponteiro que aponta o commit atualmente ativo no repositório. Ele indica qual branch ou commit está sendo editado ou visualizado no momento. Para mudar o HEAD usamos o comando `git checkout [branch]`.

## 6. O que é um merge?
**Merge** é um comando que permite combinar alterações de uma ou mais branches em uma única branch no Git.

## 7. Explique os quatro estados de um arquivo no git.
Os quatro estados de um arquivo no Git são:

- **Untracked**: Arquivos que não estavam no último commit ou que não estão sendo rastreados pelo Git.
- **Unmodified**: Arquivos não modificados desde o último commit.
- **Modified**: Arquivos modificados desde o último commit.
- **Staged**: Arquivos preparados para o commit.

## 8. Explique o comando git status.
O comando `git status` é usado para mostrar o estado atual do repositório. Ele mostra informações sobre os arquivos rastreados ou não, e os arquivos preparados para o próximo commit.

## 9. Explique o comando git log.
O comando `git log` é usado para visualizar o histórico de commits em um repositório Git. Ele mostra informações detalhadas sobre cada commit.

## 10. Explique o comando git checkout -b.
O comando `git checkout -b` é usado para criar uma nova branch e alternar para ela diretamente.

## 11. Explique o comando git reset e suas três opções.
O comando `git reset` é usado para desfazer alterações no Git. Ele pode ser usado para manipular HEAD, a staging area e o working directory, dependendo da opção escolhida:

- **--soft**: Mantém as mudanças no working directory e na staging area, apenas HEAD é movido para o commit especificado.
- **--mixed**: Remove as alterações da staging area mas mantém as mudanças no working directory.
- **--hard**: Desfaz completamente as alterações no working directory, staging area e HEAD.

## 12. Explique o comando git revert.
O comando `git revert` é usado para desfazer alterações no Git, ajustando o estado do repositório. Ele cria um novo commit que reverte as mudanças feitas no commit anterior.

## 13. Explique o comando git clone.
O comando `git clone` é usado para clonar todos os arquivos, histórico de commits e branches de um repositório original para o sistema local.

## 14. Explique o comando git push.
O comando `git push` é usado para enviar as alterações feitas em um repositório local para um repositório remoto.

## 15. Explique o comando git pull.
O comando `git pull` é usado para atualizar o repositório local com as alterações feitas no repositório remoto. Ele primeiro faz um `git fetch` e depois tenta fazer um `git merge` para integrar essas alterações na sua branch local.

## 16. Como ignorar o versionamento de arquivos no Git?
Para ignorar o versionamento de arquivos no Git, podemos usar o arquivo `.gitignore`, que especifica quais arquivos ou diretórios o Git deve ignorar e não versionar.

## 17. No terralab utilizamos as branches master ou main, develop e staging. Explique o objetivo de cada uma.
- **Master ou Main**: Essa é a branch principal que contém o código validado e funcionando corretamente.
- **Develop**: É usada como a versão de desenvolvimento do projeto, onde funcionalidades novas ou correções são implementadas.
- **Staging**: É usada para fazer testes finais de integração, testes de aceitação e verificação de funcionalidades antes de uma versão ser liberada.

## 18. Explique o comando git init.
O comando `git init` é usado para criar um novo repositório Git em um diretório.

## 19. calculadora.js a b é o comando que devo executar no terminal, não colocar no arquivo.                                      
## 20. const args = process.argv.clice(2);  
captura os argumentos da linha de comando    
## 21. console.log(parseInt(args[0]) + parseInt(args[1])); 
Realiza a soma e exibe o resultado. OBS:no lugar do a b deve-se substituir e colocar algum numero                                    
## 22. explicação de como executar o novo codigo "Feat: add conditional evaluation" e as operações que ele é capaz de realizar:
ele pode relaizar qualquer operação matemática como soma, subtração, multiplicação e divisão. Para compilar use: node calculadora.js a (simbolo da operação desejada) b