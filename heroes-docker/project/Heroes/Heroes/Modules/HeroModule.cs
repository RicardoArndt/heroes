using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Global.Entities;
using Nancy;
using System;
using System.Collections.Generic;

namespace Heroes.Modules
{
    public class HeroModule : NancyModule
    {
        IHeroRepository _heroRepository;

        public HeroModule(ISolutionInjectionService injection)
        {
            _heroRepository = injection.IHeroRepositoryInstance;

            Get["/"] = parameters =>
            {
                try
                {
                    List<Hero> produtos = _heroRepository.GetAll();
                    return HttpStatusCode.OK;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("EXCEPTION MODULE");
                    Console.WriteLine(ex.Message);
                    return HttpStatusCode.BadGateway;
                }
            };

        }
    }
}
