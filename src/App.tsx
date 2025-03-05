import "./app.scss";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

import "highlight.js/styles/atom-one-light.css";

import angular from "./assets/angular.svg";
import django from "./assets/django.svg";
import docker from "./assets/docker.svg";
import flask from "./assets/flask.svg";
import js from "./assets/js.svg";
import nodejs from "./assets/nodejs.svg";
import laravel from "./assets/laravel.svg";
import nextjs from "./assets/nextjs.svg";
import nuxtjs from "./assets/nuxtjs.svg";
import react from "./assets/react.svg";
import svelte from "./assets/svelte.svg";
import vite from "./assets/vite.svg";
import vue from "./assets/vue.svg";
import { InfiniteSlider } from "@wellspr/slider";
import { useLayoutEffect, useRef, useState } from "react";
import { IconBrandGithub, IconClipboard, IconCopy } from "@tabler/icons-react";

const images = [
	{ id: 0, image: angular, alt: "angular logo" },
	{ id: 1, image: django, alt: "django logo" },
	{ id: 2, image: docker, alt: "docker logo" },
	{ id: 3, image: flask, alt: "flask logo" },
	{ id: 4, image: js, alt: "js logo" },
	{ id: 5, image: nodejs, alt: "nodejs logo" },
	{ id: 6, image: laravel, alt: "laravel logo" },
	{ id: 7, image: nextjs, alt: "nextjs logo" },
	{ id: 8, image: nuxtjs, alt: "nuxtjs logo" },
	{ id: 9, image: react, alt: "react logo" },
	{ id: 10, image: svelte, alt: "svelte logo" },
	{ id: 11, image: vite, alt: "vite logo" },
	{ id: 12, image: vue, alt: "vue logo" },
]

function App() {

	const arr = images.map((image) => {
		return (
			<div key={image.id} className="slide">
				<img src={image.image} alt={image.alt} />
			</div>
		);
	});

	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const slideWidthRef = useRef<string>("20rem");
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

	const code = hljs.highlight(
		"npm install @wellspr/slider",
		{ language: "bash" }
	).value;

	return (
		<div className="container">
			<h2>Slider Demo App</h2>

			<div className="npm-install">
				<pre><code>{code}</code></pre>
				<button className="npm-install__copy-button"
					onClick={() => {
						navigator.clipboard.writeText("npm install @wellspr/slider")
							.then(() => {
								setShowTooltip(true);
								setTimeout(() => {
									setShowTooltip(false);
								}, 2000);
							})
					}}>
					<IconCopy />
				</button>
				{
					showTooltip &&
					<div className="npm-install__tooltip">
						Copied to clipboard
						<IconClipboard />
					</div>
				}
			</div>

			<div className="slider-container" ref={ref}>
				<InfiniteSlider
					arr={arr}
					className="slider"
					interval={3000}
					transitionDelay={1000}
					translationStep={slideWidthRef.current}
				/>
			</div>

			<footer className="footer">
				<div className="footer__copy">
					&copy; 2025 by Slider - All rights reserved
				</div>
				<div className="footer__links">
					<div className="footer__links__github-link">
						<a href="https://github.com/wellspr/slider">
							View on Github
							<IconBrandGithub size={24} />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
