import React from "react";
import "./whatsapp.css";
import { MdWhatsapp } from "react-icons/md";
const WhatsppBtn = () => {
  return (
    <div className="whatsapp-btn">
      <a href="https://wa.me/+919122010150" class="">
        <MdWhatsapp size={40} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsppBtn;
