using Heroes.Global.Entities;
using System.Collections.Generic;

namespace Heroes.Services.Interfaces
{
    public interface IHeroService
    {
        void SaveHero(Hero hero);
        List<Hero> GetAllWithImages();
        Hero GetHero(string id);
        void UpdateHero(Hero hero, string heroId);
        void DeleteHero(string id);
    }
}
