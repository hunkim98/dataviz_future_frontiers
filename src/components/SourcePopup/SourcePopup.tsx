import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

import * as S from "./styles";
import useHandleClickOutside from "hooks/useHandleClickOutside";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentFrontierName: string;
  sourceUrls: Array<{ topic: string; urls: Array<string> }>;
}

const SourcePopup: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  sourceUrls,
  currentFrontierName,
}) => {
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
        style={{ paddingTop: 0 }}
        onScroll={(e) => {
          e.stopPropagation();
        }}
        onWheel={(e) => {
          e.stopPropagation();
        }}
      >
        <S.DescriptionContainer style={{ backgroundColor: "white" }}>
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
          <S.Description>
            <h2>Sources on {currentFrontierName}</h2>
            {sourceUrls.map((sourceUrl) => {
              if (sourceUrl.urls.filter((x) => x).length === 0) return null;
              return (
                <div key={sourceUrl.topic}>
                  <strong>{sourceUrl.topic}</strong>
                  <ul>
                    {sourceUrl.urls
                      .filter((x) => x)
                      .map((url) => {
                        if (
                          url.startsWith("http://") ||
                          url.startsWith("https://")
                        ) {
                          return (
                            <li key={url}>
                              <a href={url}>{url}</a>
                            </li>
                          );
                        } else {
                          return <li key={url}>{url}</li>;
                        }
                      })}
                  </ul>
                </div>
              );
            })}
          </S.Description>
        </S.DescriptionContainer>
      </div>
    </div>
  );
};

export default SourcePopup;
