import React from "react";

const Profile = 
	({fullName="Annonymous",bio="None",profession="None",handleName=null,children}) => 
	{
	return(
		<React.Fragment>
			<button className="btn btn-secondary" onClick={handleName}>
				Alert Profile Name !
			</button>
			{children}
		</React.Fragment>
	);
}

export default Profile;