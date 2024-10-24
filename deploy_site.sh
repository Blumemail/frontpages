#!/bin/bash

# ONLY RUN THIS SCRIPT ON THE BLUMEMAIL SERVER, THIS IS ONLY MEANT TO BE RAN ON THE BLUMEMAIL SERVER ITSELF.

echo -e "\e[36mCreating new site build...\e[0m"
npm run build

if [ $? -eq 0 ]; then
    echo -e "\e[32m✓ Site build was successful. Deploying site to production.\e[0m"
else
    echo -e "\e[31m× Error in site build. Check above.\e[0m"
fi

echo -e "\e[36mDeploying Blumemail...\e[0m"
rm -rfv /var/www/html
mkdir /var/www/html
cp -vr /blumemail/dist/* /var/www/html
echo -e "\e[32m✓ Blumemail was deployed to production.\e[0m"
