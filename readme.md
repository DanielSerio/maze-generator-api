# Maze API

A Simple API for generating mazes

## Install

    yarn install

or

    npm -i --save

## Use

    yarn start

or

    npm run start

## API


GET MAZE AS IMAGES: 

    http://127.0.0.1:4001/display

GET MAZE AS JSON:

    http://127.0.0.1:4001/

GET CUSTOM MAZE AS IMAGES:

  Query:

    cellSize number
    rows number
    cols number

  Query Limits:
    
    rows: 
      min-value: 5
      max-value: 59
    cols: 
      min-value: 5
      max-value: 59
  
EX: 

    http://127.0.0.1:4001/display?cellSize=16&rows=59

GET CUSTOM MAZE AS JSON:
  
  Query:
    
    cellSize number
    rows number
    cols number
  
  Query Limits:
    
    rows: 
      min-value: 5
      max-value: 59
    cols: 
      min-value: 5
      max-value: 59
  
  EX: 
    
    http://127.0.0.1:4001/?cellSize=16&cols=59