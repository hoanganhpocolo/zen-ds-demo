# ── Stage 1: Install dependencies ────────────────────────────
FROM node:22-alpine AS deps

WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/tokens/package.json   packages/tokens/package.json
COPY packages/icons/package.json    packages/icons/package.json
COPY packages/components/package.json packages/components/package.json
COPY apps/docs/package.json         apps/docs/package.json
COPY apps/portal/package.json       apps/portal/package.json

RUN npm ci

# ── Stage 2: Build ──────────────────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app
COPY --from=deps /app/node_modules  ./node_modules
COPY . .

# APP_NAME is "docs" or "portal" — set at build time
ARG APP_NAME=portal
ENV APP_NAME=${APP_NAME}

# Vite configs use source aliases, so no need to pre-build packages.
# Just build the target app directly.
RUN npm run build --workspace=apps/${APP_NAME}

# ── Stage 3: Serve with nginx ───────────────────────────────
FROM nginx:alpine AS production

ARG APP_NAME=portal
# docs → 81, portal → 80 (override at build time with --build-arg PORT=...)
ARG PORT=80
ENV PORT=${PORT}

COPY docker/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/apps/${APP_NAME}/dist /usr/share/nginx/html

EXPOSE ${PORT}

# envsubst replaces ${PORT} in the template before nginx starts
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
