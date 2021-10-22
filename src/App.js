import React, {useState} from 'react';
import Chart from './components/Chart';
import CompanySymbol from './components/CompanySymbol'

const App = () => {
    const [symbol, setSymbol] = useState('')
    const submitSybolHandler = (symbol) => {
        setSymbol(symbol);
        console.log(`Appjs symbol ${symbol}`)

    }
    return (
        <div style={ { display: 'flex', justifyContent: 'center' } }>
            <div style={ { width: '70%' } }>
               <CompanySymbol onSubmitSymbol={submitSybolHandler}/>
                <Chart symbol={symbol}/>
            </div>
        </div>
    );
};

export default App;
