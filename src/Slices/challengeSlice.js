// import { createSlice } from '@reduxjs/toolkit';
// import stockImage from "../Components/images/images_for_hackathonCards/Group 1000002771.png"
// import butterflyImage from "../Components/images/images_for_hackathonCards/Group 1000002766.png"
// import carImage from "../Components/images/images_for_hackathonCards/Group 1000002767.png"
// import personImage from "../Components/images/images_for_hackathonCards/Group 1000002772.png"
// import groupImage from "../Components/images/images_for_hackathonCards/Group 1000002773.png"
// import runningImage from "../Components/images/images_for_hackathonCards/Group 1000002466.png"
// const initialDummyChallenges = [
//   {
//     id: 1,
//     challengeName: 'Data Science Bootcamp - Graded Datathon',
//     startDate: '2024-10-01T10:00',
//     endDate: '2024-10-07T18:00',
//     description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
//     level: 'Easy',
//     image: stockImage, 
//   },
//   {
//     id: 2,
//     challengeName: 'Data Sprint 72 - Butterfly Identification',
//     startDate: '2024-10-02T11:00',
//     endDate: '2024-10-08T19:00',
//     description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
//     level: 'Medium',
//     image: butterflyImage, 
//   },
//   {
//     id: 3,
//     challengeName: 'Data Sprint 71 - Weather Recognition',
//     startDate: '2024-10-03T12:00',
//     endDate: '2024-10-09T20:00',
//     description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
//     level: 'Hard',
//     image: carImage, 
//   },
//   {
//     id: 4,
//     challengeName: 'Data Sprint 71 - Airline Passenger Satisfation',
//     startDate: '2024-10-04T13:00',
//     endDate: '2024-10-10T21:00',
//     description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
//     level: 'Easy',
//     image: personImage, 
//   },
//   {
//     id: 5,
//     challengeName: 'Engineering Gratuates Employee Outcomes',
//     startDate: '2024-10-05T14:00',
//     endDate: '2024-10-11T22:00',
//     description: '"The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features."',
//     level: 'Medium',
//     image: groupImage,
//   },
//   {
//     id: 6,
//     challengeName: 'Travel Insaurance Claim Prediction',
//     startDate: '2024-10-06T15:00',
//     endDate: '2024-10-12T23:00',
//     description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
//     level: 'Hard',
//     image: runningImage, 
//   },
// ];

// const challengeSlice = createSlice({
//   name: 'challenge',
//   initialState: {
//     challenges: initialDummyChallenges,
//     currentChallenge: null,
//   },
//   reducers: {
//     addChallenge: (state, action) => {
//       state.challenges.push(action.payload);
//     },
//     updateChallenge: (state, action) => {
//       const { id, data } = action.payload;
//       const index = state.challenges.findIndex(challenge => challenge.id === id);
//       if (index !== -1) {
//         state.challenges[index] = { ...state.challenges[index], ...data };
//       }
//     },
//     deleteChallenge: (state, action) => {
//       state.challenges = state.challenges.filter(challenge => challenge.id !== action.payload);
//     },
//     setCurrentChallenge: (state, action) => {
//       state.currentChallenge = action.payload;
//     },
//     resetChallenges: (state) => {
//       state.challenges = initialDummyChallenges;
//     },
//   },
// });

// export const {
//   addChallenge,
//   updateChallenge,
//   deleteChallenge,
//   setCurrentChallenge,
//   resetChallenges,
// } = challengeSlice.actions;

// export default challengeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import stockImage from "../Components/images/images_for_hackathonCards/Group 1000002771.png";
import butterflyImage from "../Components/images/images_for_hackathonCards/Group 1000002766.png";
import carImage from "../Components/images/images_for_hackathonCards/Group 1000002767.png";
import personImage from "../Components/images/images_for_hackathonCards/Group 1000002772.png";
import groupImage from "../Components/images/images_for_hackathonCards/Group 1000002773.png";
import runningImage from "../Components/images/images_for_hackathonCards/Group 1000002466.png";

