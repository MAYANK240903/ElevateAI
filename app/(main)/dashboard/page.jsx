import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

const IndustryInsightsPage =async() => {

    const {isOnboarded}= getUserOnboardingStatus();
    if(!isOnboarded){
        redirect("/onboarding");
    }
  return (
    <div>
      IndustryInsightsPage
    </div>
  )
}

export default IndustryInsightsPage