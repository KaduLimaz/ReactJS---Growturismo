import styled from "styled-components";

export const HeaderStyled = styled.div`
	background-color: rgb(18, 42, 87);
	display: flex;
	height: 120px;
	align-items: center;

	& div {
		display: flex;
		max-width: 992px;
		min-width: 320px;
		margin: auto;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 10px;

		h1 {
			font-size: 3.2rem;
			a {
				text-decoration: none;
				color: white;
			}
		}
		nav {
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
		}
	}
`;
