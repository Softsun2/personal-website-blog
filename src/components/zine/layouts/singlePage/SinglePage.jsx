import s from "./SinglePage.module.css";
import { createElement, useEffect, useState } from "react";
import { Page } from "../../Zine";
import { useParams } from "react-router-dom";

export default function SinglePage(props) {
  const { getPage, navigatePage, length } = props;
  const page = parseInt(useParams().page);

  const flipPage = (forward) => {
    if (forward && page < length - 1) {
      navigatePage(page + 1);
    } else if (!forward && page > 0) {
      navigatePage(page - 1);
    }
  };

  // page flip with arrow keys
  useEffect(() => {
    const keyUp = (e) => {
      if (e.code === "ArrowRight") {
        flipPage(true);
      } else if (e.code === "ArrowLeft") {
        flipPage(false);
      }
    };
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  });

  return <div id={s.singlePageZineLayout}>{getPage(page)}</div>;
}
