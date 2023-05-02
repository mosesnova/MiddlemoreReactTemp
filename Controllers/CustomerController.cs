using Microsoft.AspNetCore.Mvc;
using MiddlemoreReactTemp.Models;

namespace MiddlemoreReactTemp.Controllers
{
    [Produces("application/json")]
    [Route("[controller]")]
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly TalentDatabaseContext _context;

        public CustomerController(TalentDatabaseContext context)
        {
            _context = context;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
        public IEnumerable<Customer> Get()
        {
            Customer c1 = new Customer();
            c1.Id = 1;
            c1.Name = "Moses Nova";
            c1.Address = "28 Tiverton";
            Customer c2 = new Customer();
            c2.Id = 2;
            c2.Name = "Test";
            c2.Address = "Test";
            List<Customer> customers = new List<Customer>();
            customers.Add(c1);
            customers.Add(c2);

            return _context.Customers.ToList(); ;
        }
    }
}
