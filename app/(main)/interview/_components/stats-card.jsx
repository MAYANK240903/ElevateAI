import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Trophy } from "lucide-react";


const StatsCard = ({assessments}) => {

    const averageScore = ()=>{
        if(!assessments?.length)return 0;
        const total = assessments.reduce((sum,assessments)=>sum+assessments.quizScore,0);

        return (total / assessments.length).toFixed(1);
    };

    const getAssessments = ()=>{
        if(!assessments?.length) return null;
        return assessments[0];
    };

    const getTotalQuestions = ()=>{
        if(!assessments.length) return 0;
        return assessments.reduce((sum,assessments)=>sum+assessments.questions.length,0)
    }
  return (
    <div className="grid gap-4 md:grid-cols-3">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Trophy className={`h-4 w-4 text-muted-foreground`}/>
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>{averageScore()}%</div>
                <Progress value={averageScore()} className="mt-2"/>
                <p className='text-xs text-muted-foreground'>Across all Assessments</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Questions Practiced</CardTitle>
                <Brain className={`h-4 w-4 text-muted-foreground`}/>
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>{getTotalQuestions()}</div>
                <p className='text-xs text-muted-foreground'>Total Questions</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
                {/* <BriefcaseIcon className={`h-4 w-4 text-muted-foreground`}/> */}
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>
                    {getAssessments().?quizScore}
                </div>
                <div className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                    insights.demandLevel
                )}`}/>
            </CardContent>
        </Card>
       
    </div>
  )
}

export default StatsCard