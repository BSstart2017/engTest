import React, { FC, useEffect, useState } from 'react';
import { Heading } from "@chakra-ui/react";

type TimerProps = {
	isStart: boolean;
};

const Timer: FC<TimerProps> = ({ isStart }) => {
	const [time, setTime] = useState(0);
	
	useEffect(() => {
		let timer: NodeJS.Timeout;
		
		if (isStart) {
			timer = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			// @ts-ignore
			clearInterval(timer);
			setTime(0);
		}
		
		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, [isStart]);
	
	return (
		<Heading as='h2' size='md'>
			Потрачено времени: {time} сек
		</Heading>
	);
};

export default Timer;
