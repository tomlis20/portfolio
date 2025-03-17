import React from 'react'
import styles from './Section.module.scss'

interface SectionProps {
    children: React.ReactNode
    id?: string
    className?: string
}

export default function Section({
    children,
    id,
    className = '',
}: SectionProps) {
    return (
        <section
            id={id}
            className={`${styles.section} ${className}`}
        >
            <div className={styles['section__container']}>
                {children}
            </div>
        </section>
    )
}