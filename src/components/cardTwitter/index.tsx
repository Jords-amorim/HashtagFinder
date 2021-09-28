import React, { useEffect, useState } from "react";
import { FlexWrapper, Wrapper } from "./styles";

const CardTwitter = ({ listTwitter }) => {


  const teste = (twitter) => {
    let splited = twitter.created_at.split('T')
    let splitedDate = splited[0].split('-')

    const newDate = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`

    return newDate
  }

  return (
    <>
      {listTwitter && (
        <FlexWrapper>
          {listTwitter?.map((twitter: any) => (
            <>
              <Wrapper key={twitter.id}>
                <p>{teste(twitter)}</p>
                <p>{twitter.text}</p>
              </Wrapper>
            </>
          ))}
        </FlexWrapper>
      )}
    </>
  );
};

export default CardTwitter;
