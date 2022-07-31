// survey config contains all questions and points for each question

// interface for survey config
export interface surveyConfigData {
  question: string;
  points: number;
}

// questions and points for question one used in survey step one
export const QuestionOne: surveyConfigData[] = [
  {
    question: 'Often',
    points: 5,
  },
  {
    question: 'Rarely',
    points: 3,
  },
  {
    question: 'Never',
    points: 0,
  },
];

// questions and points for question two used in survey step two
export const QuestionTwo: surveyConfigData[] = [
  {
    question: 'Option 1',
    points: 2,
  },
  {
    question: 'Option 2',
    points: 2,
  },
  {
    question: 'Option 3',
    points: 2,
  },
];

// questions and points for question three used in survey step three
export const QuestionThree: surveyConfigData[] = [
  {
    question: 'Germany',
    points: 3,
  },
  {
    question: 'Sweden',
    points: 5,
  },
  {
    question: 'Italy',
    points: 5,
  },
  {
    question: 'Spain',
    points: 3,
  },
];
