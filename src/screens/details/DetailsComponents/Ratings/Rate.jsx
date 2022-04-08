import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyle";
const Rate = () => {
const [rate, setRate] = useState(0);
return (
	<Container>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label key={givenRating}>
			<Radio
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
				// alert(`Are you sure you want to give ${givenRating} stars ?`);
			}}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(229, 212, 19)"
					: "gray"
				}
			/>
			</Rating>
		</label>
		);
	})}
	</Container>
);
};

export default Rate;
