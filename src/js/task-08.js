const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
   
    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Всі поля повинні бути заповнені.');
       
    } else {

        const formData = {};
        formData.email = formElements.email.value;
        formData.password = formElements.password.value;
        console.log(formData);

        // const formData = new FormData(event.currentTarget);
    
        // formData.forEach((value, name) => {
        //     const result = {};
        //     result[name] = value;
        //     console.log(result);
        // });
        
        event.currentTarget.reset();
    };
 
    
};


