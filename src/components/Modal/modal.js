import s from './modal.module.css'

const Modal = props => {
    
    return (
        <div className={`modal__wrapper ${props.isOpen ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className={s.modal}>
                <h2>{props.title}</h2>
                <hr />
                <button className='modal__close' onClick={props.onModalClose}>Close</button>
                <button className='modal__delete' onClick={props.onModalDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Modal;