import React, {useState} from 'react';
import Chart from './components/Chart';
import CompanySymbol from './components/CompanySymbol'

const App = () => {
    const [symbol, setSymbol] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const submitSybolHandler = (symbol, startDate, endDate) => {
        setSymbol(symbol);
        setStartDate(startDate);
        setEndDate(endDate);
        console.log(`Appjs symbol ${symbol}, Start ${startDate}, End ${endDate}`)

    }
    return (
        <div style={ { display: 'flex', justifyContent: 'center' } }>
            <div style={ { width: '80%' } }>
               <CompanySymbol onSubmitSymbol={submitSybolHandler}/>
                <Chart symbol={symbol} startDate={startDate} endDate={endDate}/>
            </div>
        </div>
    );
};

export default App;
