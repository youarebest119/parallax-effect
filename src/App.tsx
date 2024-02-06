import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import img1 from "./assets/images (1).jpg";
import img2 from "./assets/images (2).jpg";
import img3 from "./assets/images (3).jpg";
function App() {
	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
	const firstImg = useTransform(scrollYProgress, [0, 1], [250, -50]);
	const lastImg = useTransform(scrollYProgress, [0, 1], [250, -150]);

	return (
		<>
			<div style={{ height: "200vh" }} />
			<section ref={ref} className="parallax">
				<motion.h2 style={{ y }}>
					Parallax Effect
				</motion.h2>
				<div className="parallax_box">
					<motion.img style={{ y: firstImg }} src={img1} alt="" />
					<img src={img3} alt="" />
					<motion.img style={{ y: lastImg }} src={img2} alt="" />
				</div>
			</section>
			<div style={{ height: "200vh" }} />
		</>
	)
}

export default App
