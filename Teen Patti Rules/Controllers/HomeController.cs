using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Teen_Patti_Rules.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Rules()
        {
            return View();
        }

        public ActionResult HierarchyRule()
        {
            return View();
        }


        public ActionResult Scenarios()
        {
            return View();
        }

        public ActionResult CommonRules()
        {
            return View();
        }
    }
}
