// define header
const navbar = document.querySelector('header');

// for mobile
window.addEventListener('touchmove', onScroll);

// for desktop
window.addEventListener('scroll', onScroll);

// setup scroll detection
function onScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
    if (window.scrollY > 55) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.borderBottom = '1px solid lightgray';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'none';
    }
};

// Contact form validation

// define form fields
const nameField = document.querySelector('input[name=name]');
const emailField = document.querySelector('input[name=email]');
const subjectField = document.querySelector('input[name=subject]');
const msgField = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

// // define form responses
// const success = document.querySelector('.success');
// const error = document.querySelector('.error');
// const missingField = document.querySelector('.fieldErr');

submitBtn.addEventListener('click', () => {
    let name = nameField.value;
    let email = emailField.value;
    let subject = subjectField.value;
    let message = msgField.value;



    if (name == '' || email == '' || subject == '' || message == '' || !isEmail(email)) {
        $('.fieldErr').fadeIn().css('display', 'block');
        setTimeout( () => {
            $('.fieldErr').fadeOut().css('display', 'none');
        }, 5000);
    } else {
        $.ajax({
            url: "mailer.php",
            method: "POST",
            data: {name: name, email: email, subject: subject, message: message},
            success: (data) => {
                $('form').trigger('reset');
                $('.success').fadeIn().css('display', 'block');
                setTimeout( () => {
                    $('.success').fadeOut().css('display', 'none');
                }, 5000);
            },
            error: () => {
                $('.error').fadeIn().css('display', 'block');
                setTimeout( () => {
                    $('.error').fadeOut().css('display', 'none');
                }, 5000);
            }
        });
    }
});

$('form').submit((e) => {
    e.preventDefault();
});

// email validation
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
