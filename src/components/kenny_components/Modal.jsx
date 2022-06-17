import './Modal.css'

const Modal = ({ header, body, footer, children, isOpen, onToggle, ...rest }) => {
  const { id } = rest
  const padHeader = typeof header === 'string' ? 'pad-y' : ''
  const padFooter = typeof footer === 'string' ? 'pad-y' : ''
  const padBody = typeof (body || children) === 'string' ? 'pad-y' : ''
  const onClick = () => onToggle(id)

  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`} onClick={onClick}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <span className='close-button container' onClick={onClick}>&times;</span>
        { header && <header className={`modal-header container ${padHeader}`}>{header}</header> }
        <div className={`modal-body container ${padBody}`}>
          {body ? body : children}
        </div>
        { footer && <footer className={`modal-footer container ${padFooter}`}>{footer}</footer> }
      </div>
    </div>
  )
}

export default Modal
