/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProjectCardProps } from "./ProjectCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCardCollectionOverridesProps = {
    ProjectCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ProjectCard?: ProjectCardProps;
} & EscapeHatchProps;
export declare type ProjectCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProjectCardProps;
} & {
    overrides?: ProjectCardCollectionOverridesProps | undefined | null;
}>;
export default function ProjectCardCollection(props: ProjectCardCollectionProps): React.ReactElement;
