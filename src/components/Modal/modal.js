import style from './modal.module.css'

const Modal = ({isOpened, onModalClose, title, children}) => {
    
    return (
        <div className={isOpened ? style.active : style.modal}
            >
            <div className={style.modal_content}>

                <div>
                    <h2 className={style.modal_title}>{title}</h2>
                        {children}
                </div>
                
                <div className={style.modal_footer}>
                <button
                    className={style.modal__close}
                    onClick={() => onModalClose(false)}
                >
                    Close
                </button>
                <div className={style.line
                }></div>
                    <button className={style.modal__delete} onClick={() => onModalClose(false)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;