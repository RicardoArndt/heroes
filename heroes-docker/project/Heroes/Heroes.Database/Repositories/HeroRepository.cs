using Heroes.Database.Repositories.Interfaces;
using Heroes.Global.Entities;
using System;
using System.Collections.Generic;

namespace Heroes.Database.Repositories
{
    public class HeroRepository : BaseRepository<Hero>, IHeroRepository
    {
        private const string ENTITY = "heroes";

        public HeroRepository()
        {
            Entity = ENTITY;
        }

        public override Hero GetById(string id)
        {
            return base.GetById(id);
        }

        public override List<Hero> GetAll()
        {
            Console.WriteLine("Aqui");
            return base.GetAll();
        }
        
    }
}
