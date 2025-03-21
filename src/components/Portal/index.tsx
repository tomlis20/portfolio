import { useState, useLayoutEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string): HTMLDivElement {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

interface ReactPortalProps {
    children: ReactNode;
    wrapperId?: string;
}

function ReactPortal({
    children,
    wrapperId = 'react-portal-wrapper'
}: ReactPortalProps) {
    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId) as HTMLDivElement | null;
        let systemCreated = false;

        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal;