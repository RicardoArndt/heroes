using Heroes.Database.Repositories.Interfaces;
using Heroes.Services;
using Heroes.Services.Interfaces;

namespace Heroes.DependencyInjection.Infra.Interfaces
{
    public interface ISolutionInjectionService
    {
        //Repositórios aqui
        //Repository Instance { get; set; }
        IHeroRepository IHeroRepositoryInstance { get; set; }
        IImageService IImageServiceInstance { get; set; }
        IHeroService IHeroServiceInstance { get; set; }
    }
}
