import React,{memo} from 'react';

const TableItem = memo(({id,name,email,contact,message,handleMessage, messageRef}) => {

    return (
        <>
            <tr onClick={handleMessage}>
                <td className="id">{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>1시간 전</td>
                <td className={contact ? `checkContact` : 'noneContact'}>{contact ? '확인' : '미확인'}</td>
                <td><button>삭제</button></td>
            </tr>
            <tr ref={messageRef}>
                <td colSpan="6">
                    {message}
                </td>
            </tr>
        </>
    );
});

export default TableItem;
