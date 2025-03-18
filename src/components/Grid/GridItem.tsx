import React from 'react';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData type
import styles from './Grid.module.scss';

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string | StaticImageData; // Accept both string and StaticImageData
    children?: React.ReactNode;
    className?: string;
}

export function GridItem({
    image,
    children = null,
    className = '',
    ...props
}: GridItemProps) {
    const classNames = cn(
        styles.grid__item,
        {
            [styles['grid__item--has-image']]: image,
        },
        className
    );

    return (
        <div className={classNames} {...props}>
            <div className={styles.grid__item__text}>
                {children}
            </div>
            {image && (
                <div className={styles.grid__item__media}>
                    <Image
                        src={image}
                        alt=""
                    />
                </div>
            )}
        </div>
    );
}

export default GridItem;