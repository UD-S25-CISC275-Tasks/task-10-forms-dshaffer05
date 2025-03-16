import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>
            <div>
                <Form.Group>
                    <Form.Label>Request Additional Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={(e) => {
                            setRequestedAttempts(Number(e.target.value));
                        }}
                    ></Form.Control>
                </Form.Group>
            </div>
            <button
                onClick={() => {
                    if (requestedAttempts > 0) {
                        setAttempts(attempts + requestedAttempts);
                    }
                }}
            >
                gain
            </button>
            <button
                onClick={() => {
                    if (attempts > 0) {
                        setAttempts(attempts - 1);
                    }
                }}
                disabled={attempts <= 0}
            >
                use
            </button>
        </div>
    );
}
