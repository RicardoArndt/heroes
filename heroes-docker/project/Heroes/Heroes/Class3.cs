using Nancy.Hosting.Self;
using System;

namespace Heroes
{
    public class Class3
    {
        private const string API_URL = "http://localhost:7000";

        public static void Main(string[] args)
        {
            HostConfiguration hostConfigs = new HostConfiguration();
            hostConfigs.UrlReservations.CreateAutomatically = true;

            NancyHost host = new NancyHost(hostConfigs, new Uri(API_URL));
            host.Start();
            Console.WriteLine("Servidor da Web em execução ... " + API_URL);

            Console.ReadLine();
            host.Stop();
        }
    }
}
