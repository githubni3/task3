const formHandler = (event, id) => {
  event.preventDefault();
  document.getElementById(id).style.opacity = 0.4;
  document.getElementById(id).style.pointerEvents = "none";
};
