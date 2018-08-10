using Heroes.Global.Entities.Interfaces;
using MongoDB.Driver;
using System;

namespace Heroes.Database.Context
{
    public class DBContext<T> where T : IEntity<T>
    {
        protected static IMongoClient client = new MongoClient("mongodb://localhost:27017");
        protected static IMongoDatabase database = client.GetDatabase("angular");

        public IMongoCollection<T> getCollection(string entity)
        {
            return database.GetCollection<T>(entity);
        }
    }
}
