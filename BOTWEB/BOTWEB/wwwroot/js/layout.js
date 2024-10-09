document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const dropdowns = document.querySelectorAll('.dropdown');

    localStorage.clear();

    // 初始化時隱藏所有的 dropdown-content，並依據 localStorage 判斷是否展開
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none'; // 初始化時全部隱藏
    });

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.classList.remove('opened'); // 強制所有箭頭初始化為向下
    });

    // 根據 localStorage 中的下拉選單狀態來顯示或隱藏內容
    dropdowns.forEach(function (dropdown) {
        const dropdownId = dropdown.getAttribute('id').replace('dropdown', '');
        const content = document.getElementById(`dropdownContent${dropdownId}`);
        const arrow = document.getElementById(`arrow${dropdownId}`);

        // 檢查 localStorage 來決定初始狀態
        const dropdownState = localStorage.getItem(`dropdown${dropdownId}`);
        if (dropdownState === 'expanded') {
            content.style.display = 'block';
            arrow.classList.add('opened');
        } else {
            content.style.display = 'none';
            arrow.classList.remove('opened');
        }
    });

    // 側邊欄的開關按鈕事件
    closeBtn.addEventListener('click', function () {
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '0';
        openBtn.style.display = 'block';
        localStorage.setItem('sidebarCollapsed', 'true');
    });

    openBtn.addEventListener('click', function () {
        sidebar.classList.remove('collapsed');
        openBtn.style.display = 'none';
        localStorage.setItem('sidebarCollapsed', 'false');
    });
});

// 全域的 toggleDropdown 函數，確保切換顯示內容
function toggleDropdown(id) {
    const content = document.getElementById(`dropdownContent${id}`);
    const arrow = document.getElementById(`arrow${id}`);

    if (!content) {
        console.error(`找不到 ID 為 'dropdownContent${id}' 的元素`);
        return;
    }

    // 使用 classList 切換顯示狀態
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        content.style.display = 'none';  // 確保隱藏
        arrow.classList.remove('opened');
        localStorage.setItem(`dropdown${id}`, 'collapsed');
    } else {
        content.classList.add('expanded');
        content.style.display = 'block';  // 顯示
        arrow.classList.add('opened');
        localStorage.setItem(`dropdown${id}`, 'expanded');

        console.log(`展開了 dropdown ${id}`); // 除錯訊息
    }
}

//document.querySelectorAll('.chat-item').forEach(item => {
//    item.addEventListener('click', function () {
//        document.getElementById('content-title').textContent = this.textContent;
//    });
//});
