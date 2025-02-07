"use client";

import { saveResume } from '@/actions/resume';
import { resumeSchema } from '@/app/lib/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import useFetch from '@/hooks/use-fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import { Download, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import EntryForm from './entry-form';

const ResumeBuilder = ({initialContent}) => {

    const [activeTab, setActiveTab] = useState("edit");

    const {control,register, handleSubmit, formState:{errors}, watch}=
        useForm({
        resolver:zodResolver(resumeSchema),
        defaultValues: {
            contactInfo:{},
            summary:"",
            skills:"",
            experience:[],
            education:[],
            projects:[],
        },
    });

    const onSubmit = async(data)=>{}
    const{
        loading : isSaving,
        fn: saveResumeFn,
        data: saveResult,
        error:saveError,
      }=useFetch(saveResume);


    const formValues =watch();

    useEffect(()=>{
        if(initialContent) setActiveTab("preview");
    },[initialContent])
  
  return (
    <div className='space-y-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
            <h1 className='font-bold gradient-title text-5xl md:text-6xl'>Resume Builder</h1>
        <div className='space-x-2'>
            <Button variant="destructive">
                <Save className='h-4 w-4'/>
                Save
            </Button>
            <Button>
                <Download className='h-4 w-4'/>
                Download PDF
            </Button>
        </div>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
                <TabsTrigger value="edit">Form</TabsTrigger>
                <TabsTrigger value="preview">Markdown</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Contact Information</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50'>

                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Email</label>
                            <Input 
                            {...register('contactInfo.email')}
                            type="email"
                            placeholder="your@email.com"
                            error={errors.contactInfo?.email}
                            />

                            {errors.contactInfo?.email &&(
                                <p className='text-sm text-red-500'>
                                    {errors.contactInfo.email.message}
                                </p>
                            )}
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Mobile Number</label>
                            <Input 
                            {...register('contactInfo.mobile')}
                            type="tel"
                            placeholder="+91 1234567890"
                            error={errors.contactInfo?.email}
                            />

                            {errors.contactInfo?.mobile &&(
                                <p className='text-sm text-red-500'>
                                    {errors.contactInfo.mobile.message}
                                </p>
                            )}
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Linkedin</label>
                            <Input 
                            {...register('contactInfo.linkedin')}
                            type="url"
                            placeholder="https://www.linkedin.com/in/mayank-aggarwal-9310b8227/"
                            error={errors.contactInfo?.linkedin}
                            />

                            {errors.contactInfo?.linkedin &&(
                                <p className='text-sm text-red-500'>
                                    {errors.contactInfo.linkedin.message}
                                </p>
                            )}
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Twitter</label>
                            <Input 
                            {...register('contactInfo.twitter')}
                            type="url"
                            placeholder="https://x.com/chokechoke4"
                            error={errors.contactInfo?.twitter}
                            />

                            {errors.contactInfo?.twitter &&(
                                <p className='text-sm text-red-500'>
                                    {errors.contactInfo.twitter.message}
                                </p>
                            )}
                        </div>
                        </div>
                    </div>

                    
                    <div className='space-y-2'>
                        <label className='text-sm font-medium'>Professsional Summary</label>
                        <Controller 
                            name = "summary"
                            control= {control}
                            render = {({field})=>(

                                <Textarea 
                                {...field}
                                type="url"
                                className="h-32"
                                placeholder="Write a professional summary"
                                error={errors.summary}
                            />
                            )}
                        />

                            {errors.summary &&(
                                <p className='text-sm text-red-500'>
                                    {errors.summary.message}
                                </p>
                            )}
                        </div>

                        <div className='space-y-2'>
                        <label className='text-sm font-medium'>Skills</label>
                        <Controller 
                            name = "skills"
                            control= {control}
                            render = {({field})=>(

                                <Textarea 
                                {...field}
                                type="url"
                                className="h-32"
                                placeholder="List your skills..."
                                error={errors.skills}
                            />
                            )}
                        />

                            {errors.skills &&(
                                <p className='text-sm text-red-500'>
                                    {errors.skills.message}
                                </p>
                            )}
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium'>Work Experience</label>
                        <Controller 
                            name = "experience"
                            control= {control}
                            render = {({field})=>(
                                <EntryForm 
                                    type={"Experience"}
                                    entries={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                            {errors.experience &&(
                                <p className='text-sm text-red-500'>
                                    {errors.experience.message}
                                </p>
                            )}
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium'>Education</label>
                        <Controller 
                            name = "education"
                            control= {control}
                            render = {({field})=>(
                                <EntryForm 
                                    type={"Education"}
                                    entries={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                            {errors.education &&(
                                <p className='text-sm text-red-500'>
                                    {errors.education.message}
                                </p>
                            )}
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium'>Projects</label>
                        <Controller 
                            name = "projects"
                            control= {control}
                            render = {({field})=>(
                                <EntryForm 
                                    type={"Projects"}
                                    entries={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                            {errors.projects &&(
                                <p className='text-sm text-red-500'>
                                    {errors.projects.message}
                                </p>
                            )}
                    </div>
                    
                </form>
            </TabsContent>
            <TabsContent value="preview">Change your password here.</TabsContent>
        </Tabs>



    </div>
  )
}

export default ResumeBuilder;