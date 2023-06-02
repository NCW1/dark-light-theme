import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const themeClass = isDarkTheme ? "dark-theme" : "light-theme";
	const themeText = isDarkTheme ? "Dark Theme" : "Light Theme";

	return (
		<div className={`App ${themeClass}`}>
			<Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
				<h1>Dark and Light Theme</h1>
				<h2 className="mt-4">{themeText}</h2>
				<Button
					variant="primary"
					onClick={toggleTheme}
					className="mt-4 px-4 py-3 btn"
				>
					{isDarkTheme
						? "Switch to Light Theme"
						: "Switch to Dark Theme"}
				</Button>
			</Container>
		</div>
	);
}

export default App;
