/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Project } from "../models";
import { BadgeProps, FlexProps, HeadingProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCardOverridesProps = {
    ProjectCard?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type ProjectCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    project?: Project;
} & {
    overrides?: ProjectCardOverridesProps | undefined | null;
}>;
export default function ProjectCard(props: ProjectCardProps): React.ReactElement;
