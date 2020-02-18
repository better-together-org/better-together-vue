#!/bin/bash

yarn install --frozen-lockfile
yarn build
mv public public-vue # GitLab Pages hooks on the public folder
mv dist public # rename the dist folder (result of npm run build)
# optionally, you can activate gzip support wih the following line:
find public -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|css\)$' -exec gzip -f -k {} \;
