# Stage 1: Build the application
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy package files and install dependencies using pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js app for production
RUN pnpm build

# Stage 2: Run the application
FROM node:18-alpine AS runner

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Set the environment to production
ENV NODE_ENV production

# Copy over the necessary files from the builder stage
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]
