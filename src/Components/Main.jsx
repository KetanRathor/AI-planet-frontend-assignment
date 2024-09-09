
// import React from 'react'
// import LandingPageWithCreateChallenge from './LandingPageWithCreateChallenge'
// import CommunityDetailsCounts from './CommunityDetailsCounts'
// import ExploreChallenges from './ExploreChallenges'
// import HackathonList from './HackathonList'
// import Header from './Header'


// function Main() {
//   return (
//     <div>
//       <Header/>
//       <LandingPageWithCreateChallenge/>
//       <CommunityDetailsCounts/>
//       <ExploreChallenges/>
//       <HackathonList/>
//     </div>
//   )
// }

// export default Main


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageWithCreateChallenge from './LandingPageWithCreateChallenge';
import CommunityDetailsCounts from './CommunityDetailsCounts';
import ExploreChallenges from './ExploreChallenges';
import HackathonList from './HackathonList';
import Header from './Header';
import CreateChallengeForm from './CreateChallengeForm';
import ChallengeDetails from './HackathonDetails';

function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPageWithCreateChallenge />
              <CommunityDetailsCounts />
              <ExploreChallenges />
              <HackathonList />
            </>
          }
        />
        <Route path="/create-challenge" element={<CreateChallengeForm />} />
        <Route path='/challenge-details' element={<ChallengeDetails />} />

      </Routes>
    </Router>
  );
}

export default Main;
