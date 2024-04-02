import styled from "styled-components";

export const HeaderStyled = styled.div`
	background-color: rgb(18, 42, 87);
	display: flex;
	height: 120px;
	align-items: center;
`;

export const ContainerNavStyled = styled.div`
	display: flex;
	max-width: 992px;
	min-width: 320px;
	margin: auto;
	width: 992px;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;

	h1 {
		a {
			text-decoration: none;
			color: rgb(255, 255, 255);
			font-weight: 600;
		}
	}
`;

export const NavStyled = styled.nav`
	display: flex;
	width: 100%;
	max-width: 350px;
	justify-content: center;
	align-items: center;
	flex-grow: 1;

	ul {
		list-style: none;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		li {
			display: list-item;
			text-align: -webkit-match-parent;
			unicode-bidi: isolate;
		}
	}
`;

export const StyledLink = styled.a`
	color: rgba(204, 204, 204, 0.8);
	font-weight: normal;
	/* transition: all ease 0s; */
	text-decoration: none;

	&:hover {
		color: white;
		font-weight: 500;
	}
`;
