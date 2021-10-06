FROM mono:6.12.0.107

RUN apt update

# Fix puppeteer dependencies issue
RUN apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils -y

RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

WORKDIR /bridge

COPY . .

RUN ln -s /usr/lib/mono/xbuild/14.0/bin /usr/lib/mono/xbuild/15.0/

RUN cd ./LunaToolbox && npm i && npm i ./ -g && npm link && npm rebuild
RUN npm i local-web-server -g
