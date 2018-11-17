//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let _imageservice = new ImageService()

function drawImage() {
    let imageArr = _imageservice.images
    //choose randomly from imageArr
    let imageIndex = Math.floor(Math.random() * imageArr.length)
    let image = imageArr[imageIndex]
    console.log("image",image)
    //set background image with javascript
   document.body.style.backgroundImage = `url(${image.url})`
}

export default class ImageController {
constructor() {
    _imageservice.getImage(drawImage)
}

}

