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

function renderSlogan() {
  var slogan = document.createElement('h2')
  slogan.setAttribute('id', 'slogan')
  slogan.textContent = 'Your new best friend is just a click away...'

  formContainer.appendChild(slogan)

  return slogan
}

function renderForm() {
  var slogan = document.createElement('h2')
  slogan.setAttribute('id', 'slogan')

  var formWell = document.createElement('div')
  formWell.classList.add('well')

  var typeDropdown = document.createElement('div')
  typeDropdown.classList.add('dropdown')

  var typeButton = document.createElement('button')
  typeButton.classList.add('btn')
  typeButton.classList.add('btn-default')
  typeButton.classList.add('dropdown-toggle')
  typeButton.setAttribute('type', 'button')
  typeButton.setAttribute('id', 'type-menu')
  typeButton.setAttribute('data-toggle', 'dropdown')
  typeButton.setAttribute('aria-haspopup', 'true')
  typeButton.setAttribute('aria-expanded', 'true')
  typeButton.textContent = 'Type'

  var typeCaret = document.createElement('span')
  typeCaret.classList.add('caret')

  var typeDropdownMenu = document.createElement('ul')
  typeDropdownMenu.classList.add('dropdown-menu')
  typeDropdownMenu.setAttribute('aria-labelledby', 'dropdownMenu1')

  var typeDogOption = document.createElement('li')
  typeDogOption.textContent = 'Dog'

  var typeCatOption = document.createElement('li')
  typeCatOption.textContent = 'Cat'

  var typeAllOption = document.createElement('li')
  typeAllOption.textContent = 'All'

  formContainer.appendChild(formWell)
  formWell.appendChild(typeDropdown)
  typeDropdown.appendChild(typeButton)
  typeButton.appendChild(typeCaret)
  typeDropdown.appendChild(typeDropdownMenu)
  typeDropdownMenu.appendChild(typeDogOption)
  typeDropdownMenu.appendChild(typeCatOption)
  typeDropdownMenu.appendChild(typeAllOption)

  var breedDropdown = document.createElement('div')
  breedDropdown.classList.add('dropdown')

  var breedButton = document.createElement('button')
  breedButton.classList.add('btn')
  breedButton.classList.add('btn-default')
  breedButton.classList.add('dropdown-toggle')
  breedButton.setAttribute('type', 'button')
  breedButton.setAttribute('id', 'type-menu')
  breedButton.setAttribute('data-toggle', 'dropdown')
  breedButton.setAttribute('aria-haspopup', 'true')
  breedButton.setAttribute('aria-expanded', 'true')
  breedButton.textContent = 'Breed (Optional)'

  var breedCaret = document.createElement('span')
  breedCaret.classList.add('caret')

  var breedDropdownMenu = document.createElement('ul')
  breedDropdownMenu.classList.add('dropdown-menu')
  breedDropdownMenu.setAttribute('aria-labelledby', 'dropdownMenu2')

  var breedOption = document.createElement('li')
  breedOption.textContent = 'Breed temp filler'

  formWell.appendChild(breedDropdown)
  breedDropdown.appendChild(breedButton)
  breedDropdown.appendChild(breedDropdownMenu)
  breedButton.appendChild(breedCaret)
  breedDropdownMenu.appendChild(breedOption)

  var genderDropdown = document.createElement('div')
  genderDropdown.classList.add('dropdown')

  var genderButton = document.createElement('button')
  genderButton.classList.add('btn')
  genderButton.classList.add('btn-default')
  genderButton.classList.add('dropdown-toggle')
  genderButton.setAttribute('type', 'button')
  genderButton.setAttribute('id', 'type-menu')
  genderButton.setAttribute('data-toggle', 'dropdown')
  genderButton.setAttribute('aria-haspopup', 'true')
  genderButton.setAttribute('aria-expanded', 'true')
  genderButton.textContent = 'Gender'

  var genderCaret = document.createElement('span')
  genderCaret.classList.add('caret')

  var genderDropdownMenu = document.createElement('ul')
  genderDropdownMenu.classList.add('dropdown-menu')
  genderDropdownMenu.setAttribute('aria-labelledby', 'dropdownMenu3')

  var genderFemaleOption = document.createElement('li')
  genderFemaleOption.textContent = 'Female'

  var genderMaleOption = document.createElement('li')
  genderMaleOption.textContent = 'Male'

  var genderEitherOption = document.createElement('li')
  genderEitherOption.textContent = 'Either'

  formWell.appendChild(genderDropdown)
  genderDropdown.appendChild(genderButton)
  genderButton.appendChild(genderCaret)
  genderDropdown.appendChild(genderDropdownMenu)
  genderDropdownMenu.appendChild(genderFemaleOption)
  genderDropdownMenu.appendChild(genderMaleOption)
  genderDropdownMenu.appendChild(genderEitherOption)

  var findPetButton = document.createElement('button')
  findPetButton.classList.add('btn')
  findPetButton.classList.add('btn-primary')
  findPetButton.setAttribute('type', 'button')
  findPetButton.setAttribute('id', 'find-pet-button')
  findPetButton.textContent = 'Find a Pet! '

  findPetButton.addEventListener('submit', function (event) {
      event.preventDefault()

      console.log(typeDropdownMenu.value)
    })

  var pawIcon = document.createElement('i')
  pawIcon.classList.add('fa')
  pawIcon.classList.add('fa-paw')
  pawIcon.setAttribute('aria-hidden', 'true')

  findPetButton.appendChild(pawIcon)
  formWell.appendChild(findPetButton)

  return formWell
}

renderSlogan()
renderForm()
