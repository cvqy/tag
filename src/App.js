import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
// import Hero from "components/hero/FullWidthWithImage"
import Hero from "components/hero/TwoColumnWithInput"
// import Hero from "components/pricing/TwoPlansWithDurationSwitcher"
// import Footer from "components/footers/MiniCenteredFooter";
import Footer from "components/footers/FiveColumnWithInputForm";
function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Routes>
      <Route path="/" element={< />} />
      </Routes>
      <Footer />
    </AnimationRevealPage>
  )
}

export default App;
