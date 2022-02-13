export const convertToPermalink = (date) => {
    let formattedDate = date.substring(2).replace(/-/g, '');
    return `https://apod.nasa.gov/apod/ap${formattedDate}.html`;
  };
  
export const renderPhoto = (photoData) => {
    let date = photoData.date;
    let credit = photoData.copyright;
    let title = photoData.title;
    let description = photoData.explanation;
    let imgSrc = photoData.url;
    let permalink = convertToPermalink(date);
    console.log(credit);
    document.getElementById('photo').src = imgSrc;
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
    }
  }