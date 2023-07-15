/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Heading, Text } from "@aws-amplify/ui-react";
export default function ProjectCard(props) {
  const { project, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundImage={`${"url("}${project?.image}${")"}`}
      {...getOverrideProps(overrides, "ProjectCard")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="1"
        children={project?.title}
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={project?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Tags")}
      >
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          variation="default"
          children="Classic"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
      </Flex>
    </Flex>
  );
}
