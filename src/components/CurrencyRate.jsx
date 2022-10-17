import React, { Component } from 'react';
import AtmService from '../AtmService';
import Table from 'react-bootstrap/Table';


const atmService = new AtmService()

export default class CurrencyRate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rates: [],
        }
    }

    componentDidMount() {
        let self = this
        atmService.getCurrencyRate()
            .then((result) => {
                self.setState({ rates: result })
            })
    }

    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Курс</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rates.map(el =>
                        <tr key={el}>
                            <td>{el.currency}</td>
                            <td>{el.rate}</td>
                        </tr>)}
                </tbody>
            </Table>
        )
    }
}
