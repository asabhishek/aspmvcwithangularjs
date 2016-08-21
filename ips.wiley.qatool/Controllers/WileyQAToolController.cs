using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ips.wiley.qatool.Models;

namespace ips.wiley.qatool.Controllers
{
    public class WileyQAToolController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult Details()
        {
            List<Employee> employees = new List<Employee>{new Employee{ Id=1, empId="MY011", empName="Kumar" },
            new Employee{Id=2, empId="MY012", empName="Singh"} };
            return Json(employees, JsonRequestBehavior.AllowGet);
        }

    }
}
