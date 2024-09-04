function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var announcement = content.previousElementSibling;

    // 切換公告內容顯示狀態
    content.classList.toggle('active');
    announcement.classList.toggle('active');
}