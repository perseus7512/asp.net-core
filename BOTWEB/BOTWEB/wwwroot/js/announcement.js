$(function () {
    $('#daterange').daterangepicker({
        autoUpdateInput: false, // 不自動填入日期
        locale: {
            cancelLabel: '清除' // 設置取消按鈕的文字
        }
    });

    // 手動更新輸入框的值
    $('#daterange').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
    });

    // 清除日期時，重設為 placeholder
    $('#daterange').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
});
function toggleContent(contentId) {
    var contents = document.getElementsByClassName("content");
    var arrows = document.getElementsByClassName("arrow");

    for (var i = 0; i < contents.length; i++) {
        if (contents[i].id !== contentId) {
            contents[i].style.display = "none";
            arrows[i].textContent = "▼";
        }
    }

    var content = document.getElementById(contentId);
    var arrow = content.previousElementSibling.querySelector(".arrow");

    if (content.style.display === "table-row") {
        content.style.display = "none";
        arrow.textContent = "▼";
    } else {
        content.style.display = "table-row";
        arrow.textContent = "▲";
    }
}
function openForm(evt, formId) {
    // 获取所有的表单容器元素并隐藏
    var i, formContainer, tablinks;
    formContainer = document.getElementsByClassName("form-container");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.display = "none";
    }

    // 获取所有的标签并移除 active 类
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 显示当前选中的表单，添加 active 类到标签
    document.getElementById(formId).style.display = "block";
    evt.currentTarget.className += " active";
}
