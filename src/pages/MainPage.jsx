import React, {useState, useEffect} from 'react';
import posovImage from '../assets/img/posov.png';
import lineGraph from '../assets/img/chart.png'

const Main = () => {
    const [criticalRound, setCriticalRound] = useState(16);
    const [totalRound, setTotalRound] = useState(112);
    const [criticalGame, setCriticalGame] = useState(34);
    const [totalGame, setTotalGame] = useState(298);
    const [name , setName] = useState('ДМИТРИЙ ПОЗОВ');

    return (
        <div className="sections">
            <div className="right-section">
                <img src={posovImage} alt="person" className="side-image" />
            </div>
            <div className="left-section">
                <h1 className="header">{name}</h1>
                <img src={lineGraph} alt="Description" className="wide-image" />
                <table className="data-table">
                    <thead>
                        <tr>    
                            <th colSpan="2">Статистика движений</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Раунд<br/>
                                <div className='table'>
                                    <div className='table-column'> 
                                        <p>Критические</p>
                                        <p>Общее число</p>
                                    </div>
                                    <div className='table-column'>
                                        <p>{criticalRound}</p>
                                        <p>{totalRound}</p>
                                    </div>
                                </div>
                            </td>
                            <td>Игра
                                <div className='table'>
                                    <div className='table-column'> 
                                        <p>Критические</p>
                                        <p>Общее число</p>
                                    </div>
                                    <div className='table-column'>
                                        <p>{criticalGame}</p>
                                        <p>{totalGame}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Main;