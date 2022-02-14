# Random Astronomy Photo

Random Astronomy Photo is a web app that uses NASA's Astronomy Photo of the Day (APOD) API to display random astronomy photos and cool facts about them.

The app was built using JavaScript, React, HTML, and CSS.

## Challenges

The APOD API occasionally returns a video instead of an image. When this happens, the title, date, and description render, but there is no photo. I have implemented a fix for this that automatically fetches another image if the first one fails to load. The app will try fetching an image up to 3 times before rendering an error message.

## Next Steps

Improvements and features I am working on:

* Add a feature that stores previously fetched photos in a gallery at the bottom of the page, with prev and next buttons to scroll through them.
* Redesign buttons to look more modern and visually appealing.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
