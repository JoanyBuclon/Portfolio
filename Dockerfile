# Stage 1 — build
FROM node:24.22.1-alpine@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53 AS builder
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
FROM nginx:1.30.6-alpine@sha256:47928bf67eb62a1863cb08d9ecb52d3e704304ba614eaee17884204677702951
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
