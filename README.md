# COMANDOS DO DOCKER.................................
docker build -t pyllo:1.0.0 .  (criando imagem a partir de um dockerfile)
docker run -d -p 8080:80 --name powerup pyllo:1.0.0      (criar e iniciar contêiner com porta)
docker system prune -a         (excluir tudo -> pode-se acrescentar -f)
usermod -aG docker ${USER}     (tirar o sudo do docker)
docker-compose build           (reconstrói as imagens dos serviços)
docker-compose logs            (exibir logs)
docker-compose config          (mostra configuração do docker-compose.yml)
docker-compose push            (enviar imagens para repositório)

# volumes...
docker volume ls               (listar volumes)
docker volume prune -a         (excluir todos volumes -> pode-se acrescentar -f)

# redes
docker network prune           (excluir as redes não utilizadas -> pode-se acrescentar -f)

# imagens...
docker image prune -a          (excluir todas imagens não utilizadas -> pode-se acrescentar -f)
docker images                  (ver imagens)
docker rmi id                  (remover imagens)

# containers...
docker rm id                   (exclusão normal container)
docker rm -f id                (forçar a exclusão de container sem o stop)
docker rm $(docker ps -q)      (remove todos containers em funcionamento)
docker rm $(docker ps -a -q)   (remove todos os contaneires parados e executando)
docker stop id                 (parar a execução do container)
docker start id                (executar o container)
docker ps                      (mostrar containers funcionando)
docker ps -a                   (mostrar containers funcionando e parados)
docker logs id_container       (ver logs container)
docker inspect id_container    (inspecionar o container)
docker rename meu-contêiner novo-nome-contêiner  (renomear container)
docker-compose up              (cria e inicia contêineres do arquivo 'compose.yml')
docker-compose stop            (parar contêineres)
docker-compose restart         (parar e reiniciar contêineres)
docker-compose down            (parar e remover contêineres)
docker-compose ps              (mostrar contêineres em execução)
docker-compose pause           (pausar o contêiner)