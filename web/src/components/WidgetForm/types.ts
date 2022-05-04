import { FEEDBACK_TYPES } from "../../constants/feedback";

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

export interface FeedbackTypeStepProps{
    handleSelectFeedbackType: (type: FeedbackType) => void;
}

export interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
    onGoBack: () => void;
    onFeedbackSent: () => void;
}

export interface ScreenshotBtnProps{
    onScreenshotTook: (screenshot: string) => void;
    discardScreenshot: () => void;
    screenshot: string | null;
}

export interface FeedbackContentSuccessProps{
    restartFeedback: () => void;
}