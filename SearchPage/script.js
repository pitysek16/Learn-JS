const searchForm = document.getElementById('search-form');
const searchField = document.getElementById('search-field');
const gallery = document.getElementById('gallery');
const modalBody = document.getElementById('modal-body');
const nextPage = document.getElementById('next-page');
let base_page = 1;

const API = {
    api_key: '563492ad6f9170000100000176a1017013b24b54a60c8ad2e80f9df3',
    base_url: 'https://api.pexels.com/v1',
    search(query){
        const url = `${this.base_url}/search?query=${query}&per_page=15&page=1`;

        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': this.api_key
            })
        }).then(response => response.json());
        // const request = new XMLHttpRequest();

        // request.open('GET', url);
        // request.setRequestHeader('Authorization', this.api_key);
        // request.send();

        // request.addEventListener('load', () => {
        //     const data = JSON.parse(request.response);
        //     callbackFn(data);
        // });
    },
    getImage(id){
        const url = `${this.base_url}/photos/${id}`;
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': this.api_key
            })
        }).then(response => response.json());
    }
}

function CreateImagesBlock(photo) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-4', 'px-0', 'pb-2');
    const img = document.createElement('img');
    img.src = photo.src.tiny;
    img.classList.add('card-img-top');

    const photographer = document.createElement('p');
    photographer.classList.add('card-text','text-center', 'mt-2', 'font-weight-bold');
    photographer.innerText = `Photo by ${photo.photographer}`;


    card.appendChild(img);
    card.appendChild(photographer);

    return card;
}

function renderImages(imagesData) { 
    for(let i = 0; i < imagesData.photos.length; i++) {
        const photo = imagesData.photos[i];
        const imgBlock = CreateImagesBlock(photo);

        imgBlock.addEventListener('click', () => {
            const {id} = photo;
            const {photographer} = photo;
            const {photographer_url} = photo;

            modalBody.innerText = "Loading ..."
        
            $('#image-preview').modal('show');
            API.getImage(id).then(imagesData => {
                
                const img = new Image();
                img.src = imagesData.src.large;
                img.classList.add('img-fluid');
                img.onload = () =>{
                    modalBody.innerHTML = '';
                    modalBody.innerHTML = `<p class="text-center">Photo by <a href="${photographer_url}" target="_blank">${photographer}</a></p>`;
                    modalBody.appendChild(img)
                };

            });
            
        });

        gallery.appendChild(imgBlock);
    }
}

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const {value} = searchField;
    
    if (value) {
        gallery.innerHTML='';
        API.search(value).then(renderImages);
    } else {
        gallery.innerHTML=`<p class="text-danger">Please, enter your request</p>`
    }

});

