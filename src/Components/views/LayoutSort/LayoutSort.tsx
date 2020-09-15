import React from "react"
import "./LayoutSort.css"
function LayoutSort() {
  return (
    <div className="layoutSort">
      <div className="layout-Line">
        <div className="container">
          <div className="row">
            <div className="col-4">
              {/* <img src={require("./assets/red.jpg")} className="Layout-image" alt="외않들어가" /> */}
              <span className="layout-Fakebutton" aria-label="fake"></span>
              <span className="layout-Fakebutton2" aria-label="fake"></span>
              <span className="layout-Fakebutton3" aria-label="fake"></span>

              <iframe
                className="layout-Image"
                src="https://player.vimeo.com/video/394323786?background=1&autoplay=1&loop=1&;autopause=0&muted=1&controls=0&quality=720p"
                data-ready="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <a href="https://cargo.site/Templates#fixedwidth" className="layout-Text" target="_blank">
        Fixed Width See it In Use
      </a>
    </div>
  )
}

export default LayoutSort
