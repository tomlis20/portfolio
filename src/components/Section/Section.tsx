import React from 'react'
import styles from './Section.module.scss'

interface SectionProps {
    children: React.ReactNode
    id?: string
    className?: string
    backgroundColor?: string
    padding?: string
}

export default function Section({
    children,
    id,
    className = '',
    backgroundColor,
    padding,
}: SectionProps) {
    const sectionStyles = {
        backgroundColor,
        padding,
    }

    return (
        <section
            id={id}
            className={`${styles.section} ${className}`}
            style={sectionStyles}
        >
            {children}
        </section>
    )
}