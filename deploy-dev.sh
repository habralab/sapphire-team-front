#!/bin/bash

git reset --hard HEAD

git pull --force

yarn --immutable

yarn build

echo "Deploy done"