using Heroes.Global.Entities.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Heroes.Global.Entities
{
    /// <summary>
    /// Entidade Hero que implementa um IEntity<Hero>
    /// </summary>

    public class Hero : IEntity<Hero>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("images")]
        public List<Image> Images { get; set; }
        [BsonElement("atack")]
        public int Atack { get; set; }
        [BsonElement("defense")]
        public int Defense { get; set; }

        public Hero() { }

        public Hero(string name, List<Image> images, int atack, int defense)
        {
            Name = name;
            Images = images;
            Atack = atack;
            Defense = defense;
        }
    }
}
