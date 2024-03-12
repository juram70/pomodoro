$(function () {
  function redirectToRoute(route) {
    window.location.href = route;
  }

  // Click event handlers for buttons
  $("#pomodoroButton").on("click", function () {
    redirectToRoute("/");
  });
  $("#shortbreak").on("click", function () {
    redirectToRoute("/shortBreak");
  });
  $("#longbreak").on("click", function () {
    redirectToRoute("/longBreak");
  });

  // Array of background images
  let images = [
    "/Wallpapers/png/AppBreweryWallpaper1.png",
    "/Wallpapers/png/AppBreweryWallpaper2.png",
    "/Wallpapers/png/AppBreweryWallpaper3.png",
    "/Wallpapers/png/AppBreweryWallpaper4.png",
    "/Wallpapers/png/AppBreweryWallpaper5.png",
    "/Wallpapers/png/AppBreweryWallpaper6.png",
    "/Wallpapers/png/AppBreweryWallpaper7.png",
    "/Wallpapers/png/AppBreweryWallpaper8.png",
    "/Wallpapers/png/AppBreweryWallpaper9.png",
  ]; // Add your image URLs here
  let index = 0;

  // Function to change background image every minute
  function changeBackground() {
    console.log('main');
    index = (index + 1) % images.length;
    console.log(images[index]);
    $(".main").css("background-image", "url(" + images[index] + ")");
  }

  // Call changeBackground function every minute
  setInterval(changeBackground, 60000); // 60000 milliseconds = 1 minute
});
