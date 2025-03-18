import React from 'react'
import styles from './Section.module.scss'

interface SectionProps {
    children: React.ReactNode
    id?: string
    title?: string,
    className?: string
}

export function Section({
    children,
    id,
    title,
    className = '',
}: SectionProps) {
    return (
        <section
            id={id}
            className={`${styles.section} ${className}`}
        >
            <div className={styles['section__container']}>
                {title && <h2>{title}</h2>}
                {children}
            </div>
        </section>
    )
}

export default Section;