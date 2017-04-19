var panelContainer = document.getElementById('panel-container')
var searchPage = document.getElementById('search-view')
var formContainer = document.getElementById('form-container')
var typeInput = document.querySelector('#type')
var breedInput = document.querySelector('#breed')
var genderInput = document.querySelector('#gender')
var findPetButton = document.getElementById('find-pet-button')
var addPetContainer = document.getElementById('add-pet-container')
var addPetButton = document.getElementById('add-pet-button')
var logo = document.getElementById('logo')

var searchResults = document.createElement('h4')
searchResults.setAttribute('id', 'search-results')
searchResults.textContent = 'Pet results:'

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

  var circleSlash = document.createElement('img')
  circleSlash.setAttribute('src', 'circle-slash-icon.jpg')
  circleSlash.setAttribute('id', 'circle-slash-icon')

  var noCats = document.createElement('img')
  noCats.setAttribute('src', 'cat-icon.svg')
  noCats.setAttribute('id', 'no-cats-icon')

  var noDogs = document.createElement('img')
  noDogs.setAttribute('src', 'dog-icon.png')
  noDogs.setAttribute('id', 'no-dogs-icon')

  if (pet.hasOwnProperty('noCats') === true) {
    panelBody.appendChild(circleSlash)
    panelBody.appendChild(noCats)
  }

  if (pet.hasOwnProperty('noDogs') === true) {
    panelBody.appendChild(circleSlash)
    panelBody.appendChild(noDogs)
  }

  panel.appendChild(panelHeading)
  panel.appendChild(panelBody)
  panelHeading.appendChild(petName)
  panelBody.appendChild(petImage)
  panelBody.appendChild(petDetails)
  panelContainer.appendChild(panel)

  return panel
}

function makeQueryString(params) {
  var queryString = '?'
  var keys = Object.keys(params)
  keys.forEach((property) => {
    if (params[property] !== '') {
      queryString += property + '=' + params[property] + '&'
    }
  })
  queryString = queryString.slice(0, -1)
  return queryString
}

function fetchPets(queryString) {
  fetch('/pets' + queryString)
  .then((response) => {
    return response.json()
  })
  .then((pets) => {
    pets.forEach(renderPets)
  })
}

findPetButton.addEventListener('click', (event) => {
  if (typeInput.value === '') {
    alert('Please choose a type of pet!')
  }

  else {
    var searchParams = {
      type: typeInput.value,
      breed: breedInput.value,
      gender: genderInput.value
    }
    fetchPets(makeQueryString(searchParams))

    searchPage.classList.add('invisible')
    panelContainer.classList.remove('invisible')
    panelContainer.appendChild(searchResults)
  }
})

logo.addEventListener('click', (event) => {
  searchPage.classList.remove('invisible')
  panelContainer.classList.add('invisible')
  addPetContainer.classList.add('invisible')
  panelContainer.innerHTML = ''
})

addPetButton.addEventListener('click', (event) => {
  searchPage.classList.add('invisible')
  addPetContainer.classList.remove('invisible')
})
