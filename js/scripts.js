const btnLogin = document.getElementById('btn-login')
console.log(btnLogin);

btnLogin.addEventListener('click', function () {
    const inputName = document.getElementById('inputName').value
    const inputPassword = document.getElementById('inputPassword').value
    if (inputName.length > 14 || inputName.length < 8 || inputPassword.length != 8) {
        document.querySelectorAll('.text-input').forEach(text => {
            text.classList.remove('hidden')
        });
        return
    }
    document.querySelectorAll('.text-input').forEach(text => {
        text.classList.add('hidden')
    })
    
    document.getElementsByClassName('name-user-input')[0].innerHTML = document.getElementById('inputName').value
    console.log(document.getElementById('container-login').classList.add('hidden'));
    console.log(document.getElementById('container-user').classList.remove('hidden'));
    
    
    
    
})
