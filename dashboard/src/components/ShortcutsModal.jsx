import React from "react";

const ShortcutsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="shortcuts-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Keyboard Shortcuts</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <hr />
        <div className="modal-body">
          <div className="column">
            <h4>Navigation</h4>
            <div className="shortcut-item"><span>Open universal search</span> <kbd>Ctrl</kbd> + <kbd>K</kbd></div>
            <div className="shortcut-item"><span>Dashboard</span> <kbd>A</kbd></div>
            <div className="shortcut-item"><span>Orders</span> <kbd>O</kbd></div>
            <div className="shortcut-item"><span>Holdings</span> <kbd>H</kbd></div>
            <div className="shortcut-item"><span>Positions</span> <kbd>P</kbd></div>
            <div className="shortcut-item"><span>Funds</span> <kbd>F</kbd></div>
            <div className="shortcut-item"><span>Profile</span> <kbd>I</kbd></div>
          </div>
          <div className="column">
            <h4>Marketwatch</h4>
            <div className="shortcut-item"><span>Focus search</span> <kbd>~</kbd> or <kbd>`</kbd></div>
            <div className="shortcut-item"><span>Cycle instruments</span> <kbd>↑</kbd> <kbd>↓</kbd></div>
            <div className="shortcut-item"><span>Buy instrument</span> <kbd>B</kbd></div>
            <div className="shortcut-item"><span>Sell instrument</span> <kbd>S</kbd></div>
            <div className="shortcut-item"><span>Open market depth</span> <kbd>D</kbd></div>
            <div className="shortcut-item"><span>Open chart</span> <kbd>C</kbd></div>
            <div className="shortcut-item"><span>Delete instrument</span> <kbd>Del</kbd></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortcutsModal;