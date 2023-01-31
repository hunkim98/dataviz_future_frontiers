import React, { useRef } from "react";
import "./AboutPopup.css";
import { IoCloseOutline } from "react-icons/io5";
import planet_image from "assets/about/planet.png";
import sun_image from "assets/about/sun.png";
import spaceship_image from "assets/about/spaceship.png";
import * as S from "./styles";
import useHandleClickOutside from "hooks/useHandleClickOutside";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutPopup: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const aboutPopupRef = useRef<any>(null);
  useHandleClickOutside({
    wrapperRef: aboutPopupRef,
    setOpenBooleanState: setIsOpen,
  });
  return (
    <div
      className="popup_background_container"
      style={{
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "visibility 0.2s, opacity 0.2s",
        fontFamily: "Questrial",
      }}
    >
      <div
        className="popup_container"
        ref={aboutPopupRef}
        onScroll={(e) => {
          e.stopPropagation();
        }}
        onWheel={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="popup_close_button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IoCloseOutline
            style={{ cursor: "pointer" }}
            size={28}
            onClick={() => {}}
          />
        </button>
        <S.MainTitle>
          <span style={{ opacity: 0.5, fontSize: 23 }}>
            World Dataviz Prize 2023
          </span>{" "}
          - The Future of Frontiers
        </S.MainTitle>
        <S.DescriptionContainer>
          <S.Description>
            <p>
              This infographic is based on the data provided by{" "}
              <strong>World Government Summit</strong>. The data provided by the
              World Government Summit is a list of some noteworthy key factors &
              drivers for our future.
            </p>
            <p>
              7 frontiers were identified by the World Government Summit, and
              they are <strong>Governance</strong>,{" "}
              <strong>Public Services</strong>, <strong>Demographics</strong>,{" "}
              <strong>Social Technology</strong>, <strong>Economics</strong>,{" "}
              <strong>Artificial Intelligence</strong>, and{" "}
              <strong>Climate</strong>.
            </p>
            <p>
              Each frontier is represented as a galaxy composed of several
              planets. The sun represents the frontier area, and the planets
              represent the topics worth watching in the future.
            </p>
            <p>
              The sun and the planets vary in sizes according to their buzz -
              the amount of google search results each topic has. This was
              intended to allow viewers to easily identify the most trending
              topics in each frontier.
            </p>
            <p>
              Each planets have different colors based on which frontier they
              belong to. The saturation degree may differ depending on the
              positivity or negativity of the description on the topic. If there
              are no descriptions, the planet will be gray.
            </p>
          </S.Description>
        </S.DescriptionContainer>
        <S.VisualAspectContainer>
          <S.Contact
            style={{
              alignSelf: "center",
              opacity: 0.5,
              fontSize: 10,
              marginBottom: 20,
            }}
          >
            created by{" "}
            <a href="https://github.com/hunkim98" style={{ color: "white" }}>
              @hunkim98
            </a>
          </S.Contact>
        </S.VisualAspectContainer>
      </div>
    </div>
  );
};

export default AboutPopup;
