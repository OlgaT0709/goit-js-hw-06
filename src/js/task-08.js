const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;
   
    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені.');
       
    } else {

        const formData = {};
        formData.email = email.value;
        formData.password = password.value;
        console.log(formData);

        // const formData = new FormData(event.currentTarget);
        //     console.log(formData);
        // formData.forEach((value, name) => {
        //     const result = {};
        //     result[name] = value;
        //     console.log(result);
        // });
        
        event.currentTarget.reset();
    };
 
    
};


