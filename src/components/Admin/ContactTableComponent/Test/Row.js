import React, { useState } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { dbService } from '../../../../FireBase';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';

const Row = ({ row }) => {
    const [open, setOpen] = useState(false);

    const onDelete = async () => {
        const ok = window.confirm('삭제하시겠습니까?');
        if (ok) {
            await dbService.doc(`contact/${row.id}`).delete();
        }
    };

    const onUpdate = async (event) => {
        event.preventDefault();
        await dbService.doc(`contact/${row.id}`).update({
            isContact: !row.isContact,
        });
    };

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell style={{ width: 10 }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {/*{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}*/}
                        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="center" style={{ width: 28 }}>
                    {row.index}
                </TableCell>
                <TableCell align="center" style={{ width: '18%' }}>
                    {row.name}
                </TableCell>
                <TableCell align="center" style={{ width: '20%' }}>
                    {row.email}
                </TableCell>
                <TableCell align="center" style={{ width: 128 }}>
                    {row.compareNow}
                </TableCell>
                <TableCell
                    align="center"
                    className={row.isContact ? `checkContact` : 'noneContact'}
                    style={{ width: 128 }}
                >
                    {row.isContact ? '확인' : '미확인'}
                </TableCell>
                <TableCell align="center" style={{ width: 100 }}>
                    <DeleteIcon
                        style={{ cursor: 'pointer' }}
                        onClick={onDelete}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        padding: 0,
                    }}
                    colSpan={7}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 0,
                            }}
                        >
                            <div className="Scroll-wrap">
                                <div className="Contact-content">
                                    {row.message
                                        .split('<br>')
                                        .map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                </div>
                            </div>
                            {!row.isContact && (
                                <div className="Button-wrap">
                                    <Button
                                        onClick={onUpdate}
                                        variant="outlined"
                                        color={'success'}
                                        startIcon={
                                            <CheckIcon color="success" />
                                        }
                                    >
                                        {/*<FontAwesomeIcon icon={faCheckCircle}  />*/}
                                        답변확인
                                    </Button>
                                </div>
                            )}
                            {/*<Typography*/}
                            {/*    variant="h6"*/}
                            {/*    gutterBottom*/}
                            {/*    component="span"*/}
                            {/*>*/}
                            {/*    History :*/}
                            {/*</Typography>*/}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default Row;
