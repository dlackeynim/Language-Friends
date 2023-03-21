import User from "../User";
import './HomeIntro.css'

function HomeIntro() {
  return (
    <div>
      <div className="px-4 py-6 my-5 text-center">
        <h1 className="display-6 fw-bold">Language Friends</h1>
        <div className="col-lg-6 mx-auto">
          <p class="lead mb-4 fs-6">
            Do you want to learn a language, but don't know any native speakers of that language? Here at Language Friends, you can find that study buddy to learn and excel at your new language
          </p>
          <img className="img-fluid introImage" src="https://res.cloudinary.com/drak25qkc/image/upload/v1679344175/homePictureIntro_bubl54.jpg"></img>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gap-3 my-4">
            <button type="button" className="btn btn-primary btn-md px-4 gap-3">
               Sign up Now
            </button>
            <button type="button" className="btn btn-outline-secondary btn-md px-4">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <User />
    </div>
  );
}

export default HomeIntro;
