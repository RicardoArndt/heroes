using Heroes.Database.Repositories;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Services;

namespace Heroes.GlobalApi
{
    class InjectionConfigurator
    {
        public static ISolutionInjectionService RestGlobalConfiguration(ISolutionInjectionService injection)
        {
            injection.IHeroRepositoryInstance = new HeroRepository();
            injection.IImageServiceInstance = new ImageService();
            injection.IHeroServiceInstance = new HeroService(injection);
            return injection;
        }
    }
}
