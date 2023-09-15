let formCounter = 0;
let divCounter = 0;

function addForm() {
    const container = document.getElementById('container');
    
    // Oluşturulacak form grubu için bir div oluştur
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group row';
    
    for (let i = 0; i < 5; i++) {
        const newForm = document.createElement('form');
        newForm.id = `form-${formCounter}`;
        
        const newCol = document.createElement('div');
        newCol.className = 'col';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        
        newCol.appendChild(input);
        newForm.appendChild(newCol);
        formGroup.appendChild(newForm);
        
        // Increase the form counter
        formCounter++;
    }

    container.appendChild(formGroup);
    addNewDiv();
}



const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addForm);
