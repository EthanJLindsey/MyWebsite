/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Project } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import ProjectCard from "./ProjectCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ProjectCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Project,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ProjectCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ProjectCard
          project={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProjectCard>
      )}
    </Collection>
  );
}
