import { useEffect } from 'react';
import './Popup.css';

function Popup({ isOpen, name, onClose, children, selectedCard }) {
  useEffect(() => {
    if (!isOpen && !selectedCard) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);

    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose, selectedCard]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`pop-up  ${
        isOpen || selectedCard ? 'pop-up_active' : ''
      } popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div
        className={`${
          isOpen ? 'pop-up__container' : ''
        } pop-up__container_type_${name}`}
      >
        {children}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          onClick={onClose}
          type='button'
          className={`pop-up__close pop-up__close_place_${name}`}
        />
      </div>
    </div>
  );
}

export default Popup;