// Utility function to determine challenge status
const getChallengeStatus = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return 'Upcoming';
  if (now > end) return 'Past';
  return 'Active';
};

const initialDummyChallenges = [
  {
    id: 1,
    challengeName: 'Data Science Bootcamp - Graded Datathon',
    startDate: '2024-10-01T10:00',
    endDate: '2024-10-07T18:00',
    description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
    level: 'Easy',
    image: stockImage,
    status: getChallengeStatus('2024-10-01T10:00', '2024-10-07T18:00'), // Set status
  },
  {
    id: 2,
    challengeName: 'Data Sprint 72 - Butterfly Identification',
    startDate: '2024-10-02T11:00',
    endDate: '2024-10-08T19:00',
    description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
    level: 'Medium',
    image: butterflyImage,
    status: getChallengeStatus('2024-10-02T11:00', '2024-10-08T19:00'), // Set status
  },
  {
    id: 3,
    challengeName: 'Data Sprint 71 - Weather Recognition',
    startDate: '2024-10-03T12:00',
    endDate: '2024-10-09T20:00',
    description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
    level: 'Hard',
    image: carImage,
    status: getChallengeStatus('2024-10-03T12:00', '2024-10-09T20:00'), 
  },
  {
    id: 4,
    challengeName: 'Data Sprint 71 - Airline Passenger Satisfation',
    startDate: '2024-10-04T13:00',
    endDate: '2024-10-10T21:00',
    description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
    level: 'Easy',
    image: personImage,
    status: getChallengeStatus('2024-10-04T13:00', '2024-10-10T21:00'), // Set status
  },
  {
    id: 5,
    challengeName: 'Engineering Gratuates Employee Outcomes',
    startDate: '2024-10-05T14:00',
    endDate: '2024-10-11T22:00',
    description: '"The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features."',
    level: 'Medium',
    image: groupImage,
    status: getChallengeStatus('2024-10-05T14:00', '2024-10-11T22:00'), // Set status
  },
  {
    id: 6,
    challengeName: 'Travel Insaurance Claim Prediction',
    startDate: '2024-10-06T15:00',
    endDate: '2024-10-12T23:00',
    description: "The challenge involves identifying butterflies from various images provided in the dataset. dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffslkwmfefkenkjfnejknejkrnekrjf You are required to classify each butterfly into its correct class. The dataset contains hundreds of images of butterflieswith different characteristics. Participants must use machine learning techniques to develop a model that can accuratelydentify the butterfly species based on the given features. The challenge will be judged on accuracy and the efficiency ofur model.The challenge involves identifying butterflies from various images provided in the dataset.dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffwith different characteristics. Participants must use machine learning techniques to develop a model that can accurateldentify the butterfly species based on the given features.",
    level: 'Hard',
    image: runningImage,
    status: getChallengeStatus('2024-10-06T15:00', '2024-10-12T23:00'), // Set status
  },
];

const challengeSlice = createSlice({
  name: 'challenge',
  initialState: {
    challenges: initialDummyChallenges,
    currentChallenge: null,
  },
  reducers: {
    addChallenge: (state, action) => {
      state.challenges.push(action.payload);
    },
    updateChallenge: (state, action) => {
      const { id, data } = action.payload;
      const index = state.challenges.findIndex(challenge => challenge.id === id);
      if (index !== -1) {
        state.challenges[index] = { ...state.challenges[index], ...data };
      }
    },
    deleteChallenge: (state, action) => {
      state.challenges = state.challenges.filter(challenge => challenge.id !== action.payload);
    },
    setCurrentChallenge: (state, action) => {
      state.currentChallenge = action.payload;
    },
    resetChallenges: (state) => {
      state.challenges = initialDummyChallenges.map(challenge => ({
        ...challenge,
        status: getChallengeStatus(challenge.startDate, challenge.endDate),
      }));
    },
  },
});

export const {
  addChallenge,
  updateChallenge,
  deleteChallenge,
  setCurrentChallenge,
  resetChallenges,
} = challengeSlice.actions;

export default challengeSlice.reducer;

