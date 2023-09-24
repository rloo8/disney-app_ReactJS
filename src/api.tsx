const BASE_URL = "https://disney_api.nomadcoders.workers.dev";

export function fetchCharacter() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export function fetchCharacterDetail(characterId: string | undefined) {
  return fetch(`${BASE_URL}/characters/${characterId}`).then((response) =>
    response.json()
  );
}
