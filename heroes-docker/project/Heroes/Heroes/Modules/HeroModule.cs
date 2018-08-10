using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Global.DTO;
using Heroes.Global.Entities;
using Heroes.RestDomain;
using Nancy;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Heroes.Modules
{
    public class HeroModule : NancyModule
    {
        IHeroRepository _heroRepository;

        public HeroModule(ISolutionInjectionService injection)
        {
            _heroRepository = injection.IHeroRepositoryInstance;

            Get[EndpointConfiguration.GET_ALL_HEROES.PATH] = parameters =>
            {
                try
                {
                    List<Hero> heroes = _heroRepository.GetAll();

                    var heroesJson = JsonConvert.SerializeObject(heroes);

                    return heroesJson;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return HttpStatusCode.BadGateway;
                }
            };

        }
    }
}
