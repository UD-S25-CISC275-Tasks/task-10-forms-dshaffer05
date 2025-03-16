import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <div>
                {userAnswer === expectedAnswer ?
                    <div>✔️</div>
                :   <div>❌</div>}
            </div>
        </div>
    );
}
