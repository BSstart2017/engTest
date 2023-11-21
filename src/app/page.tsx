'use client'

import React, {useEffect, useState} from 'react';
import {Button, Container, Heading, HStack, Input, Select, Text, Textarea, VStack} from "@chakra-ui/react";
import {vocabulary, VocabularyType} from "@/app/const";
import Timer from "@/components/Timer";

enum LanguageEnum {
  'ru' = 'ru',
  'en' = 'en'
}
export default function LanguageQuiz() {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(0);
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.ru);
  const [selectVocabulary, setSelectVocabulary] = useState(Object.keys(vocabulary)?.[0]);
  const [actualQuestions, setActualQuestions] = useState('')
  const [isStart, setIsStart] = useState(false)
  const [indexWord, setIndexWord] = useState<null | number>(null)
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])
  const [lastWord, setLastWord] = useState(0)
  const [arrayGenerated, setArrayGenerated] = useState<number[]>([])
  const [errorWord, setErrorWord] = useState<VocabularyType[]>([])
  
  const getRandomNumber = (maxValue:number, arrayGenerated:number[] = []) => {
    const availableNumbers = Array.from({ length: maxValue }, (_, index) => index);
    const unusedNumbers = availableNumbers.filter((num) => !arrayGenerated.includes(num));
    
    if (unusedNumbers.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * unusedNumbers.length);
    return unusedNumbers[randomIndex];
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const [y] = numbers;
  
  // @ts-ignore
  const dataVocabulary = vocabulary[selectVocabulary]
  
  const handleClick = () => {
    if(indexWord === null) return
    
    const isArrayAnswers = Array.isArray(answers[indexWord])
    
    const isTrueAnswer = isArrayAnswers
      ? (answers[indexWord] as unknown as string[]).find(ans => ans.toLowerCase().trim() === answer.toLowerCase().trim())
      : answers[indexWord].toLowerCase().trim() === answer.toLowerCase().trim()
    
    if(isTrueAnswer){
      setResult(prevState => prevState + 1)
    } else {
      setErrorWord((prevState) => [...prevState, { [questions[indexWord]]: ` ${answers[indexWord]} / ${answer}` }])
    }
    setAnswer('')
    setLastWord(prevState => prevState - 1)
    
    let index = getRandomNumber(questions.length - 1, arrayGenerated)
    if(index !== null){
      setIndexWord(index)
      // @ts-ignore
      setArrayGenerated(prevState => [...prevState, index])
      setActualQuestions(questions[index])
    }
  }
  
  const handleStart = () => {
    setIsStart(true)
    setResult(0)
    let index = getRandomNumber(questions.length - 1, arrayGenerated)
    if(index !== null){
      setIndexWord(index)
      // @ts-ignore
      setArrayGenerated(prevState => [...prevState, index])
      setActualQuestions(questions[index])
    }
  }
  
  const handleStop = () => {
    setIsStart(false)
    setActualQuestions('')
    setIndexWord(0)
    setLastWord(Object.values(dataVocabulary).length)
    setArrayGenerated([])
    setErrorWord([])
  }
  
  useEffect(() => {
    setQuestions(language === LanguageEnum.ru
      ? Object.keys(dataVocabulary)
      : Object.values(dataVocabulary))
    setAnswers(language === LanguageEnum.ru
      ? Object.values(dataVocabulary)
      : Object.keys(dataVocabulary))
    setLastWord(Object.values(dataVocabulary).length)
  }, [language, dataVocabulary])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container
        maxWidth={"full"}
        minH={"75vh"}
        bgColor={"orange"}
        justifyContent={'end'}
        borderRadius={'50px'}
      >
        <HStack m={5}>
          <HStack w={'70%'} justifyContent={'center'}>
            <Heading as='h2' size='md'>
              Набрано балов: {result} из {questions.length}
            </Heading>
            <Heading as='h2' size='md'>
              осталось слов: {lastWord}
            </Heading>
          </HStack>
          <VStack spacing={5} p={5} border={'2px solid black'} borderRadius={'50px'} bgColor={'red.300'}>
            <Heading as='h2' size='md'>
              Язык ввода
            </Heading>
            <Select
              isDisabled={isStart}
              w={"md"}
              value={language}
              onChange={e => setLanguage(e.target.value as LanguageEnum)}
            >
                  <option value={'ru'}>Русский</option>
                  <option value={'en'}>Английский</option>
            </Select>
            <Heading as='h2' size='md'>
              Выбери нужный Вариант практики
            </Heading>
            <Select
              isDisabled={isStart}
              w={"md"}
              value={selectVocabulary}
              onChange={e => setSelectVocabulary(e.target.value)}
            >
              {
                Object.keys(vocabulary).map(vocal => (
                  <option key={vocal} value={vocal}>{vocal}</option>
                ))
              }
            </Select>
            <Button
              bg={'blue'}
              border={'2px solid blue'}
              colorScheme='blue'
              color={'black'}
              onClick={isStart ? handleStop : handleStart}
            >
              {isStart ? 'Стоп' : 'Cтарт'}
            </Button>
          </VStack>
        </HStack>
        {isStart && lastWord !== 0 && <VStack spacing={5}>
         <Timer isStart={isStart}/>
          <Heading as='h2' size='md'>
            Переведите слово: <Text color={'blue'} as={'span'}>{Array.isArray(actualQuestions) ? actualQuestions.join(' / ') : actualQuestions}</Text>
          </Heading>
          <Input
            borderColor={'black'}
            bgColor={'gray.400'}
            width={'xs'}
            onChange={e => setAnswer(e.target.value)}
            value={answer}
            isDisabled={lastWord === 0}
            onKeyPress={(event) => {
              if (event.key === 'Enter'){
                handleClick()
              }
            }}
          />
          <Button
            bg={'blue'}
            border={'2px solid blue'}
            colorScheme='blue'
            color={'black'}
            onClick={handleClick}
            isDisabled={lastWord === 0}
          >
            Проверить
          </Button>
          <Textarea
            width={'xl'}
            defaultValue={errorWord.map((item) => {
              return Object.keys(item).map((key) => `${key}: ${item[key]}`).join('\n');
            }).join('\n\n')}
            rows={errorWord.length + 2}
            mb={5}
          />
        </VStack>}
      </Container>
    </main>
  )
}