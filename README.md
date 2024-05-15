# Requirements
- NodeJS v18
- Docker (optional)
- Docker Compose (optional)

# How to setup
## Development Environment
```bash
$ git clone https://github.com/PokeFred/poke-sky.git
$ cd poke-sky
$ npm install
$ cp .env.example .env # You need to configure it a little bit yourself!!!
$ npm run dev
```

## Production Environment
```bash
$ git clone https://github.com/PokeFred/poke-sky.git
$ cd poke-sky
$ npm install
$ cp .env.example .env # You need to configure it a little bit yourself!!!

# Way 1 (Docker Compose, prefered one)
$ docker compose up --build -d

# Way 2 (Docker)
$ docker build --no-cache -t poke_sky
$ docker run poke_sky

# Way 3 (normal NodeJS)
$ npm run build
$ npm start
```
