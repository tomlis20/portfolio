import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    icon?: 'internal' | 'external';
    children?: React.ReactNode;
    className?: string;
    [key: string]: unknown;
}

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

const NewTabIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    )
}

export function Button({
    children = null,
    inverted,
    icon = 'internal',
    className = '',
    ...props
}: ButtonProps) {
    const classNames = cn(
        styles.button,
        {
            [styles['button--is-inverted']]: inverted,
            [styles['button--is-external']]: icon === 'external'
        },
        className
    );

    return (
        <button className={classNames} {...props}>
            {children}
            { icon === 'external' ? <NewTabIcon /> : <PlusIcon /> }
        </button>
    );
}

export default Button;