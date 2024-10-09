document.getElementById('toggleButton').addEventListener('click', function () {
    var container = document.getElementById('advancedSearchContainer');
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';  // 顯示額外選項
        this.textContent = '更少查詢選項 ▲';
        this.classList.add('rotate');  // 添加旋轉效果
    } else {
        container.style.display = 'none';  // 隱藏額外選項
        this.textContent = '更多查詢選項 ▼';
        this.classList.remove('rotate');  // 移除旋轉效果
    }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // 防止事件冒泡
    });
});


document.getElementById('resetButton').addEventListener('click', function () {
    // 清空所有 select 欄位
    var selects = document.querySelectorAll('select');
    selects.forEach(function (select) {
        select.selectedIndex = 0;
    });

    // 清空所有輸入框
    var inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    inputs.forEach(function (input) {
        input.value = '';
    });
});

$(function () {
    $('#daterange').daterangepicker({
        opens: 'right',
        locale: {
            format: 'YYYY/MM/DD'
        }
    });
});
