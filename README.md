# Random Astronomy Photo

Random Astronomy Photo is a web app that uses NASA's Astronomy Photo of the Day (APOD) API to display random astronomy photos and cool facts about them.

The app was built using JavaScript, React, HTML, and CSS.

## Next Steps

The APOD API occasionally returns a video instead of an image. When this happens, the title, date, and description render, but there is no photo. I hope to implement a fix for this so that when a video is returned, the app will:

* fetch another APOD entry,
* embed the video, or
* render a link to the video.

Another issue is that while the text elements render instantly, the photo sometimes takes a few seconds. This results in the previous photo displaying with the new text content until the new photo loads, which feels sloppy from a UX perspective. I hope to implement a fix for this that will prevent the text from loading until the photo is finished loading.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
