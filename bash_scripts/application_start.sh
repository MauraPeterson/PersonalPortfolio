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

#reroute traffic
sudo apt-get install iptables

sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

#start our node app in the background
node index.js > ~/index.out.log 2> ~/index.err.log < /dev/null & 