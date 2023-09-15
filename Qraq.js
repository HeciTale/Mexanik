let QraqCount = 1;
let rowCounter = 1;

function AddQraq() {
    const Qraq = document.getElementById('Qraq');

    // Oluşturulacak form grubu için bir div oluştur
    const formGroup = document.createElement('div');
    formGroup.className = 'row';
    formGroup.id = `row-${rowCounter}`;
    rowCounter++;

    for (let i = 0; i < 5; i++) {
        const QraqForm = document.createElement('form');
        QraqForm.id = `qraqform-${QraqCount}`;
        QraqCount++;

        const YeniQraqForm = document.createElement('div');
        YeniQraqForm.className = 'col';

        const QraqInput = document.createElement('input');
        QraqInput.type = 'text';
        QraqInput.className = 'form-control';

        YeniQraqForm.appendChild(QraqInput);
        QraqForm.appendChild(YeniQraqForm);
        formGroup.appendChild(QraqForm);
    }

    Qraq.appendChild(formGroup);
}

const QraqAddBtn = document.querySelector("#QraqAdd");
QraqAddBtn.addEventListener('click', AddQraq);
