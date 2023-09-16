import React from 'react';

const InputGroup = ({ total, name, setID }) => {
    // console.log([...Array(total).keys()]);

    return (
        <div class="input-group mb-3">
            <select
                onChange={(i) => setID(i.target.value)}
                class="form-select"
                id={name}
            >
                <option selected>Choose...</option>

                {[...Array(total).keys()].map(e => {
                    return (
                        <option value={e + 1}>
                            {name} {" "} {e + 1}
                        </option>
                    );
                })}

            </select>
        </div >
    );
};

export default InputGroup;
