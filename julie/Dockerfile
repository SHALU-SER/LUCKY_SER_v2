FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/SHALU-SER/LUCKY_SER_v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/SHALU-SER/Nandhuttynew
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
