#!/bin/bash

git pull

yarn --immutable

yarn build

echo "Deploy done"