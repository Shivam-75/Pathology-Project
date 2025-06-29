import Header from "../../components/header/Header";
import Viraldeases from "../../components/viralDease/Viraldeases";
import Machineimg from "../../components/machine_img/Machineimg";
import { pathologyMachineimgs } from "../../assets/frontend_assets/assets";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta
          illo recusandae et quis nulla accusamus unde non fugit omnis, cumque,
          aperiam ipsam soluta excepturi. Ex reiciendis maiores illum unde?
        </p>
        <Machineimg pathologyMachineimgs={pathologyMachineimgs} />
      </>
    </div>
  );
};

export default Home;
