# Stage 1 — build
FROM node:24-alpine AS builder
RUN corepack enable
RUN apk add --no-cache python3 py3-pip && \
    pip3 install fonttools brotli --break-system-packages
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN UNICODES=$(node scripts/collect-chars.mjs --range-only) && \
    for f in src/assets/fonts/*.woff2; do \
      pyftsubset "$f" --unicodes="$UNICODES" --flavor=woff2 --output-file="${f}.tmp" && \
      mv "${f}.tmp" "$f"; \
    done
RUN pnpm run build

# Stage 2 — serve
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
