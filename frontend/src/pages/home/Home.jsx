import Header from "../../components/header/Header.jsx";
import Viraldeases from "../../components/viraldease/Viraldeases.jsx";
import Machineimg from "../../components/machine_img/Machineimg.jsx";
import { pathologyMachineimgs } from "../../../public/frontend_assets/assets.jsx";
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
          ensure the highest levels of accuracy and reliability in every test we
          perform. From routine blood work to advanced molecular diagnostics, we
          cover it all — with precision, speed, and compassionate care.
        </p>
        <Machineimg pathologyMachineimgs={pathologyMachineimgs} />
      </>
    </div>
  );
};

export default Home;
