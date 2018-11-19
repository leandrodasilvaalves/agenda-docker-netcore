
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace agenda_docker_netcore.Models
{
    public class Contato
    {
        [BsonRepresentation(BsonType.ObjectId)]
         public string Id { get; set; }

         public string Nome { get; set; }

         public ICollection<Telefone> Telefones { get; set; }
    }
}