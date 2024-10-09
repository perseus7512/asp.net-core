// 獲取按鈕元素
const toggleBtn = document.getElementById('toggleBtn');

// 監聽按鈕的點擊事件
toggleBtn.addEventListener('click', function () {
    // 檢查按鈕的目前文字
    if (toggleBtn.innerText === '停用') {
        // 將文字改為 "啟用"
        toggleBtn.innerText = '啟用';
        // 移除 btn-danger 並加上 btn-success
        toggleBtn.classList.remove('btn-danger');
        toggleBtn.classList.add('btn-success');
    } else {
        // 將文字改回 "停用"
        toggleBtn.innerText = '停用';
        // 移除 btn-success 並加上 btn-danger
        toggleBtn.classList.remove('btn-success');
        toggleBtn.classList.add('btn-danger');
    }
});