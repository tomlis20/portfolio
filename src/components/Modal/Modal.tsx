import React, { useEffect, useRef, RefObject } from 'react';
import ReactPortal from '../Portal';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';

interface ModalProps {
    type?: 'compact' | 'wide' | 'full';
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    disableScrolling?: boolean;
    disableGutters?: boolean;
}

const CloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button className={styles['modal__close']} {...props}>
            <span>X</span>
        </button>
    );
};

export function Modal({
    type = 'compact',
    isOpen,
    onClose,
    children,
    className,
    disableScrolling = false,
    disableGutters = false,
}: ModalProps) {
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === 'Escape' ? onClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [onClose, isOpen]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const nodeRef: RefObject<HTMLDivElement> = useRef(null);

    const modalClassNames = cn(
        styles.modal,
        {
            [styles[`modal--type-${type}`]]: type,
            [styles['modal--no-scroll']]: disableScrolling,
            [styles['modal--no-gutters']]: disableGutters,
        },
        className
    );

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <CSSTransition
                in={isOpen}
                timeout={150} // Match SCSS transition duration
                unmountOnExit
                classNames={{
                    enter: styles['modal-wrapper--enter'],
                    enterActive: styles['modal-wrapper--enter-active'],
                    exit: styles['modal-wrapper--exit'],
                    exitActive: styles['modal-wrapper--exit-active'],
                }}
                nodeRef={nodeRef}
            >
                <div className={styles['modal-wrapper']} ref={nodeRef}>
                    <div className={styles['modal-overlay']} onClick={onClose} />
                    <div className={modalClassNames}>
                        <div className={styles['modal__content']}>
                            <CloseButton onClick={onClose} />
                            {children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </ReactPortal>
    );
}

export default Modal;