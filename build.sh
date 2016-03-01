#!/usr/bin/env bash

set -ev

rm -rf dist/
mkdir dist/

npm run lint

babel sorting \
  --out-dir dist/sorting