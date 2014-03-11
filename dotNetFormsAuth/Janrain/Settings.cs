using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Janrain
{
    public class Settings
    {
        private Config _config;

        public Settings(Config config)
        {
            if(config != null)
                _config = config;
        }

        public void Create(string key, string value, string targetClientId)
        {

        }

        public void Update(string key, string value, string targetClientId)
        {
            // The Janrain API does updates through the /settings/set command
            // which is the same command used to create settings
            this.Create(key, value, targetClientId);
        }

        public void GetKeys(string targetClientId)
        {

        }

        public void Remove(string key, string targetClientId, bool removeGlobal)
        {

        }

        public void GetValue(string key, string targetClientId)
        {

        }

    }
}
