import { CardContainer } from "../components/styled/CardContainer";
import { CardStyled, H2styled } from "../components/styled/CardStyled";
import { DefaultLayount } from "../configs/layout/DefaultLayout";
import hospedagemImg from "../assets/hotel.svg";

export function Servicos() {
	return (
		<>
			<DefaultLayount>
				<CardContainer>
					<CardStyled border="none">
						<img src={hospedagemImg} alt="hospedagemImg" />
						<H2styled>Hospedagem</H2styled>
					</CardStyled>
				</CardContainer>
			</DefaultLayount>
		</>
	);
}
