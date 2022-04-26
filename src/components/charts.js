import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class ChartExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Mã ngoại tệ', VND: 0, pv: 0, amt: 1 },
				{ name: 'USD', pv: 22900, VND: 22979, amt: 22979 },
				{ name: 'UER', VND: 24782, pv: 25024, amt: 2290 },
				{ name: 'CAD', VND:18046 , pv:18316 , amt: 2000 },
				{ name: 'NZD', VND:15173, pv: 15576, amt: 2181 },
				{ name: 'VND', VND: 0, pv: 0, amt: 2500 },
				{ name: 'Kết thúc', uv: 0, pv: 0, amt: 2100 }
			]
		};
	}

	render() {
		const { data } = this.state;

		return (
			<ResponsiveContainer className="chart" height={300}>
				<LineChart awidth={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="VND" stroke="#048019" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="pv" stroke="#FF1313" />
				</LineChart>
			</ResponsiveContainer>
		);
	}
}

export default ChartExample;
