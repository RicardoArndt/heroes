using Heroes.Database.Repositories.Interfaces;
using Heroes.Global.Entities;

namespace Heroes.Database.Repositories
{
    public class HeroRepository : BaseRepository<Hero>, IHeroRepository
    {
        private const string ENTITY = "heroes";

        public HeroRepository() : base("heroes") { } 
    }
}
