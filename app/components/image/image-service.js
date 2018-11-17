

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=dogs'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _images = []


export default class ImageService {
	constructor() {	
	}

	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		imgApi.get()
		.then(res => {
		console.log("imgres", res)			
			_images = res.data.images
			callWhenDone()
		})

	}
	get images(){
		return _images
	}
}
