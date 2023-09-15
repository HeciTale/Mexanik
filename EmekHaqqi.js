var EmekCount = 1;
var EmekCounter = 1;

function AddEmek() {
    const Emek = document.getElementById('Emek');

    // Oluşturulacak form grubu için bir div oluştur
    const formGroup = document.createElement('div');
    formGroup.className = 'row';
    formGroup.id = `row-${EmekCounter}`;
    EmekCounter++;

    for (let i = 0; i < 5; i++) {
        const EmekForm = document.createElement('form');
        EmekForm.id = `emekform-${EmekCount}`;
        EmekCount++;

        const YeniEmekForm = document.createElement('div');
        YeniEmekForm.className = 'col';

        const EmekInput = document.createElement('input');
        EmekInput.type = 'text';
        EmekInput.className = 'form-control';

        YeniEmekForm.appendChild(EmekInput);
        EmekForm.appendChild(YeniEmekForm);
        formGroup.appendChild(EmekForm);
    }

    Emek.appendChild(formGroup);
}

const EmekAddBtn = document.querySelector("#EmekAdd");
EmekAddBtn.addEventListener('click', AddEmek);