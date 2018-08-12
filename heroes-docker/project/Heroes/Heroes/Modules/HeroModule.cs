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
using static System.Net.Mime.MediaTypeNames;
using System.Text.RegularExpressions;

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

                    var dir = Directory.GetParent(Directory.GetCurrentDirectory());
                    var imageId = "";

                    heroes.ForEach(hero =>
                    {
                        imageId = hero.Images;

                        if (imageId != "")
                        {
                            byte[] reader = File.ReadAllBytes(dir.ToString() + @"\Images\" + imageId);

                            var convert = Convert.ToBase64String(reader);

                            string pattern = @"(dataimage/jpegbase64)";
                            string replace = "data:image/jpeg;base64,";
                            var r = Regex.Replace(convert, pattern, replace);

                            hero.Images = r;
                        }
                    });

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
                    var dir = Directory.GetParent(Directory.GetCurrentDirectory());
                    Guid imageId = Guid.NewGuid();

                    var replace = response.Images.Replace(":", "").Replace(";", "").Replace(",", "");

                    byte[] data = Convert.FromBase64String(replace);

                    File.WriteAllBytes(dir.ToString() + @"\Images\" + imageId, data);

                    Hero hero = new Hero(response.Name, imageId.ToString(), response.Atack, response.Defense);
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

                    var dir = Directory.GetParent(Directory.GetCurrentDirectory());
                    Guid imageId = Guid.NewGuid();

                    var replace = response.Images.Replace(":", "").Replace(";", "").Replace(",", "");

                    byte[] data = Convert.FromBase64String(replace);

                    File.WriteAllBytes(dir.ToString() + @"\Images\" + imageId, data);

                    Hero hero = new Hero(response.Name, imageId.ToString(), response.Atack, response.Defense);
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
                    var hero = _heroRepository.GetById(parameters.id);

                    var dir = Directory.GetParent(Directory.GetCurrentDirectory());
                    var imageId = "";

                    imageId = hero.Images;

                    if (imageId != "")
                    {
                        byte[] reader = File.ReadAllBytes(dir.ToString() + @"\Images\" + imageId);

                        var convert = Convert.ToBase64String(reader);

                        string pattern = @"(dataimage/jpegbase64)";
                        string replace = "data:image/jpeg;base64,";
                        var r = Regex.Replace(convert, pattern, replace);

                        hero.Images = r;
                    }


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
                    var id = parameters.id;
                    var hero = _heroRepository.GetById(parameters.id);

                    var dir = Directory.GetParent(Directory.GetCurrentDirectory());
                    var imageId = "";

                    imageId = hero.Images;

                    if (imageId != "")
                    {
                        File.Delete(dir.ToString() + @"\Images\" + imageId);
                    }

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
