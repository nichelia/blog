FROM nichelia/blog:base AS compile-image

# Copy needed files
COPY --chown=${USER}:${USER} . ${APP_DIR}

RUN ng build --prod

# ----

FROM node:alpine AS build-image

LABEL maintainer="Nicholas Elia <me@nichelia.com>"

# Environment variables
ENV REFRESHED_AT 2020-06-08
ENV DEV_DIR="/usr/src"
ENV APP_DIR="${DEV_DIR}/blog/blog/"
ENV USER="nobody"

# Set working directory
RUN mkdir -p ${APP_DIR} && \
    chown -R node:node ${APP_DIR}
WORKDIR ${APP_DIR}

# Install node dependencies
RUN npm i -s express

# Copy needed files
COPY --chown=${USER}:${USER} --from=compile-image /usr/src/blog/blog/dist /usr/src/blog/blog/dist
COPY --chown=${USER}:${USER} --from=compile-image /usr/src/blog/blog/server.js /usr/src/blog/blog/server.js

# Switch Non-root user
USER ${USER}

EXPOSE 8080
CMD [ "node", "server.js" ]