import homepageStyles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";

const HomepageOne = () => {
  const router = useRouter();

  return (
    <div className={homepageStyles.homeSectionOne}>
      <img src={MainImage} alt="test" />
      <h2>Snaptask is your new todo list manager for maximum productivity.</h2>
      <section>
        <input type="text" placeholder="Type your email here" />
        <button onClick={() => router.push("/signup")}>Signup</button>
      </section>
    </div>
  );
};

export default HomepageOne;
