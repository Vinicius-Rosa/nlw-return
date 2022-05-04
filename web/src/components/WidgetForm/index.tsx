import { useState } from "react";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackContentSuccess } from "./Steps/FeedbackContentSuccess";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackType } from "./types";

export const WidgetForm = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  const contentRender = () => {
    if (feedbackSent)
      return <FeedbackContentSuccess restartFeedback={handleRestartFeedback} />;

    return !feedbackType ? (
      <FeedbackTypeStep handleSelectFeedbackType={setFeedbackType} />
    ) : (
      <FeedbackContentStep
        feedbackType={feedbackType}
        onGoBack={handleRestartFeedback}
        onFeedbackSent={() => setFeedbackSent(true)}
      />
    );
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {contentRender()}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          href="https://github.com/Vinicius-Rosa"
          target="_blank"
          className="underline underline-offset-2 hover:text-rose-300 transition-all"
        >
          Vinícius Rosa
        </a>
      </footer>
    </div>
  );
};
