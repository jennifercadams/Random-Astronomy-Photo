const convertToPermalink = (date) => {
  let formattedDate = date.substring(2).replace(/-/g, '');
  return `https://apod.nasa.gov/apod/ap${formattedDate}.html`;
};

const renderImg = (imgSrc) => {
  return new Promise((resolve, reject) => {
    document.getElementById('photo').src = imgSrc;
    document.getElementById('photo').onload = () => resolve('photo retrieved');
    document.getElementById('photo').onerror = () => reject('trying again');
  });
};

let retries = 0;

export const renderData = (url) => {
  let photoData;
  console.log('getting photo...')
  fetch(url)
    .then(response => response.json())
    .then(data => photoData = data[0])
    .then(() => {
      let date = photoData.date;
      let credit = photoData.copyright;
      let title = photoData.title;
      let description = photoData.explanation;
      let imgSrc = photoData.url;
      let permalink = convertToPermalink(date);    
      renderImg(imgSrc).then((msg) => {
        console.log(msg);
        document.getElementById('get-photo').innerHTML = 'New Photo';
        document.getElementById('caption').innerHTML = title;
        document.getElementById('info-title').innerHTML = title;
        document.getElementById('date').innerHTML = date;
        document.getElementById('info-date').innerHTML = date;
        document.getElementById('more-info').style.display = 'inline-block';
        document.getElementById('description').innerHTML = description;
        document.getElementById('img-link').href = imgSrc;
        document.getElementById('apod-permalink').href = permalink;
        if (credit === undefined) {
          document.getElementById('credit').style.display = 'none';
          document.getElementById('info-credit').style.display = 'none';
        } else {
          document.getElementById('credit').style.display = 'block';
          document.getElementById('info-credit').style.display = 'block';
          document.getElementById('credit').innerHTML = 'Credit: ' + credit;
          document.getElementById('info-credit').innerHTML = 'Credit: ' + credit;
        }})
      .catch((reason) => {
        if (retries < 3) {
          retries++;
          console.log(reason + ' ' + retries);
          renderData(url)
        } else {
          document.getElementById('img-container').innerHTML = 'Error: Can\'t get photo. Try again later.';
        };
    })
  })
};