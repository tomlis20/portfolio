import React from 'react'
import styles from './Grid.module.scss'

interface GridProps {
    type: 'one' | 'two' | 'three' | 'five'
    children: React.ReactNode
    className?: string
}

export function Grid({
    children,
    type,
    className = '',
}: GridProps) {
    return (
        <div
            className={`${styles.grid} ${styles[`grid--type-${type}`]} ${className}`}
        >
            {children}
        </div>
    )
}

export default Grid