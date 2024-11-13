import Image from 'next/image';
import TextChange from '../components/TextChange';  
 
import "../style/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-heading">
          <TextChange />
        </h1>
        <p className="home-text">
          I am a passionate developer currently mastering web technologies and building interactive,
          user-friendly websites and apps.
          <br />
          Want to know more about me? <br /> Check out my portfolio below!
        </p>
        <a href="#Footer">
          <button className="home-button">Contact me</button>
        </a>
      </div>
      <div className="home-right">
      <Image 
  src="/images/image1.png" 
  alt="Description" 
  width={450} 
  height={500}
  layout='intrinsic' 
 
 
/>
      </div>
    </div>
  );
}
