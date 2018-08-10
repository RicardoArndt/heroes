using Heroes.Global.Entities;
using System.Collections.Generic;

namespace Heroes.Database.Repositories.Interfaces
{
    public interface IHeroRepository : IBaseRepository<Hero>
    {
        List<Hero> GetAll();
        void Insert(Hero entity);
        void Delete(string documentId);
        void Update(Hero entity, string documentId);
        Hero GetById(string documentId);
    }
}
