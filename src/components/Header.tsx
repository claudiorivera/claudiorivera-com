import { Menu as MenuIcon } from "@mui/icons-material";
import {
	AppBar,
	Button,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

import { Link } from "./Link";

const menuLinks = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "Music",
		url: "/music",
	},
	{
		title: "Dev",
		url: "/dev",
	},
	{
		title: "Blog",
		url: "/blog",
	},
];

type HeaderProps = {
	siteTitle: string;
	siteDescription: string;
};
export const Header = ({ siteTitle, siteDescription }: HeaderProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	// Responsive menu
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const isOpen = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			color="transparent"
			position="relative"
			elevation={0}
			sx={{
				padding: 2,
				color: "white",
				justifyContent: isMobile ? "center" : "start",
			}}
		>
			<Toolbar>
				<Grid container spacing={2} alignItems="baseline">
					<Grid item>
						<Link
							href="/"
							sx={{
								textDecoration: "none",
								color: "white",
							}}
						>
							<Typography
								variant="h4"
								sx={{
									fontSize: "2.4rem",
									fontWeight: 700,
									letterSpacing: "-0.04em",
								}}
							>
								{siteTitle}
							</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Typography
							variant={isMobile ? "h5" : "h4"}
							sx={{
								letterSpacing: "-.04em",
							}}
						>
							{siteDescription}
						</Typography>
					</Grid>
				</Grid>
				{isMobile && (
					<>
						<IconButton
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={(event) => {
								setAnchorEl(event.currentTarget);
							}}
							color="inherit"
						>
							<MenuIcon fontSize="large" />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={isOpen}
							onClose={handleClose}
						>
							{menuLinks.map(({ title, url }) => (
								<MenuItem
									key={url}
									onClick={handleClose}
									component={Link}
									href={url}
								>
									{title}
								</MenuItem>
							))}
						</Menu>
					</>
				)}
				{!isMobile &&
					menuLinks.map(({ title, url }) => (
						<Button
							key={url}
							color="inherit"
							component={Link}
							href={url}
							size="large"
						>
							{title}
						</Button>
					))}
			</Toolbar>
		</AppBar>
	);
};
