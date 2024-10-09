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