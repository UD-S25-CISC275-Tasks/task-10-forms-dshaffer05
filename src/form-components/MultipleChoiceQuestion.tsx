import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group>
                    <Form.Select
                        value={selectedOption}
                        onChange={(e) => {
                            setSelectedOption(e.target.value);
                        }}
                    >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                {selectedOption === expectedAnswer ?
                    <div>✔️</div>
                :   <div>❌</div>}
            </div>
        </div>
    );
}
