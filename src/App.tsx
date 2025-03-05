import "./app.scss";

import { InfiniteSlider } from "@wellspr/slider";
import { useLayoutEffect, useRef } from "react";
import { images } from "./images";
import { NPMInstall } from "./components/npmInstall/NPMInstall";
import { Footer } from "./components/Footer/Footer";

function App() {

	const arr = images.map((image) => {
		return (
			<div key={image.id} className="slide">
				<img src={image.image} alt={image.alt} />
			</div>
		);
	});

	const slideWidthRef = useRef<string>("20rem");
	const ref = useSliderUpdate();
	
	return (
		<div className="container">
			<h2>Slider Demo App</h2>

			<NPMInstall />

			<div className="slider-container" ref={ref}>
				<InfiniteSlider
					arr={arr}
					className="slider"
					interval={3000}
					transitionDelay={1000}
					translationStep={slideWidthRef.current}
				/>
			</div>

			<Footer />
		</div>
	);
}

export default App;


const useSliderUpdate = () => {
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const slider = ref.current;

		const updateSlider = () => {
			if (slider) {
				const containerWidth = slider.getBoundingClientRect().width;
				const slidesNumber = Math.floor(containerWidth / 200);
				const sliderChild = slider.firstChild as HTMLElement;
				if (sliderChild) {
					sliderChild.style.width = slidesNumber * 200 + "px";
				}
			}
		};

		updateSlider();

		const observer = new ResizeObserver(() => {
			updateSlider();
		});

		if (slider) {
			observer.observe(slider);
		}

		return () => {
			if (slider) {
				observer.unobserve(slider);
			}
		}

	}, []);

	return ref;
}