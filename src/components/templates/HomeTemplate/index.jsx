import React from "react";
import TRNavigation from "../../organisms/TRNavigation";
import TRPortada from "../../organisms/TRPortada";
import TRCard from "../../organisms/TRCard";
import TRDescription from "../../organisms/TRDescription";
import TRWeHave from "../../organisms/TRWeHave";
import TRForm from "../../organisms/TRForm";
import TRComentarios from "../../organisms/TRComentarios";
import TRFoooter from "../../organisms/TRFooter";
import TRLocation from "../../organisms/TRLocation";
import TRMultimedia from "../../organisms/TRMultimedia";
import TRGalery from "../../organisms/TRGalery";
import { homeScroll } from "../../../shared/scrolls";
import "./styles.scss";

const HomeTemplate = () => {
  const { location, weHave, gallery, tour360, joinUs } = homeScroll;
  return (
    <div>
      <TRNavigation />
      <div className="home_content">
        <div className="home_container">
          <TRPortada />
          <TRCard />
          <TRDescription />
          <div id={location.id} >
            <TRLocation />
          </div>
          <div id={weHave.id} >
            <TRWeHave />
          </div>
        </div>
        <div id={gallery.id} >
          <TRGalery />
        </div>
        <div className="home_container">
          <div id={tour360.id}>
            <TRMultimedia />
          </div>
          <TRForm />
        </div>
        <div>
          <div>
            <TRComentarios id={joinUs.id} />
          </div>
          <TRFoooter />
        </div>
      </div>

    </div>
  );
};

export default HomeTemplate;
