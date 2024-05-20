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

- Instale o K6
- Instale as dependências

    ```sh
    cd ./Testing
    npm i
    ```

- Execute o script de teste desejado
