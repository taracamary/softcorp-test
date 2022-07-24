document.getElementsByClassName('payment-form__select-current')[0].onclick = function () {
    document.getElementsByClassName('payment-form__select-list')[0].classList.toggle('payment-form__select-list--active');
    document.getElementsByClassName('payment-form__select-icon')[0].classList.toggle('payment-form__select-icon--active');
    document.getElementsByClassName('payment-form__select-text')[0].classList.toggle('payment-form__select-text--active');
};
