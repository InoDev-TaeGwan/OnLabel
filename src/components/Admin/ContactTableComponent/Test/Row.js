import React, {useState} from 'react';
import {TableCell, TableRow} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {dbService} from "../../../../FireBase";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);

    const onDelete = async () => {
        const ok = window.confirm('삭제하시겠습니까?')
        if(ok){
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
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {/*{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}*/}
                        {open ? <div>open</div> : <div>close</div>}
                    </IconButton>
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center" >{row.compareNow}</TableCell>
                <TableCell align="center" className={row.isContact ? `checkContact` : 'noneContact'}>{row.isContact ? '확인' : '미확인'}</TableCell>
                <TableCell align="center"><button onClick={onDelete}>삭제</button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <div>
                                asd
                            </div>
                            {!row.isContact &&<button onClick={onUpdate}>{/*<FontAwesomeIcon icon={faCheckCircle}  />*/}답변확인</button>}
                            {row.message}
                            <Typography variant="h6" gutterBottom component="span">
                                History :
                            </Typography>
                            <Typography variant="h6" gutterBottom component="span">
                                History
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default Row;
