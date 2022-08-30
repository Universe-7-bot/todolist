import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Lists = (props) => { //this is to make a cut line
    const [line, setLine] = useState();
    const cutIt = () => {
        setLine("line-through");
    };

    return (
        <>
            {/* <li>
                <span className="txt fs-5 fw-semibold"><span onClick={() => {
                    props.onSelect(props.id);
                }} className="bg-danger fs-6">✖️</span> {props.text}</span> 
            </li> */}

            <li className="p-1">
                <IconButton aria-label="delete" size="small" className="shadow">
                    {/* <DeleteIcon onClick={cutIt} fontSize="small" className="icon_style" /> */}
                    <DeleteIcon onClick={() => {
                        props.onSelect(props.id);
                    }} fontSize="small" className="icon_style" />
                </IconButton>
                <span style={{ textDecoration: line }} className="p-2 fs-5 fw-semibold text-info"> {props.text}</span>
            </li>
        </>
    );
};

export default Lists;