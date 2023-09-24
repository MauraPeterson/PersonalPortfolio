#!/bin/bash
sudo chmod -R 777 /home/ec2-user/PersonalPortfolio
#navigate into our working directory where we have all our github files
cd /home/ec2-user/PersonalPortfolio

#add npm and node to path
export NVM_DIR"$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion"] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion 

#install node modules
npm install

#start our node app in the background
node index.js > index.our.log 2> app.err.log < /dev/null & 