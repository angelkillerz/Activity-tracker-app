import React, { useState } from 'react'
import ActivityTracker from '../components/ActivityTracker'
import GoalTracker from '../components/GoalTracker'
import ActivityForm from '../components/ActivityForm'
import GoalForm from '../components/GoalForm'
import DashboardUserStats from '../components/DashboardUserStats'
import DashboardUserProfile from '../components/DashboardUserProfile'
import DashboardTrackingHistoryGraph from '../components/DashboardTrackingHistoryGraph'

function Dashboard() {
  const [isActivityFormClose, setIsActivityFormClose] = useState(true)
  const [isGoalFormClose, setIsGoalFormClose] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <>
      {!isActivityFormClose ? <ActivityForm setCloseModal={setIsActivityFormClose} selectedActivity={selectedActivity} setSelectedActivity={setSelectedActivity} /> : null}
      {!isGoalFormClose ? <GoalForm setCloseModal={setIsGoalFormClose} /> : null}

      <div className="flex flex-col items-center h-full">
        {/* Status Section */}
        <div className="w-full">
          <div className="container mx-auto">
            <DashboardUserStats />
          </div>
        </div>

        {/* Graph Section */}
        <div className="w-full py-16">
          <div className="container mx-auto">
            <div>
              <h1 className="text-3xl font-bold">Tracking History</h1>
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-x-8 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:gap-x-0 max-xl:gap-y-10">
              <DashboardTrackingHistoryGraph />
              <DashboardUserProfile />
            </div>
          </div>
        </div>


        {/* Activity and Goal Section */}
        <div className="w-full flex-grow pb-14">
          <div className="container mx-auto ">
            <h1 className="text-3xl font-bold py-2 tracking-wide border-l-[3px] border-[#000]">Your Tracking</h1>
          </div>
          <div className="container mx-auto grid grid-cols-12 gap-x-8 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:gap-x-0 max-xl:gap-y-10">
            <ActivityTracker isSubmit={isActivityFormClose} setCloseModal={setIsActivityFormClose} setSelectedActivity={setSelectedActivity} />
            <GoalTracker isSubmit={isGoalFormClose} setCloseModal={setIsGoalFormClose} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard