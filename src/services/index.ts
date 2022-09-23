export const getCharacters = async (params: Record<string, string> = {}) => {
    const response = await fetch(
        "https://rickandmortyapi.com/api/character" + new URLSearchParams(params)
    );
    return response.json();
};