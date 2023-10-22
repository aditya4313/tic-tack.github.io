<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Text</title>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400italic,700|Sansita+One" rel="stylesheet">

  <style>
    /* Add a viewport meta tag */
    meta[name="viewport"] {
      width: device-width;
      initial-scale: 1;
    }

    body {
      width: 100%;
      height: 100%;
      background-color: white;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    @keyframes moveAndShrinkContent {
      from {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
      }

      to {
        top: 90px;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.7);
      }
    }

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 200px;
      overflow: hidden;
      font-family: 'Lato', sans-serif;
      font-size: 50px;
      line-height: 55px;
      color: #16a085;
      animation-name: moveAndShrinkContent;
      animation-duration: 2s;
      animation-delay: 5s;
      animation-fill-mode: forwards;
      color: #4CAF50;
    }

    .content__container {
      font-weight: 600;
      overflow: hidden;
      height: 60px;
      padding: 0 60px;
      position: relative;
    }

    .content__container:before,
    .content__container:after {
      content: '[';
      position: absolute;
      top: 0;
      color: #16a085;
      font-size: 62px;
      line-height: 60px;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    .content__container:after {
      content: ']';
      right: 0;
    }

    .content__container__text {
      display: inline;
      float: left;
      margin: 0;
    }

    .content__container__list {
      margin-top: 0;
      padding-left: 140px;
      text-align: left;
      list-style: none;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      color: #f083ec;
    }

    .content__container__list__item {
      line-height: 58px;
      margin: 0;
    }

    @keyframes opacity {
      0%,
      100% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }
    }

    @keyframes change {
      0%,
      12.66%,
      100% {
        transform: translate3d(0, 0, 0);
      }

      16.66%,
      29.32% {
        transform: translate3d(0, -25%, 0);
      }

      33.32%,
      45.98% {
        transform: translate3d(0, -50%, 0);
      }

      49.98%,
      62.64% {
        transform: translate3d(0, -75%, 0);
      }

      66.64%,
      79.3% {
        transform: translate3d(0, -50%, 0);
      }

      83.3%,
      95.96% {
        transform: translate3d(0, -25%, 0);
      }
    }

    /* Simple css to style it like a toggle switch */
    label {
      width: 180px;
      height: 30px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      background: #ebebeb;
      border-radius: 75px;
      box-shadow: inset 0px 3px 7px rgba(0, 0, 0, 0.4), inset 0px -3px 7px rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: 0.3s;
      overflow: hidden;
      padding: 10px;
    }

    label img.dark-mode,
    label img.light-mode {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s;
      z-index: 101;
    }

    label img.dark-mode {
      left: 10px;
      width: 42px;
      filter: brightness(0) invert(1);
    }

    label img.light-mode {
      right: 15px;
      width: 42px;
    }

    label:after {
      content: "";
      width: 46px;
      height: 46px;
      position: absolute;
      top: 2px;
      left: 9px;
      background: linear-gradient(180deg, #ffcc89, #d8860b);
      border-radius: 40px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }

    input {
      width: 0;
      height: 0;
      visibility: hidden;
    }

    input:checked+label {
      background: #242424;
    }

    input:checked+label:after {
      left: 187px;
      transform: translateX(-100%);
      background: linear-gradient(180deg, #777, #3a3a3a);
    }

    label:active:after {
      width: 80px;
    }

    .background {
      width: 100vw;
      height: 100vh;
      background: #fff;
      z-index: -1;
      position: absolute;
      transition: 0.3s;
    }

    input:checked+label+.background {
      background: #242424;
    }

    label svg {
      position: absolute;
      width: 30px;
      top: 15px;
      z-index: 100;
    }

    label svg.sun {
      left: 15px;
      fill: #fff;
      transition: 0.3s;
    }

    label svg.moon {
      left: 105px;
      fill: #7e7e7e;
      transition: 0.3s;
    }

    input:checked+label svg.sun {
      fill: #7e7e7e;
    }

    input:checked+label svg.moon {
      fill: #fff;
    }

    /* Slider switch CSS */
    .theme-switch-wrapper {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }

    em {
      margin-left: 10px;
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    .theme-switch {
      display: inline-block;
      height: 34px;
      position: relative;
      width: 60px;
    }

    .theme-switch input {
      display: none;
    }

    .slider {
      background-color: #ccc;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: .4s;
    }

    .slider:before {
      background-color: #fff;
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: .4s;
      width: 26px;
    }

    input:checked+.slider {
      background-color: #66bb6a;
    }

    input:checked+.slider:before {
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  </style>
</head>

<body>
  <!-- for the dark mode -->
  <input type="checkbox" id="toggle">
  <label for="toggle">
    <img class="dark-mode" src="https://www.svgrepo.com/show/528706/sun-2.svg" alt="Dark Mode">
    <img class="light-mode" src="https://www.svgrepo.com/show/526043/moon-stars.svg" alt="Light Mode">
  </label>
  <div class="background"></div>

  <div class="content">
    <div class="content__container">
      <p class="content__container__text">
        Hello
      </p>

      <ul class="content__container__list">
        <li class="content__container__list__item">World !</li>
        <li class="content__container__list__item">Users !</li>
        <li class="content__container__list__item"> Everybody !</li>
        <li class="content__container__list__item">Dear !</li>
      </ul>
    </div>
  </div>

  <script>
    document.getElementById('toggle').addEventListener('change', () => {
      document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    });

    // Trigger the initial animation after 1 second
    setTimeout(function() {
      var contentContainer = document.querySelector('.content__container');
      contentContainer.style.animation = 'moveUp 1s forwards';

      // Move to the top of the page after the initial animation
      setTimeout(function() {
        contentContainer.style.top = '0';
      }, 1000);
    }, 1000);
  </script>

</body>

</html>
