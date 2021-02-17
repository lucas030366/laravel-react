import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header = () => {
	return (
		<AppBar >
			<Toolbar>
				<Typography variant="h6" noWrap>
					Mini variant drawer
          </Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header
