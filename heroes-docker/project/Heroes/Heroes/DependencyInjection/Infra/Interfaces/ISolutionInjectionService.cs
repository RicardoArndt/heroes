using Heroes.Database.Repositories.Interfaces;

namespace Heroes.DependencyInjection.Infra.Interfaces
{
    public interface ISolutionInjectionService
    {
        //Repositórios aqui
        //Repository Instance { get; set; }
        IHeroRepository IHeroRepositoryInstance { get; set; }
    }
}
