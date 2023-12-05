
# COMO CRIAR UM CONTAINER PARA EXECUTAR O PGADMIN4 E USÁ-LO PARA EDITAR O BANCO DE DADOS POSTGRESQL:

Obs.: Este container deve estar na mesma rede do container do postgreSQL.

```bash
    $ docker run --name pgadmin4 --network=fontenelesat_fontenelesat -p 15432:80 -e PGADMIN_DEFAULT_EMAIL=othon.ab@hotmail.com -e PGADMIN_DEFAULT_PASSWORD=alguma_senha -d dpage/pgadmin4

```