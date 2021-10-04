FROM mono:6.12.0.107

RUN apt update

RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

WORKDIR /bridge

COPY . .

RUN ln -s /usr/lib/mono/xbuild/14.0/bin /usr/lib/mono/xbuild/15.0/

RUN cd ./LunaToolbox && npm i && npm i ./ -g && npm link && npm rebuild
