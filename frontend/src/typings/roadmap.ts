export type RoadmapItem = {
    name: string;
    description: string;
    status: "complete" | "current" | "upcoming";
}

export type RoadmapSection = {
    heading: string;
    tasks: Array<RoadmapItem>;
}