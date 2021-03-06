import {Link} from "react-router-dom";
import React, { useState } from "react";
import { data } from "./FooterData";
function Footer() {
  const [isMobile, setMobile] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="App">
      <footer className="footer">
        <section className="comp-about">
          <h1>Richmond Properties</h1>
          <p>
            Celebrate life everyday enriching. With over three decades of
            providing sure, secure, and sensible homes in sustainable
            communities nationwide, Richmond Properties has become the developer
            of choice among the rising middle class making dream spaces a
            reality while offering more than the essentials.
          </p>
        </section>

        <section className="list">
          <div
            className={isMobile ? "wrapper-desk" : "wrapper"}
            onClick={() => setMobile(false)}
          >
            <div className="accordion">
              {data.map((items, index) => (
                <div className="item" key={index}>
                  <div className="title" onClick={() => toggle(index)}>
                    <h1>{items.type}</h1>
                    <span>{selected === index ? "-" : "+"}</span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    <ul>
               
                      <li>{items.list1}</li>
                
                      <li>{items.list2}</li>
              
                      <li>{items.list3}</li>
         
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </footer>
      <div className="rights">
        <p>Richmond Properties Allrights Reserved 2022</p>
      </div>
    </div>
  );
}

export default Footer;
