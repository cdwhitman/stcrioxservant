// form script

window.onload = function () {
  var el = document.getElementById('g-recaptcha-response');
  if (el) {
    el.setAttribute('required', 'required');
  }
};

var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Your Request Has Been Sent!';
        status.classList.add('success');
        setTimeout(function () {
          status.classList.remove('success');
        }, 4000);
        setTimeout(function () {
          status.innerHTML = 'Get Your Free Quote!';
        }, 4000);
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            console.log(
              data['errors'].map((error) => error['message']).join(', ')
            );
            status.innerHTML = 'There was a problem submitting your form';
          } else {
            status.innerHTML = 'There was a problem submitting your form';
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = 'There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);
