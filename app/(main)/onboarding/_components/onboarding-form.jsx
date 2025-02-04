"use client"

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { onboardingSchema } from "@/app/lib/schema"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const OnboardingForm = ({industries}) => {
    const [selectIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();
    const {register, handleSubmit, formState:{errors}, setValue, watch} = useForm({
      resolver: zodResolver(onboardingSchema),
    })
  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>Select your industry to get personalised career insights and recommendations.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default OnboardingForm