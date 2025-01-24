import { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        V
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <p>🔹 BerkahChain helps fundraisers connect with donors.</p>
          <p>🔹 Supports medical, disaster relief, and project funding.</p>
          <p>🔹 Donate securely using crypto digital wallets.</p>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
