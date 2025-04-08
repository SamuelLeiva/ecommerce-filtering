import React from "react";
import "./Colors.css";
import Input from './../../components/Input';

function Colors({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}

export default Colors;
