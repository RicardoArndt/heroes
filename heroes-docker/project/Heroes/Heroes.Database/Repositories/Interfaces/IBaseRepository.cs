using Heroes.Global.Entities.Interfaces;
using System.Collections.Generic;

namespace Heroes.Database.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : IEntity<T>
    {
        List<T> GetAll();
        void Insert(T entity);
        void Delete(string documentId);
        void Update(T entity, string documentId);
        T GetById(string documentId);
    }
}
