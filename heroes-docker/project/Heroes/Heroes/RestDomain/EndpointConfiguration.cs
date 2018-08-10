using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heroes.RestDomain
{
    class EndpointConfiguration
    {
        public string PATH { get; set; }

        private static string ROOT = "api";
        private static string HEROES = "heroes";
        private static string INSERT = "insert";
        private static string DELETE = "delete";
        private static string GET_BY_ID = "buscaToId";
        private static string UPDATE = "update";

        public static EndpointConfiguration GET_ALL_HEROES = new EndpointConfiguration(ROOT, HEROES);
        public static EndpointConfiguration GET_PRODUTO_BY_ID = new EndpointConfiguration(ROOT, HEROES, GET_BY_ID, "{id}");
        public static EndpointConfiguration INSERT_HERO = new EndpointConfiguration(ROOT, HEROES, INSERT);
        public static EndpointConfiguration DELETE_HERO = new EndpointConfiguration(ROOT, HEROES, DELETE, "{documentId}");
        public static EndpointConfiguration UPDATE_HERO = new EndpointConfiguration(ROOT, HEROES, UPDATE);

        private EndpointConfiguration(params string[] path)
        {
            path.ToList()
                .ForEach(p =>
                {
                    var current = p.Trim('/');
                    PATH = string.Format("{0}/{1}", PATH, p);
                });
        }
    }
}
