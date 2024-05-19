import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { lessons, units as unitsSchema } from "@/db/schema";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    if (!courseProgress) {
        redirect("/courses");
    }

    return ( 
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                activeCourse={{ title: "Spanish", imageSrc: "/es.svg"}}
                hearts={5}
                points={100}
                hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish" />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                        id={unit.id}                        
                        order={unit.order}                        
                        description={unit.description}                        
                        title={unit.title}                        
                        lessons={unit.lessons}                        
                        activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                            unit: typeof unitsSchema.$inferSelect;
                        } | undefined}                        
                        activeLessonPercentage={lessonPercentage}                        
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
     );
}

export default LearnPage;