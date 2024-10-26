# Iniciando um Projeto Node/Typescript do Zero.

* Comando para iniciar o package.json:

```bash
    npm init -y
```

* Comando para criar o arquivo "tsconfig.json":

```bash
    echo '{
    "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build",
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}' > tsconfig.json

```

* Adicionar os arquivos abaixo ao "package.json":

```json
            "scripts": {
                "start": "node ./build/index.js",
                "build": "tsc",
                "dev": "nodemon src/index.ts"
            }
            
```   

* Instalar as bibliotecas:

```bash
    $ npm i typescript express knex nodemon ts-node cors -D
```

* Para testar a aplicação usando o nodemon:

```json
        "scripts": {
            "start": "nodemon src/index.ts"
        },

``` 

* Caso queira usar o UUid:

```bash
    $ npm install uuid @types/uuid --save-dev
```