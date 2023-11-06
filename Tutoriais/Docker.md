# PARA CRIAR IMAGEM E CONTAINER DO BACKEND:

## CRIA IMAGEM BACKEND:
```bash
      $ docker build -t backend_image .
```


## EXECUTA CONTAINER:
```bash
        $ docker run --name container_backend -p 3003:3003 -d backend_image
```

	
## A OPÇÃO ABAIXO CRIA UM VOLUME (-V) PARA QUE HAJA O COMPARTILHAMENTO ENTRE OS DIRETÓRIOS PC/CONTAINER:
```bash
        $ docker run --name container_backend -p 3003:3003 -v .:/usr/src/app -d backend_image
```


**-v** 
Refere-se a 'volume', indica o início do comando para criar o volume.
**.:/usr/src/app**
 O ponto (.) é uma abreviação que indica o diretório atual no PC, os dois pontos (:) indicam que a partir dali haverá a referência sobre onde deverá estar o diretório **no container**, seguido pelo próprio diretório. Este deverá ser o mesmo que está no arquivo *'Dockerfile'* na seção *'WORKDIR'*.  

*****************************************************************************************************

# PARA CRIAR IMAGEM E CONTAINER DO FRONTEND:

## CRIA IMAGEM FRONTEND:
```bash
        $ docker build -t frontend_image .
```


## EXECUTA CONTAINER:
```bash
        $ docker run --name container_frontend -p 3000:3000 -v .:/usr/src/app -d frontend_image
```


*****************************************************************************************************

#   COMANDOS PARA FAZER O BACKUP DE UM BANCO DE DADOS POSTGRES JÁ EXISTENTE NA MÁQUINA LOCAL, COPIAR, CLONAR E IMPORTAR ESTE BANCO DE DADOS PARA O CONTAINER:

## CRIA BACKUP DE RECUEPRAÇÃO DO DB.
```bash
        $ pg_dump -U postgres -W -F t peforce > backup.tar
```



## DOCKERFILE PARA A IMAGEM DO BANCO DE DADOS:
        FROM postgres:latest
        ADD backup.tar /docker-entrypoint-initdb.d/

## CRIA IMAGEM POSTGRES:
```bash
        $ docker build -t postgres_image .
```


## EXECUTA CONTAINER e BAIXA IMAGEM:
```bash
        $ docker run --name container_postgres -e POSTGRES_PASSWORD=****** -p 5432:5432 -d postgres
```


## COPIA BACKUP:
```bash
        $ docker cp backup.tar container_postgres:/tmp
```


## CRIA O NOVO BANCO DE DADOS:
```bash
        $ docker exec container_postgres psql -U postgres -c "CREATE DATABASE peforce;"

```


## IMPORTA O DUMP
```bash
        $ docker exec -it container_postgres bash -c "pg_restore -U postgres -d peforce < /tmp/backup.tar"
```



*****************************************************************************************************

#   PARA CRIAR A REDE INTERNA NO DOCKER:
```bash
        $ docker network create **nome-da-rede**
```

#   PARA INCLUIR O CONTAINER NA NOVA REDE CRIADA:
```bash
        $ docker network connect minha-rede container_frontend
```



*****************************************************************************************************

	




