import { Heading } from "@radix-ui/themes";
import { InternationalString } from "@iiif/presentation-3";
import { Label } from "@samvera/clover-iiif/primitives";
import { HeadingProps as RadixHeadingProps } from "@radix-ui/themes";
import React from "react";
import { styled } from "@src/styles/stitches";

export interface WorkTitleProps extends RadixHeadingProps {
  label: InternationalString;
}

const WorkTitle: React.FC<WorkTitleProps> = (props) => {
  const { label } = props;
  const headingProps = { ...props, label: undefined };

  return (
    <StyledHeading>
      <Heading {...headingProps}>
        <Label label={label} as="span" />
      </Heading>
    </StyledHeading>
  );
};

const StyledHeading = styled("div", {
 paddingTop: "300px"
});

export default WorkTitle;
