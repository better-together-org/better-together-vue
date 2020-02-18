#!/bin/bash

yarn install --frozen-lockfile
yarn build
# optionally, you can activate gzip support wih the following line:
find dist -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|css\)$' -exec gzip -f -k {} \;
