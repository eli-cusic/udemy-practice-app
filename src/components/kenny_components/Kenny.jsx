import { useState } from 'react'
import Modal from './Modal'
import { modalsData } from './data'
import logo from '../../logo.svg'
import './Kenny.css'

function Kenny() {
  const [isOpen, setIsOpen] = useState(Array(modalsData.length).fill(false))

  const onToggle = (index) => {
    const temp = [...isOpen]
    temp[index] = !temp[index]
    setIsOpen(temp)
  }

  const buttons = modalsData.map(
    (ml,i) => <button key={i} onClick={() => onToggle(i)} >
      {`Modal${ml.id+1}`}
    </button>
  )

  const modals = modalsData.map(
    (ml, i) => <Modal isOpen={isOpen[i]} id={ml.id} header={ml.header} footer={ml.footer} body={ml.body} key={ml.id} onToggle={onToggle}>
      {ml.children}
    </Modal>
  )

  return (
    <>
      <div className='wrapper'>
        <div className='title'>
          <img src={logo} className="react-logo" alt='logo' />
          <span>Kenny's Component</span>
        </div>
        <div className='buttons'>{buttons}</div>
      </div>
      {modals}
    </>
  )
}

export default Kenny
