import React, { useEffect, useState } from 'react';
import { dbService } from '../../FireBase';

const TestPage = () => {
    const [table, setTable] = useState([]);
    const [isAsc, setIsAsc] = useState({ date: false, answer: false });

    const convertTimestamp = (timestamp) => {
        const now = new Date();
        const postDay = new Date(timestamp);
        let minus;
        if (now.getFullYear() > postDay.getFullYear()) {
            minus = `${now.getFullYear() - postDay.getFullYear()}년 전`;
        } else if (now.getMonth() > postDay.getMonth()) {
            minus = `${now.getMonth() - postDay.getMonth()}달 전`;
        } else if (now.getDate() > postDay.getDate()) {
            minus = `${now.getDate() - postDay.getDate()}일 전`;
        } else if (now.getDate() === postDay.getDate()) {
            const nowTime = now.getTime();
            const postTime = postDay.getTime();
            if (nowTime > postTime) {
                let sec = parseInt(
                    `${(now.getTime() - postDay.getTime()) / 1000}`
                );
                let day = parseInt(`${sec / 60 / 60 / 24}`);
                sec = sec - day * 60 * 60 * 24;
                let hour = parseInt(`${sec / 60 / 60}`);
                sec = sec - hour * 60 * 60;
                let min = parseInt(`${sec / 60}`);
                sec = parseInt(`${sec - min * 60}`);
                if (hour > 0) {
                    minus = `${hour}시간 전`;
                } else if (min > 0) {
                    minus = `${min}분 전`;
                } else if (sec > 0) {
                    minus = `${sec}초 전`;
                }
            }
        }
        return minus;
    };

    useEffect(() => {
        dbService
            .collection('contact')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                const messageArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    compareNow: convertTimestamp(doc.data().createAt),
                }));

                setTable(messageArray);
            });
    }, []);

    const onDelete = () => {};

    const onUpdate = async (event) => {
        event.preventDefault();
        await dbService.doc(`contact/${table.id}`).update({
            isContact: !table.isContact,
        });
    };

    const onSortClick = (event) => {
        event.preventDefault();
        const { name } = event.target;
        if (name === 'dateSort') {
            table.sort((a, b) => {
                if (isAsc.date) {
                    return b.createAt - a.createAt;
                } else {
                    return a.createAt - b.createAt;
                }
            });
            setTable(table);
            setIsAsc({ answer: false, date: !isAsc.date });
        } else if (name === 'answerSort') {
            table.sort((a, b) => {
                if (isAsc.answer) {
                    return b.isContact - a.isContact;
                } else {
                    return a.isContact - b.isContact;
                }
            });
            setTable(table);
            setIsAsc({ date: true, answer: !isAsc.answer });
        }
    };

    return (
        <div>
            <div>
                {' '}
                {table.map((message) => (
                    <div key={message.id}>
                        <div style={{ display: 'flex' }}>
                            <h4>{message.name}</h4>
                            <h4>{message.email}</h4>
                            <h4>{message.message}</h4>
                            <h4>{message.compareNow}</h4>
                            <h4>
                                {message.isContact ? '답변 완료' : '대기중'}
                            </h4>
                            <button onClick={}>상태 수정</button>
                        </div>
                    </div>
                ))}
                <button name="dateSort" onClick={onSortClick}>
                    날짜정렬
                </button>
                <button name="answerSort" onClick={onSortClick}>
                    답변정렬
                </button>
            </div>
        </div>
    );
};

export default TestPage;
