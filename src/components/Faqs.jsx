import { FaqsData } from "../pages/data/FaqsData.js";
import React from "react";

function Faqs() {
  return (
    <section id="faq" className="faq">
    <div className="container" >

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <ul className="faq-list accordion" >

{
  FaqsData.map((faq)=>(
        <li key={faq.id}>
          <a href="/#" data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">{faq.ques} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
          <div id="faq1" className="collapse" data-bs-parent=".faq-list">
            <p>
              {faq.ans}
            </p>
          </div>
        </li>
  ))
}

      </ul>

    </div>
  </section>
  )
}

export default Faqs;
