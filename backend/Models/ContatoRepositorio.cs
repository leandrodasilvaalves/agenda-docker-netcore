using System.Collections.Generic;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace agenda_docker_netcore.Models
{
    public class ContatoRepositorio
    {
        private const string colecaoNome = "contatos";
        private readonly IMongoDatabase _database;
        
        public ContatoRepositorio(IOptions<MongoConfig> configuracoes)
        {
            var client = new MongoClient(configuracoes.Value.ConnectionString);
            if (client != null)
                _database = client.GetDatabase(configuracoes.Value.Database);

        }

        public IMongoCollection<TDocument> CollectionMongo<TDocument>(string collectionName) 
            => _database.GetCollection<TDocument>(collectionName);       

        public ICollection<Contato> ListarTodos() => CollectionMongo<Contato>(colecaoNome).Find(x => true).ToList();
        
        public Contato ObterPorNome(string nome) 
            => CollectionMongo<Contato>(colecaoNome).Find(x => x.Nome.Contains(nome)).FirstOrDefault();

        public void Incluir(Contato contato){            
            contato.Id = ObjectId.GenerateNewId().ToString();
            CollectionMongo<Contato>(colecaoNome).InsertOne(contato);
        }

        public void Atualizar(Contato contato){
            CollectionMongo<Contato>(colecaoNome).ReplaceOne(x => x.Id.Equals(contato.Id), contato);
        }

        public void Excluir(string id){
            CollectionMongo<Contato>(colecaoNome).DeleteOne(x => x.Id.Equals(id));
        }
    }
}