// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function() {
  const apiKey = 'a063d8227bf541228d919f9ddd612b84';
  const apiUrl = 'https://news-api-v2.herokuapp.com';

  return {
    topHeadline(country = 'ua', cb) {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb)
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb)
    }
  }
})();




const form = document.forms['newsControls'],
      countrySelect = form.elements['country'],
      searchInput = form.elements['search'],
      newsContainer = document.querySelector('.news-container .grid-container');
      newsH1 = document.querySelector('.news-container .h1');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadNews();
  searchInput.value = '';
});

//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  loadNews();
});

// load news

function loadNews() {
  const country = countrySelect.value;
  const searchText = searchInput.value;



  preloaderShow();
  let h1;

  if(!searchText) {
    newsService.topHeadline(country, onGetResponse);
    h1 = `News for country: ${country}`;
    newsH1.textContent = h1;
  } else {
    newsService.everything(searchText, onGetResponse);
    h1 = `News on demand: ${searchText}`;
    newsH1.textContent = h1;
  }
  

}

// function on get response from server

function onGetResponse (err, res) {
  removePreloader();
  if (err) {
    showAlert(err, 'error-msg');
    return;
  }

  if (!res.articles.length) {
    showAlert('I did not find news for your request', 'error-msg')
    return;
  }
  renderNews(res.articles);
}

// render news

function renderNews(news){
  
  if(newsContainer.children.length){
    clearContainer(newsContainer);
  }


  let fragment = '';

  news.forEach(newsItem => {
    const el = newsTemplate(newsItem);
    fragment += el;
    
  })
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
  
  
}

function clearContainer(container) {
  let child = container.lastElementChild;
  while(child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

// news item template

function newsTemplate( { urlToImage, title, description, url }) {
  return `
 
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage|| 'https://images.squarespace-cdn.com/content/v1/58a1e3b91b10e3f74fb8f8b3/1531464370041-8KCQHOQ7NELBDNL9LP1C/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/DH+no+Photos+Logo+Red.png?format=2500w'}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
    
 `
}

function showAlert(msg, type = "success") {
  M.toast({ html: msg, classess: type });
}

function preloaderShow() {
  document.body.insertAdjacentHTML("afterbegin", `
  <div class="progress">
      <div class="indeterminate"></div>
  </div>
  `)
}

function removePreloader() {
  const loader = document.querySelector('.progress');

  if(loader) {
    loader.remove();
  }
}