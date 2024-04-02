import { HeaderStyled } from "../../components/styled/Header.Styled";

export function DefaultLayount({ children }) {
	return (
		<>
			<HeaderStyled />
			{children}
			<HeaderStyled />
		</>
	);
}
