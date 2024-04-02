import { ButtonStyled } from "../components/styled/ButtonStyled";
import { CardContainer } from "../components/styled/CardContainer";
import { CardStyled } from "../components/styled/CardStyled";
import { DefaultLayount } from "../configs/layout/DefaultLayout";

export function Planos() {
	return (
		<>
			<DefaultLayount>
				<CardContainer>
					<CardStyled>
						<div>
							<div>
								<h1>Plano 1</h1>
								<hr />
								<ul>
									<li>Suporte 24h</li>
									<li>Serviços de quarto</li>
									<li>Guia turístico</li>
								</ul>
								<ButtonStyled width="180px" padding="15px">
									Saiba Mais!
								</ButtonStyled>
							</div>
						</div>
					</CardStyled>
					<CardStyled>
						<div>
							<div>
								<h1>Plano 2</h1>
								<hr />
								<ul>
									<li>Suporte 24h</li>
									<li>Serviços de quarto</li>
									<li>Guia turístico</li>
									<li>Roteiro de trilhas</li>
									<li>Serviço personalizado</li>
								</ul>
								<ButtonStyled width="180px" padding="15px">
									Saiba Mais!
								</ButtonStyled>
							</div>
						</div>
					</CardStyled>
					<CardStyled>
						<div>
							<div>
								<h1>Plano 1</h1>
								<hr />
								<ul>
									<li>Suporte 24h</li>
									<li>Serviços de quarto</li>
									<li>Guia turístico</li>
									<li>Roteiros de trilhas</li>
									<li>Serviço personalizado</li>
									<li>Área Vip</li>
								</ul>
								<ButtonStyled width="180px" padding="15px">
									Saiba Mais!
								</ButtonStyled>
							</div>
						</div>
					</CardStyled>
				</CardContainer>
			</DefaultLayount>
		</>
	);
}
