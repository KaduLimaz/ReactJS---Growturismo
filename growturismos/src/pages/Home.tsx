import { HeaderStyled } from "../components/styled/Header.Styled";

export function Home() {
	return (
		<HeaderStyled>
			<div>
				<h1>
					<a href="#">GrowTravel</a>
				</h1>
				<nav>
					<ul>
						<li>Quem Somos</li>
						<li>Serviços</li>
						<li>Planos</li>
						<li>Contato</li>
					</ul>
				</nav>
			</div>
		</HeaderStyled>
	);
}
