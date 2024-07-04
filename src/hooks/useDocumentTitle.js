// hooks/useDocumentTitle.js
import { useState, useEffect } from 'react';

function useDocumentTitle(defaultTitle, blurTitle) {
    const [title, setTitle] = useState(defaultTitle);

    useEffect(() => {
        const handleBlur = () => {
            setTitle(blurTitle);
        };

        const handleFocus = () => {
            setTitle(defaultTitle);
        };

        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);

        return () => {
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
        };
    }, [defaultTitle, blurTitle]);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return [title, setTitle];
}

export default useDocumentTitle;
