const openingDate = "29 August 2023 03:45:57 AM";
const inputfields = document.querySelectorAll("input");
console.log(inputfields);

document.getElementById("endtime").textContent = openingDate;

const clock = () => {
  const newDate = new Date(openingDate);
  const nowDate = new Date();
  const diff = (newDate - nowDate) / 1000;
  if (diff < 0) return;
  inputfields[0].value = Math.floor(diff / 3600 / 24);
  inputfields[1].value = Math.floor((diff / 3600) % 24);
  inputfields[2].value = Math.floor((diff / 60) % 60);
  inputfields[3].value = Math.floor(diff % 60);

  //   console.log(diff);
};
setInterval(() => {
  clock();
}, 1000);
