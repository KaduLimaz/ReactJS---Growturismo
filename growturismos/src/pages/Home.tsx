import {
	ContainerNavStyled,
	HeaderStyled,
	NavStyled,
	StyledLink,
} from "../components/styled/Header.Styled";
import { BodyHomeContainer } from "../components/styled/BodyhomeContainer";
import homeImage from "../assets/home.svg";
export function Home() {
	return (
		<>
			<HeaderStyled>
				<ContainerNavStyled>
					<h1>
						<a href="/">GrowTravel</a>
					</h1>
					<NavStyled>
						<ul>
							<li>
								<StyledLink href="/quem-somos">Quem Somos</StyledLink>
							</li>
							<li>
								<StyledLink href="/servicos">Serviços</StyledLink>
							</li>
							<li>
								<StyledLink href="/planos">Planos</StyledLink>
							</li>
							<li>
								<StyledLink href="/contato">Contato</StyledLink>
							</li>
						</ul>
					</NavStyled>
				</ContainerNavStyled>
			</HeaderStyled>
			<BodyHomeContainer>
				<div>
					<h1>Oi</h1>
					<p>teste</p>
					<p>teste</p>
				</div>
				<div>
					<img src={homeImage} alt="" />
				</div>
			</BodyHomeContainer>
		</>
	);
}
