using Heroes.Global.Entities;
using Heroes.Global.Entities.Interfaces;
using System.Collections.Generic;

namespace Heroes.Global.DTO
{
    public class HeroDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Image> Images { get; set; }
        public int Atack { get; set; }
        public int Defense { get; set; }

        public HeroDTO() { }

        public HeroDTO(string name, List<Image> images, int atack, int defense) {
            Name = name;
            Images = images;
            Atack = atack;
            Defense = defense;
        }

        public HeroDTO Create(Hero hero) {
            return new HeroDTO(hero.Name.ToString(), hero.Images, hero.Atack, hero.Defense);
        }
}
}
