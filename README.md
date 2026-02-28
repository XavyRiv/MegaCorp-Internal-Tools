# MegaCorp Internal Tools Build

**CONFIDENTIAL**: This repository contains proprietary internal tools for MegaCorp employees only. Unauthorized access, distribution, or reproduction is strictly prohibited.

## Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 6+

## Setup Instructions

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in the necessary credentials.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the required backing services (Database, Cache):
   ```bash
   docker-compose up -d
   ```
5. Run the application in development mode:
   ```bash
   npm run dev
   ```

## Architecture

This service acts as a centralized dashboard and API gateway for various internal microservices. It handles authentication, generic tooling requests, and aggregates data from multiple internal MegaCorp sources.

## Security Notice
Please ensure no hardcoded secrets or personal tokens are committed to this repository. All secrets must be securely stored in Vault and injected at runtime in production.
