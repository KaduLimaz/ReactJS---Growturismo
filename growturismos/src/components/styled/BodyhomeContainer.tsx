import styled from "styled-components";

export const BodyHomeContainer = styled.div`
	display: flex;
	max-width: 992px;
	min-width: 320px;
	margin: auto;
	height: calc(-190px + 100vh);
	align-items: center;
	justify-content: space-around;

	div {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		min-height: 200px;

		img {
			width: 90%;
		}
	}
`;