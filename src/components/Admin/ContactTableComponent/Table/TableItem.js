import React,{memo} from 'react';
import {dbService} from "../../../../FireBase";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const TableItem = memo(({item,index}) => {

    const onDelete = async () => {
        const ok = window.confirm('삭제하시겠습니까?')
        if(ok){
            await dbService.doc(`contact/${item.id}`).delete();
        }
    };

        const onUpdate = async (event) => {
        event.preventDefault();
        await dbService.doc(`contact/${item.id}`).update({
            isContact: !item.isContact,
        });
    };

    return (
        <>
            <tr>
                <td className="id">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.compareNow}</td>
                <td className={item.isContact ? `checkContact` : 'noneContact'}>{item.isContact ? '확인' : '미확인'}</td>
                <td>
                    {/*<span onClick={onDelete}>*/}
                    {/*    <FontAwesomeIcon icon={faTrash} />*/}
                    {/*</span>*/}
                    <button onClick={onDelete}>삭제</button>
                </td>
            </tr>
            <tr>
                <td colSpan="6">
                    {!item.isContact &&<button onClick={onUpdate}>{/*<FontAwesomeIcon icon={faCheckCircle}  />*/}답변확인</button>}
                    {item.message}
                </td>
            </tr>
        </>
    );
});

export default TableItem;
