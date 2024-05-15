# Requirements

- NodeJS v18
- Docker and Docker Compose (optional for Docker Deployment)

# How to setup

## Way 1 (Docker-Version)

```bash
$ git clone https://github.com/PokeFred/poke-sky.git
$ cd poke-sky

# Docker
$ docker build --no-cache -t poke_sky
$ docker run poke_sky

# Docker Compose
$ docker compose up --build -d
```

## Way 2 (Manuel)

### base setup

```bash
$ git clone https://github.com/PokeFred/poke-sky.git
$ cd poke-sky
$ npm install
```

### development environment

```bash
$ npm run dev
```

### production environment

```bash
$ npm run build
$ npm start
```