var check = true;

// Объект со значениями формы
var user = {
    methodAge: function () {
        var age = this.date.split('-');
        var date = new Date();
        return date.getFullYear() - age[0];
    },
    //wage:methodAge
}


function checkPassword() {
    var idy = document.forms.regist.elements.password;
    var idyAgain = document.forms.regist.elements.password2;
    var checkAgain = idy.value == idyAgain.value;
    var password = document.forms.regist.elements.password.value;
    if (password.length <= 6 || checkAgain == false) {
        password = document.forms.regist.elements.password.value = '';
        idyAgain.value = '';
        idy.style.borderColor = 'red';
        idyAgain.style.borderColor = 'red';
        check = false;

    }
    else {
        check = true
    }

    console.log(typeof idy.value);
    return check;
}
function idX() {
    //e.preventDefault();
    var chekForm = true;
    var idy = document.forms.regist.elements;
    var element = idy.length;
    user.name = idy.name.value;
    user.lastName = idy.lastName.value;
    user.password = idy.password.value;
    user.date = idy.date.value;
// Здесь мы записываем все значения в объект

    for (var i = 0; i < element; i++) {
        if (idy[i].value == '') {

            idy[i].style.borderColor = 'red';
            chekForm = false;
        }
        else {
            idy[i].style.borderColor = 'green';

        }


    }
    checkPassword();
    if (chekForm == false || check == false) {
        alert('Заполните пожалуйста все поля');

        return 1;
    }

    alert('Поздравляем у вас вышло')  // Запускаем функцию которая обнуляет форму

    reset2();
    console.log(user);
    console.log(user.methodAge());

    sendLocalStorage(user);// Запускаем функцию которая переносит объект USER в LocalStorage


}
function reset2() {
    return document.forms.regist.reset();
}
function sendLocalStorage(obj) {
    for (var key in user) {
        var val = user[key];
        localStorage.setItem(key, val); // Заносим значения массива arr и Объекта user в LocalStorage
    }
    return 1;
}

