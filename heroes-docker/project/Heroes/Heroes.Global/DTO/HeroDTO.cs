using Heroes.Global.Entities;
using System.Collections.Generic;

namespace Heroes.Global.DTO
{
    public class HeroDTO
    {
        private string Id { get; set; }
        private string Name { get; set; }
        private List<Image> Images { get; set; }
        private string Atack { get; set; }
        private string Defense { get; set; }

        public HeroDTO() { }

        public HeroDTO(string id, string name, List<Image> images, string atack, string defense) {
            Id = id;
            Name = name;
            Images = images;
            Atack = atack;
            Defense = defense;
        }

        public static HeroDTO Create(Hero hero) {
            return new HeroDTO(hero.Id.ToString(), hero.Name.ToString(), hero.Images, hero.Atack, hero.Defense);
        }
}
}
