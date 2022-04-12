

export class House {
    constructor(data){

        this.bedrooms = data.bedrooms  || 0
        this.bathrooms = data.bathrooms  || 0
        this.levels = data.levels || 0
        this.imgUrl = data.imgUrl || ""
        this.year = data.year || 0
        this.price = data.price  || 0
        this.description = data.description  || ""
    }

get CardTemplate2(){
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top " src="${this.imgUrl}" alt="Beautiful home-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.bedrooms} - ${this.bathrooms} - ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
        </div>
      </div>
    </div>
    `
}

}