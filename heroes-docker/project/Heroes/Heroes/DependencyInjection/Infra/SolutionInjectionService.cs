using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Services.Interfaces;

namespace Heroes.DependencyInjection.Infra
{
    public class SolutionInjectionService : ISolutionInjectionService
    {
        // Repositórios aqui
        // Repository Instance { get; set; }
        public IHeroRepository IHeroRepositoryInstance { get; set; }
        public IImageService IImageServiceInstance { get; set; }
        public IHeroService IHeroServiceInstance { get; set; }
    }
}
