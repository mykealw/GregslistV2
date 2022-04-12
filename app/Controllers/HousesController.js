import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { Pop } from "../Utils/Pop.js"
import { housesService} from "../Services/HousesService.js"

function _drawHouses() {
  let houseCardsTemplate = ''

  ProxyState.houses.forEach(h => houseCardsTemplate += h.CardTemplate2)
   document.getElementById('listings').innerHTML = ` 
   <div class="row houses">
   ${houseCardsTemplate}
  </div>`
  
  // console.log("house card template", houseCardsTemplate)
  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

async function _getAllHouses(){
  try {
    await housesService.getAllHouses()
  } catch (error) {
    console.error(error)
    Pop.toast(error.message, 'error')
  }
}
export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _getAllHouses()
    console.log('hello from house controller.')
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      // debugger
      const formElem = event.target
      const formData = {
        // TODO YOUR JOB NOT MINE
      }
      console.log({ formData })

    } catch (error) {
      // show this to the user
    }
  }

  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}