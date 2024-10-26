# Passo a passo para instalar, criar e executar testes em Jest:

## Passo 1: Instalação:
```bash
npm i jest @types/jest ts-jest supertest
```

## Passo 2: Criação do Arquivo "jest.config.js":
```bash
echo '{
    module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
}' > jest.config.js
```

### Passo 3: Adicionar Script no Package.json:
```json
    "scripts": {   "test": "jest", },
```
* Obs: É necessário alterar o "rootDir" para que o typescript reconheça que exitem arquivos fora da pasta "src":
  
```json
    "rootDir": "./src" => "rootDir": "./",
```

### Comando para rodar os testes:
```bash
npm test
```
### Comando para rodar um teste específico:
```bash
npx jest tests/nomeDoArquivo.spec.ts
```