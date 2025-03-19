import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    [key: string]: unknown;
}

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

export function Button({
    children = null,
    className = '',
    ...props
}: ButtonProps) {
    const classNames = cn(
        styles.button,
        className
    );

    return (
        <button className={classNames} {...props}>
            {children}
            <PlusIcon />
        </button>
    );
}

export default Button;