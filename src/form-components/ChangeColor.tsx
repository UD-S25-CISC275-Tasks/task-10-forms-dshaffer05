import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((col) => (
                    <Form.Check
                        key={col}
                        type="radio"
                        id={`color-${col}`}
                        label={col}
                        value={col}
                        onChange={() => {
                            setColor(col);
                        }}
                        checked={color === col}
                        inline
                    />
                ))}
            </div>
            <span
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                }}
                data-testid="colored-box"
            >
                {color}
            </span>
        </div>
    );
}
