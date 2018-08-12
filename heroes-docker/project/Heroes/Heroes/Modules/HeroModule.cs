using Heroes.Database.Repositories.Interfaces;
using Heroes.DependencyInjection.Infra.Interfaces;
using Heroes.Global.DTO;
using Heroes.Global.Entities;
using Heroes.RestDomain;
using Nancy;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Nancy.ModelBinding;

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

            Put[EndpointConfiguration.UPDATE_HERO.PATH] = parameters =>
            {
                try
                {
                    var response = this.Bind<HeroDTO>();
                    Hero hero = new Hero(response.Name, response.Images, response.Atack, response.Defense);
                    _heroRepository.Update(hero, response.Id);

                    return HttpStatusCode.OK;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return HttpStatusCode.BadGateway;
                }
            };

            Post[EndpointConfiguration.INSERT_HERO.PATH] = parameters =>
            {
                try
                {
                    var response = this.Bind<HeroDTO>();
                    Hero hero = new Hero(response.Name, response.Images, response.Atack, response.Defense);
                    _heroRepository.Insert(hero);

                    return HttpStatusCode.OK;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return HttpStatusCode.BadGateway;
                }
            };

            Get[EndpointConfiguration.GET_HERO_BY_ID.PATH] = parameters =>
            {
                try
                {
                    var obj = _heroRepository.GetById(parameters.id);

                    var json = JsonConvert.SerializeObject(obj);

                    return json;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return HttpStatusCode.BadGateway;
                }
            };

            Delete[EndpointConfiguration.DELETE_HERO.PATH] = parameters =>
            {
                try
                {
                    var id = parameters.id;
                    _heroRepository.Delete(id);

                    return HttpStatusCode.OK;
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
