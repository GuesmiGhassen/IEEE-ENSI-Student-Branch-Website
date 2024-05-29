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

	var date = new Date("02/17/2024 10:00:00"); // some mock date
	var milliseconds = date.getTime();
	const [days, hours, minutes, seconds] = useCountdown(milliseconds);

	if (new Date().getTime() > milliseconds) {
		return null;
	}

	return (
		<div className="xtext-[#2d459e]">
			<div className="flex flex-wrap items-center justify-center lg:gap-4 text-[#B0BDC1]">
				{"days" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] lg:text-4xl text-2xl font-bold leading-[30px]">
						{formatTwoDigits(days)}
						<span className="text-xs font-bold uppercase">days</span>
					</div>
				)}<div className="lg:text-3xl">:</div>
				{"hours" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] lg:text-4xl text-2xl font-bold leading-[30px]">
						{formatTwoDigits(hours)}
						<span className="text-xs font-bold uppercase">hours</span>
					</div>
				)}<div className="lg:text-3xl">:</div>
				{"minutes" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] lg:text-4xl text-2xl font-bold leading-[30px]">
						{formatTwoDigits(minutes)}
						<span className="text-xs font-bold uppercase">minutes</span>
					</div>
				)}<div className="lg:text-3xl">:</div>
				{"seconds" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] lg:text-4xl text-2xl font-bold leading-[30px]">
						{formatTwoDigits(seconds)}
						<span className="text-xs font-bold uppercase">seconds</span>
					</div>
				)}
			</div>
		</div>
	);
}
function formatTwoDigits(number) {
    return number < 10 ? '0' + number : number;
};
