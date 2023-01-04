import React, { useState, useEffect } from "react";
import ChatGPTResponse from "../../components/ChatGPTResponse";
import { fetchBusinessNames } from "../../fetchers";
import { Title } from "../../tw-types";
import { TextField, Button } from "@mui/material";

const BusinessNameSuggester = () => {

  const [prompt, setPrompt] = useState("");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState("");  
  const [isLoading, setIsLoading] = useState(false)
  
  async function getBusinessNames(prompt: string) {

    const response = await fetchBusinessNames(prompt);
    setData(response);
  }
  const handleSubmit = async (e: any) => {
    setIsLoading(true)
    e.preventDefault();

    console.log(inputText)
    getBusinessNames(inputText);
    
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

useEffect(() => {
setIsLoading(false)
setPrompt('')
setInputText('')
},[data])

  return (
    <>
      <Title> Business Name Suggester </Title>
      <p>
        {" "}
        Write a description of your buisness and you will receive business name
        sugestoins. Finsih the sentence 'My Business...'
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth={true}
          onChange={(e) => handleChange(e)}
          value={inputText}
          placeholder="sells five different colours of hat..."
          type="text"
        />
        <div className="flex justify-center">
          <Button disabled={isLoading} type="submit" variant="outlined" size="large">
            Submit
          </Button>
        </div>
      </form>
      <ChatGPTResponse data={data} />
    </>
  );
};

export default BusinessNameSuggester;
