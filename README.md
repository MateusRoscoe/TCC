# TCC

## Executando os testes

- Inicialize o git submodules

```sh
git submodule init
```

- Inicialize os containers no docker-compose, inicializando o serviço que deseja
  - Para isolar variáveis inicialize apenas uma versão da implementação de cada vez. Para escolher qual serviço executar altere o scale para 1

```sh
docker compose -f "docker-compose.yaml" up -d --build --scale rust-shortener=0 --scale javascript-shortener=0
```

- Execute os testes com o K6, caso esteja executando os containers em outra máquina trocar o host.
  - O teste irá limpar o banco antes de começar a execução

  - Javascript

    ```sh
    cd ./Testing
    npm i
    HOST=127.0.0.1:3000 sh average-load.sh
    HOST=127.0.0.1:3000 sh breakpoint.sh
    ```

  - Rust

    ```sh
    cd ./Testing
    npm i
    HOST=127.0.0.1:8000 sh average-load.sh
    HOST=127.0.0.1:8000 sh breakpoint.sh
    ```

  - Python

    ```sh
    cd ./Testing
    npm i
    HOST=127.0.0.1:4000 sh average-load.sh
    HOST=127.0.0.1:4000 sh breakpoint-load.sh
    ```
