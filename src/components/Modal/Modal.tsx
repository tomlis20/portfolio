import React, { useEffect, useRef } from 'react';
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

interface CloseButtonProps {
    onClick: () => void;
}

const CloseButton = ({...props}: CloseButtonProps) => {
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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isOpen]);

    const nodeRef = useRef(null);

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