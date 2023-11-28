import InfoCard from "./InfoCard";

const INFO_CARDS = [
  <InfoCard icon={"mdi:graph"} text={"Arrays"} />,
  <InfoCard icon={"mdi:graph"} text={"Searching"} />,
  <InfoCard icon={"mdi:graph"} text={"Sorting"} />,
  <InfoCard icon={"mdi:graph"} text={"String"} />,
  <InfoCard icon={"mdi:graph"} text={"2D Lists"} />,
  <InfoCard icon={"mdi:graph"} text={"OOPs"} />,
  <InfoCard icon={"mdi:graph"} text={"Recursion"} />,
  <InfoCard icon={"mdi:graph"} text={"Linked List"} />,
  <InfoCard icon={"mdi:graph"} text={"Stack"} />,
  <InfoCard icon={"mdi:graph"} text={"Queue"} />,
  <InfoCard icon={"mdi:graph"} text={"Tree"} />,
  <InfoCard icon={"mdi:graph"} text={"Hashmap"} />,
  <InfoCard icon={"mdi:graph"} text={"Dynamic Programming"} />,
  <InfoCard icon={"mdi:graph"} text={"Graphs"} />,
  <InfoCard icon={"mdi:graph"} text={"Data Analysis"} />,
  <InfoCard icon={"mdi:graph"} text={"Machine Learning"} />,
  <InfoCard icon={"mdi:graph"} text={"Web Development"} />,
];

const InfiniteSlider = () => {
  return (
    // <div className="relative m-auto w-full overflow-hidden pb-6">
    //   <div className="animate-infinite-slider flex w-[calc(250px*10)] gap-4">
    //     {INFO_CARDS.map((info_card, index) => (
    //       <div
    //         className="slide flex w-[125px] items-center justify-center"
    //         key={index}
    //       >
    //         {info_card}
    //       </div>
    //     ))}
    //     {INFO_CARDS.map((info_card, index) => (
    //       <div
    //         className="slide flex w-[125px] items-center justify-center"
    //         key={index}
    //       >
    //         {info_card}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="grid grid-cols-2 gap-2">
      <InfoCard icon={"material-symbols:data-array"} text={"Arrays"} />
      <InfoCard icon={"material-symbols:search"} text={"Searching"} />
      <InfoCard icon={"gg:sort-za"} text={"Sorting"} />
      <InfoCard icon={"material-symbols:abc"} text={"String"} />
      <InfoCard icon={"ant-design:table-outlined"} text={"2D Lists"} />
      <InfoCard icon={"ic:round-data-object"} text={"OOPs"} />
      <InfoCard icon={"ri:loop-left-line"} text={"Recursion"} />
      <InfoCard icon={"ph:flow-arrow-bold"} text={"Linked List"} />
      <InfoCard icon={"tabler:stack-2"} text={"Stack"} />
      <InfoCard icon={"fluent:people-queue-24-filled"} text={"Queue"} />
      <InfoCard icon={"mdi:graph"} text={"Tree"} />
      <InfoCard icon={"ph:hash-bold"} text={"Hashmap"} />
      <InfoCard
        icon={"icon-park:positive-dynamics"}
        text={"Dynamic Programming"}
      />
      <InfoCard icon={"ph:graph-bold"} text={"Graphs"} />
      <InfoCard icon={"icon-park-solid:analysis"} text={"Data Analysis"} />
      <InfoCard icon={"carbon:machine-learning"} text={"Machine Learning"} />
      <InfoCard icon={"mdi:web"} text={"Web Development"} />
    </div>
  );
};

export default InfiniteSlider;
