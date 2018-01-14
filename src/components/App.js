import React, { Component } from 'react';
import createStoreFn from '../stores';
import { GetFirstNum, GetSecondNum, GetCalType, GetResult } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStoreFn();
        this.state = this.store.getState();

        this.firstNumChange = this.firstNumChange.bind(this);
        this.secondNumChange = this.secondNumChange.bind(this);
        this.calTypeChange = this.calTypeChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    componentDidMount() {
        this.init();
    }

    init() {
        this.store.subscribe(() => {
            const state = this.store.getState();
            this.setState({
                result: state.result
            });
        });
    }

    firstNumChange(e) {
        const num = e.target.value;
        this.store.dispatch(GetFirstNum(num));
        this.calculate();
    }

    secondNumChange(e) {
        const num = e.target.value;
        this.store.dispatch(GetSecondNum(num));
        this.calculate();
    }

    calTypeChange(e) {
        const type = e.target.value;
        this.store.dispatch(GetCalType(type));
        this.calculate();
    }

    calculate() {
        const state = this.store.getState();
        const { firstNum, secondNum, calType } = state;
        let result = 0;
        if (calType === 'plus') {
            result = firstNum + secondNum;
        } else if (calType === 'minus') {
            result = firstNum - secondNum;
        } else if (calType === 'multiply') {
            result = firstNum * secondNum;
        } else if (calType === 'devide') {
            result = firstNum / secondNum;
        }
        this.store.dispatch(GetResult(result));
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <input type="text" onChange={e => this.firstNumChange(e)} />
                <select onChange={e => this.calTypeChange(e)}>
                    <option value="plus">+</option>
                    <option value="minus">-</option>
                    <option value="multiply">×</option>
                    <option value="devide">÷</option>
                </select>
                <input type="text" onChange={e => this.secondNumChange(e)} />
                <button onClick={this.calculate}>=</button>
                <i>{result}</i>
            </div>
        )
    }
}

export default App;