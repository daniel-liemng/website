// Select element func
const selectElement = (s) => document.querySelector(s)

// Open the menu on Click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active')
})

// Close the menu on Click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active')
})
