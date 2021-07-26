import { useEffect, useState } from "react";

const today = Date.now();
const oneDay = 24 * 60 * 60 * 1000;
let start = today - 3 * oneDay;

const App = () => {
	const [week, setWeek] = useState([]);

	const getWeekDays = (temp) => {
		let dates = [];

		for (let i = 1; i <= 7; i++) {
			dates.push(new Date(temp).toString().split(" "));
			temp += oneDay;
		}

		return dates;
	};

	useEffect(() => {
		setWeek(getWeekDays(start));
	}, []);

	const increment = () => {
		start += oneDay;
		setWeek(getWeekDays(start));
	};

	const decrement = () => {
		start -= oneDay;
		setWeek(getWeekDays(start));
	};

	const isToday = (date, month, year) => {
		const [, currmonth, currdate, curryear] = new Date(today).toString().split(" ");
		return currdate === date && currmonth === month && year === curryear;
	};

	return (
		<div className="container">
			<div className="week">
				<div className="dot" onClick={decrement}>
					<div className="sdot"></div>
				</div>
				<div className="dates">
					{week.map(([day, month, date, year], index) => (
						<div
							className={isToday(date, month, year) ? "card bold" : "card"}
							key={index}
						>{`${month} ${date}`}</div>
					))}
				</div>
				<div className="dot" onClick={increment}>
					<div className="sdot"></div>
				</div>
			</div>
		</div>
	);
};

export default App;
