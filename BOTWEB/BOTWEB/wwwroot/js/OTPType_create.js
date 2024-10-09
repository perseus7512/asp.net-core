let currentStep = 1;
let formData = {};

function showStep(step) {
    // 隱藏所有步驟頁
    document.querySelectorAll('.step-page').forEach(function (page) {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    // 顯示當前步驟頁
    document.getElementById('step' + step).style.display = 'block';
    document.getElementById('step' + step).classList.add('active');

    let steps = document.querySelectorAll('.step');
    steps.forEach(function (s, index) {
        // 重置每個步驟的樣式
        s.classList.remove('active', 'completed');

        // 當前步驟前的步驟標記為 "已完成"
        if (index < step - 1) {
            s.classList.add('completed');
        }

        // 當前步驟
        if (index === step - 1) {
            s.classList.add('active');
        }
    });

    // 根據當前步驟更新進度條顏色
    let progressLine = document.querySelector('.line'); // 取得外層的線條
    if (progressLine) {
        let progressPercentage = ((step - 1) / (steps.length - 1)) * 100; // 計算完成百分比
        progressLine.style.background = `linear-gradient(to right, blue ${progressPercentage}%, #ccc ${progressPercentage}%)`; // 動態更新線條顏色
    }

    // 動態更新按鈕文字與功能
    updateButtons(step);

    // 如果該步驟已經有保存的資料，回填至表單中
    if (formData[`step${step}`]) {
        document.getElementById(`step${step}Input`).value = formData[`step${step}`];
    }
}

function updateButtons(step) {
    const nextBtn = document.getElementById('nextBtn'); // 主按鈕 (下一步/新增/回系統管理頁面)
    const prevBtn = document.getElementById('prevBtn'); // 次按鈕 (取消/上一步)
    const leftBtnContainer = document.getElementById('leftBtnContainer'); // 左邊的按鈕容器
    const rightBtnContainer = document.getElementById('rightBtnContainer'); // 右邊的按鈕容器

    // 根據步驟更新按鈕的文字與行為
    if (step === 1) {
        nextBtn.innerText = '下一步';
        nextBtn.onclick = nextStep; // 點擊後進入下一步

        prevBtn.innerText = '取消';
        prevBtn.style.display = 'inline';
        prevBtn.onclick = cancelProcess; // 點擊後取消流程

        leftBtnContainer.style.display = 'flex'; // 顯示左側按鈕容器
        rightBtnContainer.classList.remove('col-md-12'); // 移除佔據整行的樣式
        rightBtnContainer.classList.add('col-md-6'); // 回復到原本的樣式
    } else if (step === 2) {
        nextBtn.innerText = '新增';
        nextBtn.onclick = addEntry; // 點擊後新增資料

        prevBtn.innerText = '上一步';
        prevBtn.style.display = 'inline';
        prevBtn.onclick = prevStep; // 點擊後回到上一步

        leftBtnContainer.style.display = 'flex';
        rightBtnContainer.classList.remove('col-md-12');
        rightBtnContainer.classList.add('col-md-6');
    } else if (step === 3) {
        nextBtn.innerText = '回系統管理頁面';
        nextBtn.onclick = goToAdminPage; // 點擊後回到系統管理頁面

        prevBtn.style.display = 'none'; // 隱藏取消按鈕
        leftBtnContainer.style.display = 'none'; // 完全隱藏左邊的按鈕容器

        rightBtnContainer.classList.remove('col-md-6'); // 移除佔據一半的樣式
        rightBtnContainer.classList.add('col-md-12'); // 讓右側按鈕容器佔據整行
        rightBtnContainer.style.justifyContent = 'center'; // 水平置中按鈕
    }
}

function confirmAndNext() {
    // 可以在這裡添加確認提交的邏輯
    saveFormData(currentStep); // 儲存當前的表單資料
    if (currentStep === 2) {
        nextStep(); // 跳到第三頁
    }
    $('#staticBackdrop').modal('hide');
}

function nextStep() {
    saveFormData(currentStep); // 先保存當前步驟的表單資料
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep); // 顯示下一步驟
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep); // 顯示上一步驟
    }
}

function saveFormData(step) {
    const input = document.getElementById(`step${step}Input`);
    if (input) {
        formData[`step${step}`] = input.value; // 保存該步驟的表單資料
    }
}

function cancelProcess() {
    window.location.href = "/home/OTPType";
    // 在這裡可以加入取消處理的邏輯，例如重新導向或重置表單
}

function addEntry() {
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
    // 新增功能的邏輯
}

function goToAdminPage() {
    window.location.href = "/home/OTPType";
    // 返回系統管理頁面的邏輯
}

// 初始顯示第一步
showStep(currentStep);
