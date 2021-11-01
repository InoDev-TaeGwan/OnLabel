import React, { useEffect, useRef, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { dbService } from '../../../../FireBase';
import Row from './Row';

const TestComponent = () => {
    const [table, setTable] = useState([]);
    const [isAsc, setIsAsc] = useState({ date: false, answer: false });

    const convertTimestamp = (timestamp) => {
        const now = new Date();
        const postDay = new Date(timestamp);
        const nowTime = now.getTime();
        const postTime = postDay.getTime();
        let minus;
        if (now.getFullYear() > postDay.getFullYear()) {
            minus = `${now.getFullYear() - postDay.getFullYear()}년 전`;
        } else if (now.getMonth() > postDay.getMonth()) {
            if (now.getDate() - postDay.getDate() > 30) {
                minus = `${now.getMonth() - postDay.getMonth()}달 전`;
            } else {
                minus = `${parseInt(
                    `${(nowTime - postTime) / 1000 / 60 / 60 / 24}`
                )}일 전`;
            }
        } else if (now.getDate() > postDay.getDate()) {
            minus = `${now.getDate() - postDay.getDate()}일 전`;
        } else if (now.getDate() === postDay.getDate()) {
            if (nowTime > postTime) {
                let sec = parseInt(`${(nowTime - postTime) / 1000}`);
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
            .orderBy('createAt', 'desc')
            .onSnapshot((snapshot) => {
                const messageArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    compareNow: convertTimestamp(doc.data().createAt),
                }));

                setTable(messageArray);
                console.log(messageArray);
            });
    }, []);

    const onSortClick = (e, name) => {
        e.preventDefault();
        // const { name } = event.target;
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

    // console.log(table)

    const messageRef = useRef();
    const selectedItem = false;

    return (
        <div className="AdminTableContainer">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">NO</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">이메일</TableCell>
                            <TableCell
                                align="center"
                                onClick={(e) => onSortClick(e, 'dateSort')}
                            >
                                등록날짜
                            </TableCell>
                            <TableCell
                                align="center"
                                onClick={(e) => onSortClick(e, 'answerSort')}
                            >
                                답변 확인 여부
                            </TableCell>
                            <TableCell align="center">삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TestComponent;
