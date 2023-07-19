#!/bin/bash

echo "VUE_APP_BETTER_TOGETHER_API_URI=${VUE_APP_BETTER_TOGETHER_API_URI}" >> ./.env

yarn install --frozen-lockfile

if [ ! -d "dist" ]; then
    mkdir dist
fi

yarn build
# optionally, you can activate gzip support wih the following line:
find dist -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|css\)$' -exec gzip -f -k {} \;
