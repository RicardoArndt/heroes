using Heroes.Database.Repositories;
using Heroes.DependencyInjection.Infra.Interfaces;

namespace Heroes.GlobalApi
{
    class InjectionConfigurator
    {
        public static ISolutionInjectionService RestGlobalConfiguration(ISolutionInjectionService injection)
        {
            injection.IHeroRepositoryInstance = new HeroRepository();
            return injection;
        }
    }
}
