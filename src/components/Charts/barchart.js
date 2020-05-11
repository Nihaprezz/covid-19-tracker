import React from 'react';
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
    constructor(props){
        super(props);

        let dataCategories = Object.keys(props.globalInfo).slice(0,3) //getting the name of categories from keys
        let { confirmed: {value: confirmedValue},
                deaths: {value: deathValue},
                recovered: {value: recoveredValue}} = props.globalInfo

        this.state = {
            options: {
              chart: {
                id: 'apexchart-example'
              },
              xaxis: {
                categories: dataCategories //passing the categories
              }
            },
            series: [{
              name: 'series-1',
              data: [confirmedValue, recoveredValue, deathValue]
            }]
        }
    }

    componentDidMount(){
        
    }


    // componentDidUpdate(prevProps){
    //     if(prevProps.globalInfo.confirmed.value !== this.props.globalInfo.confirmed){
    //         this.updateStats();
    //     }
    // }

    // updateStats = () => {
    //     debugger
    //     let {
    //         confirmed: {value: confirmedValue},
    //         deaths: {value: deathValue},
    //         recovered: {value: recoveredValue}
    //     } = this.props.globalInfo

    //     this.setState({series: {data: [confirmedValue, recoveredValue, deathValue] , name: "series-1"}})
    // }

    render(){
        return (
            <div>
                this is the return chart

                <Chart options={this.state.options} series={this.state.series} type="bar" width={600} height={400} />
            </div>
        )
    }
}

export default BarChart;