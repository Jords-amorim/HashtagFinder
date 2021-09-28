import React, { useEffect, useState } from "react";
import { Wrapper, FlexWrapper, Input, Wrap } from "./styles";
import axios from "axios";
import CardTwitter from "../cardTwitter";

const initialValue = {
  search: "",
};

const Search = () => {
  const [listTwitter, setListTwitter] = useState(null);
  const [select, setSelect] = useState(null);
  const [values, setValues] = useState(initialValue);
  const [finder, setFinder] = useState(false);

  const handleSelect = (e: any) => {
    if (e.target.value !== "") {
      e.preventDefault();

      const { value } = e.target;
      setSelect(value);
      fazerBusca(value);
    }
  };

  const fazerBusca = (termoDigitado: string) => {
    var config: any = {
      method: "get",
      url: `http://localhost:3000/api?query=${termoDigitado}`,
    };

    axios(config)
      .then(function (response) {
        console.log("funcionou", response.data);
        setListTwitter(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
        setFinder(true)
      });
  };

  return (
    <>
      <FlexWrapper>
        <Wrapper>
          <div className="hero-text">
            <h1>
              Encontre hashtags
              <br /> de maneira fácil.
            </h1>
            <p>
              Digite o que deseja no campo de buscas e <br />
              confira os resultados do Twitter abaixo
            </p>
          </div>
            <Input
              type="text"
              className="input"
              placeholder="Buscar..."
              onBlur={(e) => {
                handleSelect(e);
              }}
            />
            {(select && listTwitter)&& <h5>{`Exibindo os 10 resultados mais recentes para # ${select}`}</h5>}
            {(finder && !listTwitter)&& <h5>{`Não encontramos resultados para # ${select}`}</h5>}
            
        </Wrapper>
      </FlexWrapper>
     
      {listTwitter && (
        <>
            <Wrap>
            
            <CardTwitter listTwitter={listTwitter} />

            </Wrap>
        </>
      )}
    </>
  );
};

export default Search;
