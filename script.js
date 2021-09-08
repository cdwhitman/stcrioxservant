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