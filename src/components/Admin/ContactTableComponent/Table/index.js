import React, {useCallback, useRef, useEffect} from 'react';
import TableItem from "./TableItem";

const Table = () => {
    const datas = [
        {
            id:990,
            name:'name1',
            email:'ceo@onlabel.io',
            contact:false,
            message:'message message message message message990'
        },
        {
            id:991,
            name:'name2',
            email:'ceo2@onlabel.io',
            contact:true,
            message:'message message message message message991'
        },
        {
            id:992,
            name:'name3',
            email:'ceo3@onlabel.io',
            contact:false,
            message:'message message message message message992'
        },
        {
            id:993,
            name:'name4',
            email:'ceo4@onlabel.io',
            contact:true,
            message:'message message message message message993'
        },
    ]

    const messageRef = useRef();
    const selectedItem = false;

    useEffect(()=>{
        messageRef.current.style.display = 'none'
    },[])

    const handleMessage = useCallback(()=> {
        messageRef.current.style.display = ''
    },[])

    return (
        <>
            <div className="AdminTableContainer">
                <table>
                    <thead>
                    <tr>
                        <th className="id">NO</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>등록 날짜</th>
                        <th>답변 확인 여부</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    {datas.map(
                        (data)=>
                            <TableItem
                                key={data.id}
                                id={data.id}
                                name={data.name}
                                email={data.email}
                                contact={data.contact}
                                message={data.message}
                                handleMessage={handleMessage}
                                selectedItem={selectedItem}
                                messageRef={messageRef}
                                 />)
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
