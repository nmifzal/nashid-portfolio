import About from "@components/about";
import Jumbotron from "@components/jumbotron";
import Skills from "@components/skills";
import Spacer from "@components/spacer";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Spacer height={8} />
      <About />
      <Spacer height={8} />
      <Skills />
      <Spacer height={8} />
    </div>
  );
}
