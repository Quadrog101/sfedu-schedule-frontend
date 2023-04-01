import React, { useState, useEffect } from 'react';

const SwitchParity = ({updateParity}) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        updateParity(checked);
    }, [checked]);

function isEven(){
        const currentDate= new Date();
        const semesterStartDate =  new Date(currentDate.getFullYear(),1,6);
        const numberOfDays = Math.floor((currentDate - semesterStartDate) / (24 * 60 * 60 * 1000));
        const numberOfWeeks = Math.ceil(( currentDate.getDay() + 1 + numberOfDays) / 7);
        setChecked((!Boolean(numberOfWeeks % 2)));
    }

    return (<>
        <div className="switch">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
             {checked ? 'Чётная' : 'Нечётная'} 
        </div>
        <div className='parityButton'>
        <button onClick={() => isEven()} >Показать текущую неделю</button>
        </div>
        </>
    );
};

export { SwitchParity };