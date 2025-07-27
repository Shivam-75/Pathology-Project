import Header from "../../components/header/Header";
import Viraldeases from "../../components/viralDease/Viraldeases";
import Machineimg from "../../components/machine_img/Machineimg";
import { pathologyMachineimgs } from "../../../public/frontend_assets/assets";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Viraldeases />
      <>
        <marquee scrollamount="20" className="pathology-machines">
          we provided every tests
        </marquee>
        <p className="pathology-machine-contents">
          Our lab is equipped with state-of-the-art diagnostic machines to
          ensure the highest accuracy and reliability in every test we conduct.
          From routine blood tests to advanced molecular diagnostics, we cover
          it all — with precision, speed, and care.
        </p>
        <Machineimg pathologyMachineimgs={pathologyMachineimgs} />
      </>
    </div>
  );
};

export default Home;
