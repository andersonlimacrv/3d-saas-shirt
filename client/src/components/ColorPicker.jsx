import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
	const snap = useSnapshot(state);

	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				presetColors={[
					"#FF0000",
					"#00FF00",
					"#0000FF",
					"#FFFF00",
					"#00FFFF",
					"#FF00FF",
					"#FFFFFF",
					"#000000",
					"#AAAAAA",
					"#AB20FD",
					"#3CB371",
					"#EE82EE",
					"#FFA500",
					"#6A5ACD",
					"#FF6347",
					"#8B4513",
					"#F4E3B2",
					"#78906b ",
				]}
				onChange={(color) => (state.color = color.hex)}
			/>
		</div>
	);
};

export default ColorPicker;
