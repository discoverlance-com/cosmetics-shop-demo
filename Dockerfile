# base node image
FROM node:16-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install 
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

ENV NODE_ENV development

WORKDIR /myapp

ADD package.json pnpm-lock.yaml ./
RUN pnpm install

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD . .
RUN pnpm run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
ADD . .

CMD ["npm", "start"]