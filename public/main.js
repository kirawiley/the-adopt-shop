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
  panel.className('panel')
  panel.className('panel-primary')

  var panelHeading = document.createElement('div')
  panelHeading.className('panel-heading')

  var petName = document.createElement('h3')
  petName.className('panel-title')
  petName.setAttribute('id', 'pet-name')
  petName.textContent = pet.name

  var panelBody = document.createElement('div')
  panelBody.className('panel-body')
  panelBody.setAttribute('id', 'panel-body')

  var petImage = document.createElement('img')
  petImage.setAttribute('id', 'pet-picture')
  petImage.textContent = pet.image // doesn't exist yet

  var petDetails = document.createElement('p')
  petDetails.setAttribute('id', 'pet-details')
  petDetails.textContent = pet.breed + ' - ' + pet.age + ' - ' + pet.gender

  panelContainer.appendChild(panel)
  panel.appendChild(panelHeading)
  panelHeading.appendChild(petName)
  panel.appendChild(panelBody)
  panelBody.appendChild(petImage)
  panelBody.appendChild(petDetails)

  return panel
}
