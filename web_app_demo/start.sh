#!/bin/bash

cd server || exit
npm install
npm run start &
cd ..

cd client || exit
npm install
npm run dev &

wait