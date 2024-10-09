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
            ViewData["CurrentPage"] = "公告";
            return View();
        }
        public IActionResult announcement_create()
        {
            ViewData["CurrentPage"] = "公告 / 新增公告";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult OTPType()
        {
            ViewData["CurrentPage"] = "系統管理 / 前置系統管理";
            return View();
        }
        public IActionResult OTPType_create()
        {
            ViewData["CurrentPage"] = "系統管理 / 前置系統管理";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult AppVersion()
        {
            ViewData["CurrentPage"] = "系統管理 / 推播系統管理";
            return View();
        }
        public IActionResult Role()
        {
            ViewData["CurrentPage"] = "系統管理 / 角色權限管理";
            return View();
        }
        public IActionResult Role_create()
        {
            ViewData["CurrentPage"] = "系統管理 / 角色權限管理";
            bool showPagination = false;
            ViewBag.ShowPagination = showPagination;
            return View();
        }
        public IActionResult ProblemReport()
        {
            ViewData["CurrentPage"] = "申請與紀錄查詢 / APP問題回報查詢";
            return View();
        }
        public IActionResult UserM()
        {
            ViewData["CurrentPage"] = "使用者管理";
            return View();
        }
    }
}
