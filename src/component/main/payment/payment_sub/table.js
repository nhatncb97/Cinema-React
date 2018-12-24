import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-hover" style={{width: '70%'}}>
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Phim</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số Lượng</th>
                        <th scope="col">Tổng</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td />
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td />
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td />
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td />
                        <td />
                        <td />
                        <td />
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;