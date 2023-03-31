import React, { useState, useEffect } from 'react';

const SwitchParity = ({updateParity}) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        updateParity(checked);
    }, [checked]);
    return (
        <div className="switch">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
             {checked ? 'Чётная' : 'Нечётная'}
        </div>
    );
};

export { SwitchParity };