import React, { Component } from 'react'
import api from '../../utils/api'


export default class Table extends Component {
    state = {
        carsInfo: []
    }
   componentDidMount(){
        api.getCarInfo("BMW").then(response=>{
                console.log(response.data.results)
                this.setState({
                    carsInfo: response.data.results
                })
        })
   }
    render(){
        return(
            <div>
                <table className= "table"> 
                    <thead>
                        <tr>
                            <th>
                                Year
                            </th>
                            <th>
                                Make
                            </th>
                            <th>
                                Model
                            </th>
                            <th>
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.carsInfo.map(info => {
                                console.log(info)
                                return(
                                    <tr key={info.objectId}>
                                    <td> {info.Year} </td>
                                    <td> {info.Make} </td>
                                    <td> {info.Model} </td>
                                    <td> {info.Category} </td>
                                </tr>
                                )
                              
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}