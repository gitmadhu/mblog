import React from "react";
import Slider from "react-draggable-slider";
import "../css/styles.css";
import project1 from "/img/mbmasterkey.jpg";
import project2 from "/img/mbmasterkey.jpg";
import project3 from "/img/mbmasterkey.jpg";
import project4 from "/img/mbmasterkey.jpg";
import project5 from "/img/mbmasterkey.jpg";

export default function App() {
  const projectList = [
    {
      title: "Nature's Life",
      image: project1,
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    },
    {
      title: "Into The Waters",
      image: project2,
      description:
        "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    },
    {
      title: "Higher Than The Stars",
      image: project3,
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu."
    },
    {
      title: "Miniature Wonders",
      image: project4,
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    },
    {
      title: "Giants Of History",
      image: project5,
      description:
        "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    }
  ];

  const sliderSettings = {
    data: projectList,
    speed: 3000,
    easing: "power",
    bgColor: "#070707",
    showButton: true,
    buttonText: "View projects",
    buttonHref: "https://www.example.com",
    buttonTarget: "_self"
  };

  return (
    <div className="App">
      <Slider sliderSettings={sliderSettings} />
    </div>
  );
}