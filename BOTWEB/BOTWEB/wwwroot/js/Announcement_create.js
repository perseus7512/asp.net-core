// 存成草稿按鈕點擊事件
function saveDraft() {
    if (validateForm()) {
        alert('草稿已儲存');
    }
}

// 發布按鈕點擊事件
function submitForm() {
    if (validateForm()) {
        alert('公告已發布');
    }
}

// 表單驗證函數
function validateForm() {
    let form = document.getElementById('announcementForm');
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}
