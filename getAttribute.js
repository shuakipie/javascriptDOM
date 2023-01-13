// getAttribute method
const range = document.querySelector('input[type="range"]') // select range input type
range.getAttribute('max') // min, max is the attribute to manipulate
range.getAttribute('min')
range.getAttribute('type')

// this is for setAttribute method this is to set new attribute value

range.setAttribute('min', '-500') // 2 arguments to set new attribute value
range.setAttribute('type', 'radio') // change range to radio attribute