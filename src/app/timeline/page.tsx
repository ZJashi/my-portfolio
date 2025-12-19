import TimelineItem from "../components/TimelineItem";
import TimelineLine from "../components/TimelineLine";
import { timelineData } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <div className="relative max-w-3xl mx-auto py-20 px-5">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        My Journey
      </h1>

      <TimelineLine />

      <div>
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
