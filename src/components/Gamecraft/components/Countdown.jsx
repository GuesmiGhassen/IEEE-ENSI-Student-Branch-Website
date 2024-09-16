import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export function Countdown(props) {
	var date = new Date("04/21/2024 08:00:00");
	var milliseconds = date.getTime();
	const [days, hours, minutes, seconds] = useCountdown(milliseconds);

	if (new Date().getTime() > milliseconds) {
		return null;
	}

	return (
		<div className="xtext-[#2d459e]">
			{/* <h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
					Starting in:
				</h1> */}
			<div className="flex flex-wrap items-center justify-center lg:gap-4">
				{"days" && (
					<div className="relative flex h-[80px] w-[80px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						{/* <SVGCircle radius={daysRadius} /> */}
						{days}
						<span className="text-xs font-bold uppercase">days</span>
					</div>
				)}
				{"hours" && (
					<div className="relative flex h-[80px] w-[80px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						{/* <SVGCircle radius={hoursRadius} /> */}
						{hours}
						<span className="text-xs font-bold uppercase">hours</span>
					</div>
				)}
				{"minutes" && (
					<div className="relative flex h-[80px] w-[80px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						{/* <SVGCircle radius={minutesRadius} /> */}
						{minutes}
						<span className="text-xs font-bold uppercase">minutes</span>
					</div>
				)}
				{"seconds" && (
					<div className="relative flex h-[80px] w-[80px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						{/* <SVGCircle radius={secondsRadius} /> */}
						{seconds}
						<span className="text-xs font-bold uppercase">seconds</span>
					</div>
				)}
			</div>
		</div>
	);
}