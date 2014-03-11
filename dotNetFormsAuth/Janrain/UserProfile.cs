using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Janrain
{
    public class Address
    {
        public string Company { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateAbbreviation { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
    }

    public class UserProfile
    {
        public string GivenName { get; set; }
        public string FamilyName { get; set; }
        public string Email { get; set; }
        public string CurrentLocation { get; set; }
        public DateTime LastLogin { get; set; }
        public string DisplayName { get; set; }
        public string Uuid { get; set; }
        public string Gender { get; set; }
        public DateTime? Birthday { get; set; }
        public Address PrimaryAddress { get; set; }
    }
}
