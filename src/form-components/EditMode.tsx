import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    const [userName, setUserName] = useState<string>("Your Name");
    const [studentStatus, setStudentStatus] = useState<boolean>(true);
    const toggleStudentStatus = () => {
        setStudentStatus(!studentStatus);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-status-checkbox"
                        label="Is Student?"
                        checked={studentStatus}
                        onChange={toggleStudentStatus}
                    />
                </div>
            :   <div>
                    {studentStatus ?
                        <div>{userName} is a student</div>
                    :   <div>{userName} is not a student</div>}
                </div>
            }
        </div>
    );
}
