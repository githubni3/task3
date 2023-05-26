function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const formHandler = async(event, id) => {
  event.preventDefault();
  await delay(2000);
  document.getElementById(id).style.opacity = 0.4;
  document.getElementById(id).style.pointerEvents = "none";
  document.getElementById(id).style.hover = 'none';
  document.getElementById(id).style.focus = 'none';
};
