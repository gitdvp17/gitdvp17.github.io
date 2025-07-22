let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `DVP Musings are cool, ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "sunny-2.jpg") {
    myImage.setAttribute("src", "sunny-1.jpg");
  } else {
    myImage.setAttribute("src", "sunny-2.jpg");
  }
});

function createNeonWallClock(containerId) {
  const style = document.createElement("style");
  style.textContent = `
      .clock {
        width: 300px;
        height: 300px;
        border: 10px solid #39FF14;
        border-radius: 50%;
        position: relative;
        box-shadow: 0 0 20px #39FF14;
        margin: auto;
      }

      .hand {
        position: absolute;
        background-color: #39FF14;
        top: 50%;
        transform-origin: 100%;
        box-shadow: 0 0 8px #39FF14;
      }

      .hand.hour {
        height: 4px;
        width: 35%;
      }

      .hand.minute {
        height: 3px;
        width: 45%;
      }

      .hand.second {
        height: 2px;
        width: 50%;
      }

      .center {
        width: 12px;
        height: 12px;
        background-color: #39FF14;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0 0 10px #39FF14;
      }

      body {
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
    `;
  document.head.appendChild(style);

  const container = document.getElementById(containerId);
  const clock = document.createElement("div");
  clock.className = "clock";
  clock.innerHTML = `
      <div class="hand hour" id="hour-hand"></div>
      <div class="hand minute" id="minute-hand"></div>
      <div class="hand second" id="second-hand"></div>
      <div class="center"></div>
    `;
  container.appendChild(clock);

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;

    document.getElementById(
      "second-hand"
    ).style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById(
      "minute-hand"
    ).style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById(
      "hour-hand"
    ).style.transform = `rotate(${hourDeg}deg)`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}
