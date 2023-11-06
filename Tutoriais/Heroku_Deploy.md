# PASSO A PASSO PARA CRIAR UM DEPLOY NO HEROKU: 

## 1º: No site do Heroku clicar em "new" > "create neew app" > Digitar o nome do APP > clicar em "create app".

## 2º: Iniciar um git local seguindo o passo a passo na página que aparecerá a seguir na tela do Heroku;
Exemplo:
```bash
        $ git init
        $ heroku git:remote -a NOME-DO-APP
```

## 3º: Na raiz do Projeto local criar o arquivo "Procfile" com o comando:
                        
                        web: npm start

## 4º: No arquivo "package.json", na seção "scripts" configurar o arquivo assim:

```json
            "scripts": {
                "start": "node ./build/index.js",
                "build": "tsc",
                "dev": "nodemon src/index.ts"
            }
            
```
## 5º Por último, executar os comandos de Deploy para o Heroku. A cada nova alteração este comando deve ser repetido:

```bash
        $ git add .
        $ git commit -am "make it better"
        $ git push heroku master
```