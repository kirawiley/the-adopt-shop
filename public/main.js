fetch('/pets')
  .then((response) => {
    return response.json()
  })
  .then((pet) => {
    pet.forEach(renderPets)
  })

var panelContainer = document.getElementById('panel-container')

function renderPets(pet) {
  var panel = document.createElement('div')
  panel.classList.add('panel')
  panel.classList.add('panel-primary')

  var panelHeading = document.createElement('div')
  panelHeading.classList.add('panel-heading')

  var petName = document.createElement('h3')
  petName.classList.add('panel-title')
  petName.setAttribute('id', 'pet-name')
  petName.textContent = pet.name

  var panelBody = document.createElement('div')
  panelBody.classList.add('panel-body')
  panelBody.setAttribute('id', 'panel-body')

  var petImage = document.createElement('img')
  petImage.setAttribute('id', 'pet-picture')
  petImage.textContent = pet.image // doesn't exist yet

  var petDetails = document.createElement('p')
  petDetails.setAttribute('id', 'pet-details')
  petDetails.textContent = pet.breed + ' - ' + pet.age + ' - ' + pet.gender

  panel.appendChild(panelHeading)
  panel.appendChild(panelBody)
  panelHeading.appendChild(petName)
  panelBody.appendChild(petImage)
  panelBody.appendChild(petDetails)
  panelContainer.appendChild(panel)

  return panel
}
