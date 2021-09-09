// testimonial switcher

const testimonial = document.querySelector('.testimonial')
const customerName = document.querySelector('.customer-name')

const testimonials = [
  {
    name: '-Doug W',
    text:
      "\"Very conscientious and leaves the yard looking picture perfect. Also does a great fall clean up!\"",
  },
  {
    name: '-Margaret M',
    text:
      "\"Dan is a thoughtful and kind man, as well as a darn good tender of the earth. I love that he helps me tend to my yard each year.\"",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, text } = testimonials[idx]

  testimonial.innerHTML = text
  customerName.innerHTML = name

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)


// form script
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset()
    status.innerHTML = "Your Request Has Been Sent!";
    status.classList.add("success");
    setTimeout(function() { 
      status.classList.remove("success");      
    }, 4000);
    setTimeout(function() { 
      status.innerHTML = "Get Your Free Quote!";      
    }, 4000);
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)