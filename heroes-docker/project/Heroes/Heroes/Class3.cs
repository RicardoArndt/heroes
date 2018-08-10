using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heroes
{
    class Class3
    {
        public static void Main(string[] args)
        {
            HostConfiguration hostConfigs = new HostConfiguration();
            hostConfigs.UrlReservations.CreateAutomatically = true;

            NancyHost host = new NancyHost(hostConfigs, new Uri("http://localhost:7000"));
            host.Start();
            Console.WriteLine("Servidor da Web em execução ...");

            Console.ReadLine();
            host.Stop();
        }
    }
}
