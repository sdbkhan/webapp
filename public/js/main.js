const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const tem = document.getElementById("temp");
const tem_status = document.getElementById("status");
const datahide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
  event.preventDefault();

  let citVal = cityName.value;

  if (citVal === "") {
    city_name.innerHTML = `please write the city name`;

    datahide.classList.add("datahide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${citVal}&units=metric&appid=b7dbffc6d5fa7fcaf2cf6251b86d820d`;
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
      tem.innerHTML = arrData[0].main.temp;
      tem_status.innerHTML = arrData[0].weather[0].main;

      const tempmod = arrData[0].weather[0].main;

      if (tempmod === "Fog") {
        tem_status.innerHTML =
          "<i class='fas fa-smog' style='color:#15aabf'></i>";
      } else if (tempmod === "Clouds") {
        tem_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
      } else if (tempmod === "Rain") {
        tem_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
      } else {
        tem_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = `please enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getinfo);