import Metrics from "../components/Metrices"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Comparison from "../components/Comparison"
import OpenSource from "../components/OpenSource"

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Metrics />
            <Features />
            {/* Demos
            BenchMark */}
            <Comparison />
            <OpenSource />
        </>
    )
}

export default LandingPage