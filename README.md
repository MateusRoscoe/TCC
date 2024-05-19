# TCC

## Executando os testes

- Inicialize o git submodules

```sh
git submodule init
```

- Inicialize os containers no docker-compose, inicializando o serviço que deseja
  - Para isolar variáveis inicialize apenas uma versão da implementação de cada vez.

```sh
docker compose -f "docker-compose.yaml" up -d --build
```

- Execute os testes com o K6, caso esteja executando os containers em outra máquina trocar o host.
  - O teste irá limpar o banco antes de começar a execução

  - Javascript

    ```sh
    HOST=127.0.0.1:3000 sh ./Testing/average-load.sh
    ```

  - Rust

    ```sh
    HOST=127.0.0.1:8000 sh ./Testing/average-load.sh
    ```

  - Python

    ```sh
    HOST=127.0.0.1:4000 sh ./Testing/average-load.sh
    ```
