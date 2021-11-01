import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableFooter,
    TablePagination,
} from '@mui/material';
import { dbService } from '../../../../FireBase';
import Row from './Row';
import TablePaginationAct from './TablePaginationAct';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TestComponent = () => {
    const [table, setTable] = useState([]);
    const [isAsc, setIsAsc] = useState({ date: false, answer: false });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - table.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const convertTimestamp = (timestamp) => {
        let now = new Date();
        let postDay = new Date(timestamp);
        let minus;
        if (now.getFullYear() > postDay.getFullYear()) {
            minus = `${now.getFullYear() - postDay.getFullYear()}년 전`;
        } else if (now.getMonth() > postDay.getMonth()) {
            if (now.getDate() - postDay.getDate() > 30) {
                minus = `${now.getMonth() - postDay.getMonth()}달 전`;
            } else {
                minus = `${parseInt(
                    `${
                        (now.getTime() - postDay.getTime()) /
                        1000 /
                        60 /
                        60 /
                        24
                    }`
                )}일 전`;
            }
        } else if (now.getDate() > postDay.getDate()) {
            minus = `${now.getDate() - postDay.getDate()}일 전`;
        } else if (now.getDate() === postDay.getDate()) {
            let nowTime = now.getTime();
            let postTime = postDay.getTime();
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
                } else if (sec >= 0) {
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
                const messageArray = snapshot.docs.map((doc, index) => ({
                    index: index + 1,
                    id: doc.id,
                    ...doc.data(),
                    compareNow: convertTimestamp(doc.data().createAt),
                }));
                setTable(messageArray);
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
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => onSortClick(e, 'dateSort')}
                            >
                                <div className="Table-Header-Sort">
                                    등록일
                                    <div className="Table-Header-Icon">
                                        <div className="triangle_up"></div>
                                        <div className="triangle_down"></div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => onSortClick(e, 'answerSort')}
                            >
                                <div className="Table-Header-Sort">
                                    답변 확인 여부
                                    <div className="Table-Header-Icon">
                                        <div className="triangle_up"></div>
                                        <div className="triangle_down"></div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center">삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? table.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : table
                        ).map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                align="right"
                                rowsPerPageOptions={[
                                    5, 10, 25,
                                    // { label: 'All', value: -1 },
                                ]}
                                colSpan={7}
                                count={table.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationAct}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TestComponent;
