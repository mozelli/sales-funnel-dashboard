//import { useTags } from "../contexts/TagsContext";
//import { Button } from "../components/ui/button";

//function ButtonComponent(): React.ReactNode {
//return <Button>Button Component</Button>;
//}

const Display = () => {
  //const { tags, addTag } = useTags();
  //console.log(tags);
  return (
    <div className="flex-1 h-full">
      <div className="">Display</div>
      <div className="">
        {/*tags.map((tag, index) => {
          return (
            <div className="" key={index}>
              {tag}
            </div>
          );
        })*/}
      </div>
      <div className="">
        {/*
        <Button onClick={() => addTag(ButtonComponent())}>Add element</Button>
        */}
      </div>
    </div>
  );
};

export default Display;
