import { BodyHomeContainer } from "../components/styled/BodyhomeContainer";
import homeImage from "../assets/home.svg";
import { DefaultLayount } from "../configs/layout/DefaultLayout";
export function Home() {
	return (
		<>
			<DefaultLayount>
				<BodyHomeContainer>
					<div>
						<h1>GrowTravel</h1>
						<p>O melhor serviço para você!</p>
						<button>Saiba mais!</button>
					</div>
					<div>
						<img src={homeImage} alt="" />
					</div>
				</BodyHomeContainer>
			</DefaultLayount>
		</>
	);
}
