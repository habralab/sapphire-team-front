#!/bin/bash

git reset --hard HEAD

git pull

yarn --immutable

yarn build

echo "Deploy done"