import { BodyHomeContainer } from "../components/styled/BodyhomeContainer";
import { DefaultLayount } from "../configs/layout/DefaultLayout";
import QuemSomosImg from "../assets/aeroporto.svg";

export function QuemSomos() {
	return (
		<>
			<DefaultLayount>
				<BodyHomeContainer>
					<div>
						<img src={QuemSomosImg} alt="QuemSomosImg" />
					</div>
					<div>
						<h1>| Quem Somos</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							totam neque consequuntur minima, quis, tenetur maxime!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							totam neque consequuntur minima, Et alias laboriosam sit sed
							voluptatem!
						</p>
					</div>
				</BodyHomeContainer>
			</DefaultLayount>
		</>
	);
}
