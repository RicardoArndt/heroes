using Heroes.Database.Context;
using Heroes.Database.Repositories.Interfaces;
using Heroes.Global.Entities.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace Heroes.Database.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : IEntity<T>
    {
        public static string Entity = "heroes";
        private static readonly DBContext<T> _context = new DBContext<T>();
        private IMongoCollection<T> _collection = _context.getCollection(Entity);

        public virtual List<T> GetAll()
        {
            return _collection.Find<T>(new BsonDocument()).ToList();
        }

        public virtual void Insert(T entity)
        {
            _collection.InsertOne(entity);
        }

        public virtual void Delete(string documentId)
        {
            var filter = Builders<T>.Filter.Eq("Id", documentId);

            _collection.DeleteOne(filter);
        }

        public virtual void Update(T entity, string documentId)
        {
            var properties = entity.GetType().GetProperties();

            UpdateDefinition<T> update = null;
            
            foreach (var p in properties)
            {
                update = Builders<T>.Update.Set(p.Name, entity.GetType().GetProperty(p.Name).GetValue(entity));
                if (p.Name != "Id")
                {
                    _collection.UpdateOne(t => t.Id == documentId, update);
                }
            };
        }

        public virtual T GetById(string documentId)
        {
            var filter = Builders<T>.Filter.Eq("Id", documentId);

            return _collection.Find(filter).First();
        }
    }
}
