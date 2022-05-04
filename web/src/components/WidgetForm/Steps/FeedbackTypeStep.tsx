import { FEEDBACK_TYPES } from "../../../constants/feedback";
import { CloseBtn } from "../../CloseBtn";
import { FeedbackType, FeedbackTypeStepProps } from "../types";

export const FeedbackTypeStep = ({
  handleSelectFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseBtn />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACK_TYPES).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={() => handleSelectFeedbackType(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
