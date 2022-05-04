import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import { ScreenshotBtnProps } from "./types";

export const ScreenshotBtn = ({
  discardScreenshot,
  onScreenshotTook,
  screenshot,
}: ScreenshotBtnProps) => {
  const [isTakingImg, setIsTakingImg] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingImg(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    setTimeout(() => {
      setIsTakingImg(false);
      onScreenshotTook(base64Image);
    }, 200);
  };

  if (!!screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-all"
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={discardScreenshot}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingImg ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
    </button>
  );
};
