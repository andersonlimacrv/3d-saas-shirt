import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) =>
						setFile(e.target.files[0])
					}
				/>
				<label
					htmlFor="file-upload"
					className="filepicker-label">
					Upload File
				</label>
				<p className="mt-2 text-gray-400 text-xs truncate">
					{file === ""
						? "No file selected"
						: file.name}
				</p>
			</div>
			<div className="mt-4 flex flex-wrap gap-3">
				<CustomButton
					type="outline"
					title="LOGO"
					handleClick={() => readFile("logo")}
					customStyles={"font-bold text-xs"}
				/>
				<CustomButton
					type="filled"
					title="FULL"
					handleClick={() => readFile("full")}
					customStyles={"text-xs"}
				/>
			</div>
		</div>
	);
};

export default FilePicker;
