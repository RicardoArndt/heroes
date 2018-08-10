using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;

namespace Heroes.DependencyInjection.Infra
{
    public class SolutionInjectionService : ISolutionInjectionService
    {
        // Repositórios aqui
        // Repository Instance { get; set; }
        public IHeroRepository IHeroRepositoryInstance { get; set; }
    }
}
