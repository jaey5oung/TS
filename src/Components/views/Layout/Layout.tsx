import React from "react"
import "./Layout.css"

function Layout() {
  return (
    <div className="mainLayout">
      <div className="container">
        <div className="col">
          <div className="col-12">
            <div className="main-manual">
              <ul>
                <li>Cargo templates are designed to make sites of any size or tone </li>
                <li>Templates can be fully customized or used without modification</li>
                <li>
                  To see what others have made check out the <a href="#">In Use page</a>
                </li>
                <li>
                  To learn more about how Cargo works visit <a href="#">our tutorials</a> page
                </li>
                <li>
                  If you have specific questions or need other assistance{" "}
                  <a href="#">talk to us here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
