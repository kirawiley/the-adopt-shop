fetch('/pets')
  .then((response) => {
    return response.json()
  })
  .then((pets) => {
    pets.forEach(renderPets)
  })

var panelContainer = document.getElementById('panel-container')
var formContainer = document.getElementById('form-container')

function renderPets(pet) {
  var panel = document.createElement('div')
  panel.classList.add('panel')
  panel.classList.add('panel-primary')

  var panelHeading = document.createElement('div')
  panelHeading.classList.add('panel-heading')

  var petName = document.createElement('h3')
  petName.classList.add('panel-title')
  petName.classList.add('pet-name')
  petName.textContent = pet.name

  var panelBody = document.createElement('div')
  panelBody.classList.add('panel-body')

  var petImage = document.createElement('img')
  petImage.classList.add('pet-picture')
  petImage.setAttribute('src', pet.image)

  var petDetails = document.createElement('p')
  petDetails.classList.add('pet-details')
  petDetails.textContent = pet.breed + ' - ' + pet.age + ' - ' + pet.gender

  panel.appendChild(panelHeading)
  panel.appendChild(panelBody)
  panelHeading.appendChild(petName)
  panelBody.appendChild(petImage)
  panelBody.appendChild(petDetails)
  panelContainer.appendChild(panel)

  return panel
}

var typeInput = document.querySelector('#type')
var breedInput = document.querySelector('#breed')
var genderInput = document.querySelector('#gender')
var findPetButton = document.getElementById('find-pet-button')

findPetButton.addEventListener('click', (event) => {
  if (typeInput.value === '') {
    alert('Please choose a type of pet!')
  }
  else if (genderInput.value === '') {
    alert('Please choose a gender!')
  }
  var searchParams = {
    type: typeInput.value,
    breed: breedInput.value,
    gender: genderInput.value
  }
  console.log(searchParams)
})
