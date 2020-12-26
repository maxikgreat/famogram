import {VFC} from 'react';import Link from 'next/link';interface LogoProps {	type?: 'full' | 'text',}export const Logo: VFC<LogoProps> = ({type = 'full'}) => {	let svg = (		<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" id="logo">			<g>				<rect fill="none" id="canvas_background" height="202" width="302" y="-1" x="-1"/>				<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">					<rect fill="url(#gridpattern)" stroke-width="0" y="1" x="1" height="600" width="800"/>				</g>			</g>			<g>				<g stroke="null" id="svg_44">					<g stroke="null" transform="matrix(1.1828644645566642,0,0,1.2313479924885564,5.776030124134422,5.426311511009089) " id="svg_5">						<polygon className="front-star" stroke="null" id="svg_6" points="103.89273071289062,1.8050063848495483 101.51272583007812,9.145011305809021 101.4527359008789,9.325004935264587 85.27272033691406,59.09501397609711 80.50272369384766,59.09501397609711 99.12271118164062,1.8050063848495483 103.89273071289062,1.8050063848495483 "/>						<polygon className="front-star" stroke="null" id="svg_7" points="101.57272338867188,9.325004935264587 101.4527359008789,9.325004935264587 101.51272583007812,9.145011305809021 101.57272338867188,9.325004935264587 "/>						<polygon className="front-star" stroke="null" id="svg_8" points="103.89273071289062,100.59501016139984 101.50273132324219,102.33500039577484 100.18273162841797,103.29500710964203 79.4527359008789,118.35500466823578 80.93272399902344,113.81501138210297 99.12271118164062,100.59501016139984 103.89273071289062,100.59501016139984 "/>						<polygon className="front-star" stroke="null" id="svg_9" points="73.77272033691406,94.50499856472015 57.12271499633789,145.74500405788422 56.62273025512695,147.26500833034515 55.15272903442383,151.79500710964203 50.382728576660156,151.79500710964203 68.99272155761719,94.50499856472015 20.272727966308594,59.09501397609711 25.0427303314209,59.09501397609711 73.77272033691406,94.50499856472015 "/>						<polygon className="front-star" stroke="null" id="svg_11" points="101.57272338867188,9.325004935264587 101.4527359008789,9.325004935264587 101.51272583007812,9.145011305809021 101.57272338867188,9.325004935264587 "/>						<polygon className="front-star" stroke="null" id="svg_12" points="113.23272705078125,71.87500894069672 108.4527359008789,71.87500894069672 101.50273132324219,50.475003600120544 103.89273071289062,43.13500726222992 113.23272705078125,71.87500894069672 "/>						<path className="front-star" stroke="null" id="svg_13" d="m150.54273,151.46501l-4.77,0l-44.27,-33.34l2.39,-1.73l32.38,23.55l7.58,6.13l0.91,0.74l5.78,4.65z"/>					</g>					<g stroke="null" transform="matrix(1.1828644645566642,0,0,1.2313479924885564,5.776030124134422,5.426311511009089) " id="svg_14">						<path className="back-star" stroke="null" id="svg_15" d="m223.58273,59.21501l-20.68,12.59l-0.16,0.09l-59.4,0l0.09,-0.06l-30.16,0l-9.38,-28.7l-2.39,7.34l-7,21.4l-30.14,0l24.43,17.75l-7.86,24.18l-1.48,4.54l20.73,-15.06l1.32,-1l2.39,-1.74l0.09,0.07l22.58,16.41l1.76,1.28l0,0l17.54,12.63c0.33,1 0.66,2.06 1,3.09q1.84,8.7 3.68,17.41l-5.75,-4.63l-0.91,-0.74l-7.61,-6.12l-32.38,-23.55l-2.39,1.73l-46.33,33.68l0,0l1.47,-4.53l0.5,-1.52l16.63,-51.25l-48.73,-35.41l60.23,0l16.18,-49.77l0.12,0l-0.06,-0.18l2.38,-7.34l18.62,57.29l101.07,0.12z"/>					</g>					<g stroke="null" transform="matrix(1.1828644645566642,0,0,1.2313479924885564,5.776030124134422,5.426311511009089) " id="svg_16">						<path className="title" stroke="null" id="svg_17" d="m123.35273,94.06501l0,6.12l-3.08,0l0,-21.38l3.06,0l0,12.2l7.65,0l0,-12.2l3.06,0l0,21.38l-3.06,0l0,-6.12l-7.63,0z"/>						<path className="title" stroke="null" id="svg_18" d="m140.79273,100.18501l-3.17,0l7.21,-26l7.21,26l-3.17,0l-4,-14.17l-4.08,14.17z"/>						<path className="title" stroke="null" id="svg_19" d="m164.01273,81.80501l0,18.38l-3.06,0l0,-18.38l-5.35,0l0,-3l13.77,0l0,3l-5.36,0z"/>						<path className="title" stroke="null" id="svg_20" d="m176.27273,100.18501l-3,0l0,-21.38l3,0l0,21.38z"/>						<path className="title" stroke="null" id="svg_21" d="m183.04273,78.80501l4,15.09l4,-15.09l3.23,0l-7.21,26.91l-7.19,-26.91l3.17,0z"/>						<path className="title" stroke="null" id="svg_22" d="m200.91273,100.18501l-3.06,0l0,-21.38l3.06,0l0,21.38z"/>						<path className="slug" stroke="null" id="svg_23" d="m120.96273,108.35501c0.13,0.42 0.48,0.67 1.13,0.67s0.92,-0.24 0.92,-0.56s-0.18,-0.5 -1.08,-0.6c-1.25,-0.16 -1.48,-0.59 -1.48,-1s0.36,-1 1.5,-1s1.57,0.63 1.61,1.06l-0.67,0c-0.05,-0.21 -0.2,-0.56 -1,-0.56s-0.8,0.28 -0.8,0.48s0.17,0.43 1,0.54c1.34,0.18 1.58,0.58 1.58,1.11s-0.48,1.11 -1.62,1.11s-1.64,-0.43 -1.76,-1.17l0.67,-0.08z"/>						<path className="slug" stroke="null" id="svg_24" d="m124.54273,104.96501l0,-0.8l0.67,0l0,0.8l-0.67,0zm0,0.92l0.67,0l0,3.55l-0.67,0l0,-3.55z"/>						<path className="slug" stroke="null" id="svg_25" d="m126.34273,106.80501l0,-0.92l0.64,0c0,0.15 0,0.35 0,0.53a1.26,1.26 0 0 1 1.14,-0.63a1.07,1.07 0 0 1 1.09,0.68a1.32,1.32 0 0 1 1.22,-0.68c0.7,0 1.27,0.41 1.27,1.45l0,2.2l-0.66,0l0,-2.17c0,-0.41 -0.14,-0.92 -0.77,-0.92s-0.93,0.38 -0.93,1.15l0,1.94l-0.66,0l0,-2.2c0,-0.42 -0.14,-0.89 -0.77,-0.89s-0.93,0.52 -0.93,1.19l0,1.9l-0.66,0l0.02,-2.63z"/>						<path className="slug" stroke="null" id="svg_26" d="m132.88273,110.98501l0,-4.18c0,-0.29 0,-0.58 0,-0.88l0.65,0a4.3,4.3 0 0 1 0,0.61a1.45,1.45 0 0 1 1.36,-0.71a1.7,1.7 0 0 1 1.65,1.81a1.8,1.8 0 0 1 -1.76,1.93a1.32,1.32 0 0 1 -1.25,-0.62l0,2.08l-0.65,-0.04zm1.84,-4.64c-0.83,0 -1.19,0.59 -1.19,1.33a1.14,1.14 0 0 0 1.17,1.29a1.2,1.2 0 0 0 1.18,-1.34a1.17,1.17 0 0 0 -1.16,-1.28z"/>						<path className="slug" stroke="null" id="svg_27" d="m137.45273,109.43501l0,-5.27l0.67,0l0,5.27l-0.67,0z"/>						<path className="slug" stroke="null" id="svg_28" d="m139.61273,105.88501c0.75,1.74 1.16,2.73 1.26,3l0,0c0.12,-0.35 0.48,-1.36 1.16,-3l0.69,0l-1.39,3.36c-0.62,1.53 -0.85,1.84 -1.74,1.84a3.43,3.43 0 0 1 -0.47,0l0,-0.58a2.89,2.89 0 0 0 0.39,0c0.48,0 0.66,-0.2 1,-0.89l-1.64,-3.71l0.74,-0.02z"/>						<path className="slug" stroke="null" id="svg_29" d="m143.82273,109.43501l0,-3l-0.66,0l0,-0.53l0.66,0l0,-0.47c0,-0.81 0.35,-1.31 1.18,-1.31a2.21,2.21 0 0 1 0.42,0l0,0.55a1.73,1.73 0 0 0 -0.32,0c-0.47,0 -0.61,0.21 -0.61,0.78l0,0.44l0.78,0l0,0.53l-0.82,0l0,3l-0.63,0.01z"/>						<path className="slug" stroke="null" id="svg_30" d="m146.00273,104.96501l0,-0.8l0.66,0l0,0.8l-0.66,0zm0,0.92l0.66,0l0,3.55l-0.66,0l0,-3.55z"/>						<path className="slug" stroke="null" id="svg_31" d="m147.80273,106.80501c0,-0.3 0,-0.63 0,-0.9l0.64,0a5.51,5.51 0 0 1 0,0.66a1.33,1.33 0 0 1 1.28,-0.76a1.31,1.31 0 0 1 1.38,1.49l0,2.16l-0.68,0l0,-2c0,-0.58 -0.21,-1 -0.88,-1s-1.1,0.56 -1.1,1.38l0,1.71l-0.66,0l0.02,-2.74z"/>						<path className="slug" stroke="null" id="svg_32" d="m155.67273,104.16501l0,4.24c0,0.34 0,0.68 0,1l-0.64,0a4.63,4.63 0 0 1 0,-0.54a1.32,1.32 0 0 1 -1.3,0.63a1.71,1.71 0 0 1 -1.73,-1.84a1.83,1.83 0 0 1 1.81,-1.9a1.28,1.28 0 0 1 1.22,0.55l0,-2.17l0.64,0.03zm-1.82,4.8c0.84,0 1.19,-0.54 1.19,-1.32s-0.28,-1.3 -1.17,-1.3a1.22,1.22 0 0 0 -1.2,1.33a1.19,1.19 0 0 0 1.18,1.29z"/>						<path className="slug" stroke="null" id="svg_33" d="m159.14273,105.88501c0.76,1.74 1.17,2.73 1.27,3l0,0c0.12,-0.35 0.48,-1.36 1.16,-3l0.7,0l-1.39,3.36c-0.63,1.53 -0.86,1.84 -1.75,1.84a3.42,3.42 0 0 1 -0.46,0l0,-0.58a2.82,2.82 0 0 0 0.39,0c0.48,0 0.66,-0.2 1,-0.89l-1.63,-3.71l0.71,-0.02z"/>						<path className="slug" stroke="null" id="svg_34" d="m166.45273,107.65501a1.9,1.9 0 0 1 -3.79,0a1.9,1.9 0 0 1 3.79,0zm-3.1,0a1.24,1.24 0 0 0 1.21,1.33a1.19,1.19 0 0 0 1.2,-1.32a1.22,1.22 0 0 0 -1.22,-1.33a1.19,1.19 0 0 0 -1.19,1.32z"/>						<path className="slug" stroke="null" id="svg_35" d="m170.58273,108.39501l0,1l-0.64,0c0,-0.1 0,-0.35 0,-0.61c-0.17,0.41 -0.49,0.7 -1.27,0.7a1.25,1.25 0 0 1 -1.33,-1.44l0,-2.2l0.67,0l0,2.08c0,0.53 0.21,1 0.85,1s1.08,-0.44 1.08,-1.47l0,-1.61l0.67,0l-0.03,2.55z"/>						<path className="slug" stroke="null" id="svg_36" d="m171.71273,106.85501c0,-0.32 0,-0.65 0,-1l0.65,0c0,0.11 0,0.48 0,0.8a1.48,1.48 0 0 1 1.44,-0.9l0,0.64a1.36,1.36 0 0 0 -1.44,1.53l0,1.48l-0.66,0l0.01,-2.55z"/>						<path className="slug" stroke="null" id="svg_37" d="m179.91273,108.32501a1.64,1.64 0 0 1 -1.73,1.2a1.74,1.74 0 0 1 -1.87,-1.85a1.8,1.8 0 0 1 1.87,-1.89a1.59,1.59 0 0 1 1.73,1.24l-0.64,0a1,1 0 0 0 -1.06,-0.7a1.34,1.34 0 0 0 0,2.66a1.06,1.06 0 0 0 1.07,-0.66l0.63,0z"/>						<path className="slug" stroke="null" id="svg_38" d="m184.27273,107.65501a1.89,1.89 0 0 1 -3.78,0a1.89,1.89 0 0 1 3.78,0zm-3.1,0a1.24,1.24 0 0 0 1.21,1.33a1.19,1.19 0 0 0 1.2,-1.32a1.22,1.22 0 0 0 -1.22,-1.33a1.19,1.19 0 0 0 -1.17,1.32l-0.02,0z"/>						<path className="slug" stroke="null" id="svg_39" d="m187.40273,107.35501l0,0.57l-2.24,0l0,-0.57l2.24,0z"/>						<path className="slug" stroke="null" id="svg_40" d="m188.70273,108.35501c0.13,0.42 0.49,0.67 1.13,0.67s0.92,-0.24 0.92,-0.56s-0.18,-0.5 -1.08,-0.6c-1.25,-0.16 -1.48,-0.59 -1.48,-1s0.37,-1 1.5,-1s1.57,0.63 1.61,1.06l-0.67,0c-0.05,-0.21 -0.2,-0.56 -1,-0.56s-0.8,0.28 -0.8,0.48s0.17,0.43 1,0.54c1.33,0.18 1.57,0.58 1.57,1.11s-0.48,1.11 -1.62,1.11s-1.64,-0.43 -1.76,-1.17l0.68,-0.08z"/>						<path className="slug" stroke="null" id="svg_41" d="m191.78273,105.88501l0.71,0l0,-1.14l0.67,0l0,1.14l0.92,0l0,0.53l-0.92,0l0,1.94c0,0.4 0.1,0.59 0.49,0.59a1.5,1.5 0 0 0 0.35,0l0,0.49a1.62,1.62 0 0 1 -0.56,0.07c-0.73,0 -0.95,-0.33 -0.95,-1l0,-2l-0.71,0l0,-0.62z"/>						<path className="slug" stroke="null" id="svg_42" d="m197.94273,108.55501c0,0.34 0,0.79 0,0.88l-0.63,0a4.8,4.8 0 0 1 0,-0.52c-0.18,0.36 -0.58,0.61 -1.33,0.61c-1,0 -1.38,-0.61 -1.38,-1.14c0,-0.9 0.83,-1.15 1.85,-1.15l0.82,0l0,-0.19c0,-0.39 -0.17,-0.75 -0.93,-0.75s-0.83,0.3 -0.91,0.62l-0.66,0c0,-0.47 0.35,-1.13 1.57,-1.13s1.58,0.63 1.58,1.22l0.02,1.55zm-0.65,-0.85l-0.85,0c-0.81,0 -1.2,0.18 -1.2,0.65s0.26,0.65 0.85,0.65a1,1 0 0 0 1.2,-1.15l0,-0.15z"/>						<path className="slug" stroke="null" id="svg_43" d="m199.11273,106.85501c0,-0.32 0,-0.65 0,-1l0.65,0c0,0.11 0,0.48 0,0.8a1.48,1.48 0 0 1 1.44,-0.9l0,0.64a1.36,1.36 0 0 0 -1.44,1.53l0,1.48l-0.66,0l0.01,-2.55z"/>					</g>				</g>			</g>		</svg>	);		if (type === 'text') {		svg = (			<svg id="logo" width="125" height="50" xmlns="http://www.w3.org/2000/svg">				<g>					<rect fill="none" id="canvas_background" height="52" width="127" y="-1" x="-1"/>					<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">						<rect fill="url(#gridpattern)" stroke-width="0" y="1" x="1" height="100" width="200"/>					</g>				</g>				<g>					<g stroke="null" id="svg_35">						<g stroke="null"						   transform="matrix(1.3954137556242578,0,0,1.3678447746385722,2.2410996293141556,7.755090913098343) "						   id="svg_5">							<g stroke="null" id="svg_6">								<path stroke="null" id="svg_8"								      d="m5.78854,13.22609l0,6.14l-3.06,0l0,-21.44l3.06,0l0,12.24l7.65,0l0,-12.24l3.06,0l0,21.44l-3.06,0l0,-6.14l-7.65,0z"								      className="title"/>								<path stroke="null" id="svg_9"								      d="m23.22854,19.36609l-3.17,0l7.21,-26l7.21,26l-3.17,0l-4,-14.18l-4.08,14.18z" className="title"/>								<path stroke="null" id="svg_10"								      d="m46.45854,0.98609l0,18.38l-3.06,0l0,-18.38l-5.36,0l0,-3.06l13.77,0l0,3.06l-5.35,0z"								      className="title"/>								<path stroke="null" id="svg_11" d="m58.72854,19.36609l-3,0l0,-21.44l3,0l0,21.44z" className="title"/>								<path stroke="null" id="svg_12"								      d="m65.47854,-2.07391l4,15.09l4,-15.09l3.25,0l-7.21,26.91l-7.2,-26.91l3.16,0z" className="title"/>								<path stroke="null" id="svg_13" d="m83.34854,19.36609l-3.06,0l0,-21.44l3.06,0l0,21.44z"								      className="title"/>								<path stroke="null" id="svg_14"								      d="m3.39854,27.52609c0.13,0.42 0.49,0.67 1.13,0.67s0.92,-0.24 0.92,-0.56s-0.18,-0.5 -1.08,-0.61c-1.25,-0.15 -1.48,-0.58 -1.48,-1s0.37,-1 1.5,-1s1.57,0.63 1.61,1.06l-0.67,0c-0.05,-0.21 -0.2,-0.56 -1,-0.56s-0.79,0.28 -0.79,0.48s0.16,0.43 1,0.53c1.33,0.19 1.57,0.59 1.57,1.12s-0.48,1.11 -1.62,1.11s-1.64,-0.5 -1.76,-1.24l0.67,0z"								      className="slug"/>								<path stroke="null" id="svg_15"								      d="m6.98854,24.13609l0,-0.77l0.66,0l0,0.8l-0.66,-0.03zm0,0.92l0.66,0l0,3.54l-0.66,0l0,-3.54z"								      className="slug"/>								<path stroke="null" id="svg_16"								      d="m8.77854,25.97609l0,-0.92l0.64,0a4.35,4.35 0 0 1 0,0.53a1.24,1.24 0 0 1 1.14,-0.63a1.08,1.08 0 0 1 1.1,0.68a1.32,1.32 0 0 1 1.22,-0.68c0.69,0 1.26,0.41 1.26,1.45l0,2.19l-0.66,0l0,-2.16c0,-0.41 -0.14,-0.93 -0.77,-0.93s-0.93,0.38 -0.93,1.15l0,1.94l-0.63,0l0,-2.23c0,-0.43 -0.15,-0.9 -0.78,-0.9s-0.93,0.52 -0.93,1.2l0,1.89l-0.66,0l0,-2.58z"								      className="slug"/>								<path stroke="null" id="svg_17"								      d="m15.31854,30.15609l0,-5.1l0.65,0c0,0.1 0,0.34 0,0.61a1.45,1.45 0 0 1 1.36,-0.71a1.7,1.7 0 0 1 1.66,1.81a1.81,1.81 0 0 1 -1.77,1.93a1.33,1.33 0 0 1 -1.25,-0.62l0,2.08l-0.65,0zm1.84,-4.64c-0.83,0 -1.19,0.58 -1.19,1.33a1.13,1.13 0 0 0 1.17,1.28a1.2,1.2 0 0 0 1.18,-1.33a1.17,1.17 0 0 0 -1.16,-1.28z"								      className="slug"/>								<path stroke="null" id="svg_18" d="m19.88854,28.59609l0,-5.23l0.67,0l0,5.26l-0.67,-0.03z"								      className="slug"/>								<path stroke="null" id="svg_19"								      d="m22.04854,25.05609c0.76,1.74 1.16,2.73 1.27,3l0,0c0.13,-0.35 0.48,-1.36 1.16,-3l0.7,0l-1.4,3.36c-0.62,1.53 -0.85,1.84 -1.74,1.84a2.31,2.31 0 0 1 -0.46,0l0,-0.58l0.38,0c0.48,0 0.67,-0.2 1,-0.9l-1.64,-3.7l0.73,-0.02z"								      className="slug"/>								<path stroke="null" id="svg_20"								      d="m26.25854,28.59609l0,-3l-0.66,0l0,-0.52l0.66,0l0,-0.48c0,-0.8 0.35,-1.3 1.18,-1.3a1.61,1.61 0 0 1 0.42,0l0,0.55a1.71,1.71 0 0 0 -0.31,0c-0.48,0 -0.62,0.2 -0.62,0.78l0,0.44l0.8,0l0,0.52l-0.8,0l0,3l-0.67,0.01z"								      className="slug"/>								<path stroke="null" id="svg_21"								      d="m28.43854,24.13609l0,-0.77l0.67,0l0,0.8l-0.67,-0.03zm0,0.92l0.67,0l0,3.54l-0.67,0l0,-3.54z"								      className="slug"/>								<path stroke="null" id="svg_22"								      d="m30.23854,25.95609c0,-0.31 0,-0.63 0,-0.9l0.65,0c0,0.12 0,0.41 0,0.66a1.41,1.41 0 0 1 2.66,0.73l0,2.15l-0.67,0l0,-2c0,-0.59 -0.22,-1.05 -0.89,-1.05s-1.1,0.56 -1.1,1.38l0,1.7l-0.66,0l0.01,-2.67z"								      className="slug"/>								<path stroke="null" id="svg_23"								      d="m38.11854,23.36609l0,5.26l-0.64,0a4.39,4.39 0 0 1 0,-0.54a1.3,1.3 0 0 1 -1.3,0.64a1.71,1.71 0 0 1 -1.73,-1.84a1.84,1.84 0 0 1 1.81,-1.9a1.27,1.27 0 0 1 1.22,0.55l0,-2.17l0.64,0zm-1.83,4.8c0.84,0 1.19,-0.54 1.19,-1.32s-0.28,-1.31 -1.17,-1.31a1.22,1.22 0 0 0 -1.2,1.34a1.19,1.19 0 0 0 1.18,1.26l0,0.03z"								      className="slug"/>								<path stroke="null" id="svg_24"								      d="m41.58854,25.05609c0.75,1.74 1.16,2.73 1.26,3l0,0c0.12,-0.35 0.48,-1.36 1.16,-3l0.72,0l-1.4,3.36c-0.62,1.53 -0.85,1.84 -1.74,1.84a2.34,2.34 0 0 1 -0.47,0l0,-0.58l0.39,0c0.48,0 0.66,-0.2 1,-0.9l-1.64,-3.7l0.72,-0.02z"								      className="slug"/>								<path stroke="null" id="svg_25"								      d="m48.88854,26.82609a1.89,1.89 0 0 1 -3.78,0a1.89,1.89 0 0 1 3.78,0zm-3.1,0a1.24,1.24 0 0 0 1.21,1.33a1.19,1.19 0 0 0 1.2,-1.32a1.22,1.22 0 0 0 -1.22,-1.33a1.18,1.18 0 0 0 -1.19,1.32z"								      className="slug"/>								<path stroke="null" id="svg_26"								      d="m53.01854,27.56609c0,0.35 0,0.69 0,1l-0.65,0c0,-0.09 0,-0.35 0,-0.6c-0.17,0.41 -0.49,0.7 -1.26,0.7a1.25,1.25 0 0 1 -1.38,-1.41l0,-2.2l0.66,0l0,2.07c0,0.54 0.21,1 0.85,1s1.08,-0.44 1.08,-1.47l0,-1.6l0.67,0l0.03,2.51z"								      className="slug"/>								<path stroke="null" id="svg_27"								      d="m54.14854,26.02609c0,-0.33 0,-0.65 0,-1l0.66,0c0,0.1 0,0.48 0,0.8a1.46,1.46 0 0 1 1.43,-0.9l0,0.64a1.35,1.35 0 0 0 -1.43,1.53l0,1.47l-0.67,0l0.01,-2.54z"								      className="slug"/>								<path stroke="null" id="svg_28"								      d="m62.35854,27.49609a1.67,1.67 0 0 1 -1.74,1.2a1.74,1.74 0 0 1 -1.89,-1.85a1.81,1.81 0 0 1 1.88,-1.89a1.59,1.59 0 0 1 1.72,1.23l-0.6,0a1,1 0 0 0 -1.06,-0.69a1.18,1.18 0 0 0 -1.18,1.33a1.19,1.19 0 0 0 1.18,1.33a1.06,1.06 0 0 0 1.06,-0.66l0.63,0z"								      className="slug"/>								<path stroke="null" id="svg_29"								      d="m66.72854,26.82609a1.89,1.89 0 0 1 -3.78,0a1.89,1.89 0 0 1 3.78,0zm-3.09,0a1.23,1.23 0 0 0 1.2,1.33a1.19,1.19 0 0 0 1.2,-1.32a1.21,1.21 0 0 0 -1.21,-1.33a1.18,1.18 0 0 0 -1.19,1.32z"								      className="slug"/>								<path stroke="null" id="svg_30" d="m69.83854,26.51609l0,0.58l-2.24,0l0,-0.58l2.24,0z"								      className="slug"/>								<path stroke="null" id="svg_31"								      d="m71.14854,27.52609c0.12,0.42 0.48,0.67 1.12,0.67s0.92,-0.24 0.92,-0.56s-0.17,-0.5 -1.08,-0.61c-1.24,-0.15 -1.47,-0.58 -1.47,-1s0.36,-1 1.49,-1s1.6,0.56 1.6,0.99l-0.67,0c0,-0.21 -0.19,-0.56 -1,-0.56s-0.8,0.28 -0.8,0.48s0.17,0.43 1,0.53c1.33,0.19 1.58,0.59 1.58,1.12s-0.49,1.11 -1.63,1.11s-1.64,-0.43 -1.76,-1.17l0.7,0z"								      className="slug"/>								<path stroke="null" id="svg_32"								      d="m74.22854,25.05609l0.7,0l0,-1.14l0.67,0l0,1.14l0.92,0l0,0.52l-0.92,0l0,1.94c0,0.41 0.1,0.59 0.49,0.59a1.42,1.42 0 0 0 0.35,0l0,0.49a1.88,1.88 0 0 1 -0.55,0.07c-0.74,0 -1,-0.33 -1,-1l0,-2l-0.7,0l0.04,-0.61z"								      className="slug"/>								<path stroke="null" id="svg_33"								      d="m80.37854,27.72609a7.53,7.53 0 0 0 0,0.87l-0.64,0a3,3 0 0 1 0,-0.51a1.36,1.36 0 0 1 -1.34,0.61c-1,0 -1.37,-0.61 -1.37,-1.14c0,-0.9 0.82,-1.16 1.84,-1.16l0.86,0l0,-0.18c0,-0.39 -0.17,-0.75 -0.93,-0.75s-0.83,0.3 -0.91,0.62l-0.66,0c0,-0.47 0.36,-1.13 1.57,-1.13s1.58,0.63 1.58,1.21l0,1.56zm-0.65,-0.86l-0.85,0c-0.81,0 -1.2,0.19 -1.2,0.66s0.26,0.65 0.85,0.65c1,0 1.2,-0.55 1.2,-1.15l0,-0.16z"								      className="slug"/>								<path stroke="null" id="svg_34"								      d="m81.54854,26.02609c0,-0.33 0,-0.65 0,-1l0.65,0c0,0.1 0,0.48 0,0.8a1.47,1.47 0 0 1 1.44,-0.9l0,0.64a1.36,1.36 0 0 0 -1.44,1.53l0,1.47l-0.66,0l0.01,-2.54z"								      className="slug"/>							</g>						</g>					</g>				</g>			</svg>		)	}		return <Link href="/">{svg}</Link>;};