document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function() {
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '0';
        openBtn.style.display = 'block'; // 顯示 open-btn
    });

    openBtn.addEventListener('click', function () {
        sidebar.classList.remove('collapsed');
       /* mainContent.style.marginLeft = '250px';*/
        openBtn.style.display = 'none'; // 隱藏 open-btn
    });
});

document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('content-title').textContent = this.textContent;
    });
});

function toggleDropdown(id) {
    const content = document.getElementById(`dropdownContent${id}`);
    const arrow = document.getElementById(`arrow${id}`);
    console.log(`Toggling dropdown ${id}`); // 檢查函數是否被調用
    if (content.style.display === 'block') {
        content.style.display = 'none';
        arrow.classList.remove('open');
    } else {
        content.style.display = 'block';
        arrow.classList.add('open');
    }
}