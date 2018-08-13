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
using System.IO;
using System.Text.RegularExpressions;
using Heroes.Services;
using Heroes.Services.Interfaces;

namespace Heroes.Modules
{
    public class HeroModule : NancyModule
    {
        IHeroService _heroService;

        public HeroModule(ISolutionInjectionService injection)
        {
            _heroService = injection.IHeroServiceInstance;

            Get[EndpointConfiguration.GET_ALL_HEROES.PATH] = parameters =>
            {
                try
                {
                    List<Hero> heroes = _heroService.GetAllWithImages();

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
                    _heroService.UpdateHero(hero, response.Id);

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

                    _heroService.SaveHero(hero);

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
                    var hero = _heroService.GetHero(parameters.id);

                    var heroesJson = JsonConvert.SerializeObject(hero);

                    return heroesJson;
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
                    _heroService.DeleteHero(parameters.id);
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
