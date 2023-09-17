import React from 'react';

const InputGroup = ({ total, name, setID }) => {
    // console.log([...Array(total).keys()]);

    return (
        <div className="input-group mb-3">
            <select
                onChange={(i) => setID(i.target.value)}
                className="form-select"
                id={name}
            >
                <option value="1">Choose...</option>

                {[...Array(total).keys()].map((e, k) => {
                    return (
                        <option value={e + 1} key={k}>
                            {name} {" "} {e + 1}
                        </option>
                    );
                })}

            </select>
        </div >
    );
};

export default InputGroup;
