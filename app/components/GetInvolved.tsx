import React from "react";
import {Button, ButtonWrapper} from "@canopy-iiif/app/ui/server";

const SUBMISSION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNAX1IaCaSYwqwEKX6HnRzxPlrhMx78mYMXtalO3RiK9p3cg/viewform";

export default function GetInvolved({text = "Get involved"}: {text?: string}) {
  return (
    <ButtonWrapper variant="interstitial" text={text}>
      <Button href={SUBMISSION_FORM_URL} variant="primary" target="_blank">
        Submit your art
      </Button>
      <Button href="mailto:abolitionimages@gmail.com" variant="secondary">
        Email us
      </Button>
      <Button
        href="https://www.instagram.com/abolitionimages"
        variant="secondary"
      >
        Follow us on Instagram
      </Button>
    </ButtonWrapper>
  );
}
