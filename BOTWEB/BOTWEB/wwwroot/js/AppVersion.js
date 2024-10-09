  // 當點擊「編輯」按鈕時觸發
  document.querySelectorAll('#edit').forEach(button => {
    button.addEventListener('click', function() {
      // 找到相應的表格行
      const row = this.closest('tr');
      const orderNumber = row.cells[0].textContent;
      const appName = row.cells[1].textContent;
      const os = row.cells[2].textContent;
      const appVersion = row.cells[3].textContent;

      // 將表格中的值填充到互動視窗中的表單
      document.getElementById('orderNumber').value = orderNumber;
      document.getElementById('appName').value = appName;
      document.getElementById('os').value = os;
      document.getElementById('appVersion').value = appVersion;
    });
  });