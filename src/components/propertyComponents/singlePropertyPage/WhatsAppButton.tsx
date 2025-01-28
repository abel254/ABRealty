import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css"; // Add custom styles for the button

export default function WhatsAppButton() {
  const phoneNumber = "0712313980"; // Replace with your WhatsApp phone number
  const message = "Hello, I am interested in your services!"; // Replace with your default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp />
    </button>
  );
}
