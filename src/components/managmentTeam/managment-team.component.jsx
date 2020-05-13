import React from "react";
import "./managment-team.styles.css";

const ManagmentTeam = () => (
  <section id="managmetn-team__main">
    <h1>مجلس الادارة</h1>
    <ul className="managment-team__list">
      <li className="managment-team__list-item">
        <div className="managment-team__image"></div>
        <p className="managment-team__description">أ.د: عمر الشافعى</p>
      </li>
      <li className="managment-team__list-item">
        <div className="managment-team__image"></div>
        <p className="managment-team__description">أ.د: ماجدة اكرم عبيد</p>
      </li>
      <li className="managment-team__list-item">
        <div className="managment-team__image"></div>
        <p className="managment-team__description">أ.د: أحمد الطويل </p>
      </li>
    </ul>
  </section>
);

export default ManagmentTeam;
