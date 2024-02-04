document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    const wallpaperContainer = document.getElementById('wallpaperContainer');
  
    fetchButton.addEventListener('click', function() {
      fetchWallpaper();
    });
  
    function fetchWallpaper() {
      // Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your Unsplash API access key
      const apiUrl = 'https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY';
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.urls.regular;
          wallpaperContainer.innerHTML = `<img src="${imageUrl}" alt="Wallpaper">`;
        })
        .catch(error => {
          console.error('Error fetching wallpaper:', error);
        });
    }
  });



  