import { House } from "../Models/House.js"
export function getHouseForm(house) {
  house = house || new House ({})
  return `
  <form onsubmit="app.housesController.addHouse()">
  <div>
  <label for="bedrooms" class="form-label">bedrooms</label> 
  <input type="number" class="form-control" name="bedrooms" id="bedrooms" placeholder="bedrooms..." value="${house.bedrooms}>
  </div>
  <div>
  <label for="bathrooms" class="form-label">bathrooms</label> 
  <input type="number" class="form-control" name="bathrooms" id="bathrooms" placeholder="bathrooms..." value="${house.bathrooms}>
  </div>
  <div>
  <label for="levels" class="form-label">levels</label> 
  <input type="number" class="form-control" name="levels" id="levels" placeholder="levels..." value="${house.levels}>
  </div>
  <div>
  <label for="year" class="form-label">year</label> 
  <input type="number" class="form-control" name="year" id="year" placeholder="year..." value="${house.year}>
  </div>
  <div>
  <label for="price" class="form-label">price</label> 
  <input type="number" class="form-control" name="price" id="price" placeholder="price..." value="${house.price}>
  </div>
  <div>
  <label for="imgUrl" class="form-label">Image URL</label>
  <input type="text" class="form-control" name="imgUrl" id="imgUrl" placeholder="imgUrl..." value="${house.imgUrl}">
  </div>
  <div>
  <label for="description" class="form-label">Image URL</label>
  <input type="text" class="form-control" name="description" id="description" placeholder="description..." value="${house.description}">
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary">${house.id ? 'Save' : 'Create'}</button>
</div>
</form>

  `
}