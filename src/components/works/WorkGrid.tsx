import { WorkItem } from "@/src/data/works";
import WorkCard from "./WorkCard";

type Props = {
  items: WorkItem[];
};

export default function WorkGrid({ items }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((w) => (
        <WorkCard key={w.slug} work={w} />
      ))}
    </div>
  );
}
