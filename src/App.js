import React from "react";
import style from "./style.css";
import profileImage from "./profile/profileImage.jpg";
import Profile from "./profile/Profile.js";
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";

var name = "Ahmed";

const App = () => {
	return(
		<React.Fragment>
			<Profile fullName={name} handleName={(e) => alert("My Name Is : "+name)}>
				<img src={profileImage} />
			</Profile>
		</React.Fragment>
	);
}

App.propTypes = {
	fullName: PropTypes.string,
	bio: PropTypes.string,
	profession: PropTypes.string,
	handleName: PropTypes.func
}

export default App;