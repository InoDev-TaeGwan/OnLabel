import React,{useCallback} from 'react';

const Modal = ({show}) => {
    const stopPropagation = useCallback((e) => {
        e.stopPropagation(); // 버블링 이벤트 제거
    }, []);

    if (!show) {
        return null;
    }
    return (
        <div className="modalOverlay">
            <div onClick={stopPropagation}>

            </div>
        </div>
    );
};

export default Modal;
