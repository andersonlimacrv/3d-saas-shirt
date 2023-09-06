import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
	const shadows = useRef();
	return (
		<AccumulativeShadows
			red={shadows}
			temporal
			frames={60}
			alphaTest={0.3}
			scae={1}
			rotation={[Math.PI / 2, 0, 0]}
			position={[0, 0, -0.14]}>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.9}
				ambient={0.25}
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={5}
				radius={5}
				intensity={0.2}
				ambient={0.4}
				position={[-20, 5, 1]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
