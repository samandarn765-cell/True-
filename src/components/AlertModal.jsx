import React from 'react'

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-box" onClick={e => e.stopPropagation()}>
        <div className="checkmark">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Маълумот қабул қилинди!</h3>
        <p>{message || 'Сизнинг аризангиз муваффақиятли юборилди. Биз тез орада сиз билан боғланамиз.'}</p>
        <button className="btn-blue" onClick={onClose}>Ёпиш</button>
      </div>
    </div>
  )
}

export default AlertModal
