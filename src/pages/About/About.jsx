import Title from "../../components/Titel/Title";
import aboutNkar from "../../assets/111.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="relative max-w-[600px] mx-auto mt-[140px]">
        <div className="flex p-5 shadow-[0_0_0_5px_rgb(71,111,111)] mx-5 mb-5">
          <div className="flex flex-col max-w-[60%]">
            <img src={aboutNkar} alt="About" />
            <Title />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;