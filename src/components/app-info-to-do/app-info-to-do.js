import React from 'react';

import './app-info-to-do.scss';

const AppInfoToDo = ({countToDo, countDone}) => {
    return (
        <div className="app-info-to-do">
            <span>{countToDo} more to do, {countDone} done</span>
        </div>
    );
};

export default AppInfoToDo;