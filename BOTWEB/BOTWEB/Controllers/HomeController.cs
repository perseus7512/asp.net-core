using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BOTWEB.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult announcement()
        {
            ViewData["CurrentPage"] = "���i";
            return View();
        }
        public IActionResult announcement_create()
        {
            ViewData["CurrentPage"] = "���i / �s�W���i";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult OTPType()
        {
            ViewData["CurrentPage"] = "�t�κ޲z / �e�m�t�κ޲z";
            return View();
        }
        public IActionResult OTPType_create()
        {
            ViewData["CurrentPage"] = "�t�κ޲z / �e�m�t�κ޲z";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult AppVersion()
        {
            ViewData["CurrentPage"] = "�t�κ޲z / �����t�κ޲z";
            return View();
        }
        public IActionResult Role()
        {
            ViewData["CurrentPage"] = "�t�κ޲z / �����v���޲z";
            return View();
        }
        public IActionResult Role_create()
        {
            ViewData["CurrentPage"] = "�t�κ޲z / �����v���޲z";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult ProblemReport()
        {
            ViewData["CurrentPage"] = "�ӽлP�����d�� / APP���D�^���d��";
            return View();
        }
        public IActionResult UserM()
        {
            ViewData["CurrentPage"] = "�ϥΪ̺޲z";
            return View();
        }
    }
}
