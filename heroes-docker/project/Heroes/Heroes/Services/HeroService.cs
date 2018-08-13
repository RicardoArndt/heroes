using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Global.Entities;
using Heroes.Services.Interfaces;
using System;
using System.Collections.Generic;

namespace Heroes.Services
{
    public class HeroService : IHeroService
    {
        IHeroRepository _heroRepository;
        IImageService _imageService;

        public HeroService(ISolutionInjectionService injection)
        {
            _heroRepository = injection.IHeroRepositoryInstance;
            _imageService = injection.IImageServiceInstance;
        }

        public void SaveHero(Hero hero)
        {
            if (!string.IsNullOrEmpty(hero.Images))
            {
                var imageId = Guid.NewGuid().ToString();
                _imageService.SendImage(hero.Images, imageId);
                hero.Images = imageId;
            }
            _heroRepository.Insert(hero);
        }

        public List<Hero> GetAllWithImages()
        {
            var heroes = _heroRepository.GetAll();

            heroes.ForEach(data =>
            {
                data.Images = _imageService.ReadImage(data.Images);
            });

            return heroes;
        }

        public Hero GetHero(string id)
        {
            var hero = _heroRepository.GetById(id);

            var image = _imageService.ReadImage(hero.Images);

            hero.Images = image;

            return hero;
        }

        public void UpdateHero(Hero hero, string heroId)
        {
            if (!string.IsNullOrEmpty(hero.Images)) {
                var imageId = _heroRepository.GetById(heroId).Images;

                if (!string.IsNullOrEmpty(imageId))
                {
                    _imageService.DeleteImage(imageId);
                } 
                _imageService.SendImage(hero.Images, imageId);

                hero.Images = imageId;
            }

            _heroRepository.Update(hero, heroId);
        }

        public void DeleteHero(string id)
        {
            var imageId = _heroRepository.GetById(id).Images;

            if (!string.IsNullOrEmpty(imageId))
            {
                _imageService.DeleteImage(imageId);
            }

            _heroRepository.Delete(id);
        }
    }
}
