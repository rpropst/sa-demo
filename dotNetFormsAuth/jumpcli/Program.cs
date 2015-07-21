using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Janrain;

namespace jumpcli
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("JUMP cli");

            Config myApp = new Config("https://xxx.janraincapture.com", "REDACTED", "REDACTED");

            Entity e = new Entity(myApp);
            string result = e.Count();
            Console.WriteLine("Total count: " + result);

            // result = e.Get("7751a187-9b3a-470b-a404-76731cafa9ad", Entity.IdType.UUID);

            // Console.WriteLine("User record for uuid->{0}: {1}", "", result);

            Authenticater a = new Authenticater(myApp);
            string token = a.GetToken("abc123", "farmer");

            Console.ReadLine();
        }
    }
}
