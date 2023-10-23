var sidebarOpen = false;

function toggleNav() {
  if (!sidebarOpen) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
  document.getElementById("mySidebar").style.height = '105%';
  sidebarOpen = true;
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  sidebarOpen = false;
}