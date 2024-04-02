import { BodyHomeContainer } from "../components/styled/BodyhomeContainer";
import homeImage from "../assets/home.svg";
import { DefaultLayount } from "../configs/layout/DefaultLayout";
import { ButtonStyled } from "../components/styled/ButtonStyled";
export function Home() {
	return (
		<>
			<DefaultLayount>
				<BodyHomeContainer>
					<div>
						<h1>GrowTravel</h1>
						<p>O melhor serviço para você!</p>
						<ButtonStyled width="200px" padding="20px">
							Saiba mais!
						</ButtonStyled>
					</div>
					<div>
						<img src={homeImage} alt="" />
					</div>
				</BodyHomeContainer>
			</DefaultLayount>
		</>
	);
}
